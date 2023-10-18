const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const shortid = require("shortid");
const URL = require("../models/urlModel");

exports.handleGenerateNewShortUrl = catchAsyncErrors(async (req, res, next) => {
  const body = req.body;

  if (!body.url && !body.title) {
    return next(new ErrorHandler("url or title is required", 400));
  }

  const shortID = shortid();

  const newURL = await URL.create({
    title: body.title,
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    userId: body.userId,
  });

  return res.status(201).json({
    success: true,
    message: "Short Url is generated",
    newURL,
  });
});

exports.handleRedirectToOriginalUrl = catchAsyncErrors(
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

exports.handleGetAnalytics = catchAsyncErrors(async (req, res, next) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
});

exports.handleGetAllUrlMadeByUserId = catchAsyncErrors(
  async (req, res, next) => {
    const userId = req.params.id;

    if (!userId) {
      return next(new ErrorHandler("Not found user", 401));
    }

    const userUrls = await URL.find({ userId: userId });

    if (!userUrls) {
      return next(new ErrorHandler("Not found any data", 401));
    }

    res.status(200).json({
      success: true,
      urls: userUrls,
    });
  }
);
