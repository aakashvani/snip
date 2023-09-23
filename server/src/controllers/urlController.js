const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const shortid = require("shortid");
const URL = require("../models/urlModel");

exports.handleGenerateNewShortUrl = catchAsyncErrors(async (req, res, next) => {
  const body = req.body;

  if (!body.url) {
    return next(new ErrorHandler("url is required", 400));
  }

  const shortID = shortid();

  const newURL = await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.status(201).json({
    success: true,
    message: "Short Url is generated",
    newURL,
  });
});

exports.handleRedirectToOrignalUrl = catchAsyncErrors(
  async (req, res, next) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectUrl);
  }
);

exports.handleGetAnalatics = catchAsyncErrors(async (req, res, next) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
});
