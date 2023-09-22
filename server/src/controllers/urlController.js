const shortid = require("shortid");
const URL = require("../models/urlModel");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  // console.log("shortID:-",shortID)

  const newURL = await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  // console.log("new:-",newURL)

  return res.status(201).json({
    success: true,
    message: "Short Url is generated",
    newURL,
  });
}

async function handleRedirectToOrignalUrl(req, res) {
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

async function handleGetAnalatics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleRedirectToOrignalUrl,
  handleGetAnalatics,
};
