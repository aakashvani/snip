const shortid = require("shortid");
const URL = require("../models/urlModel");

async function handleGenerateNewShortUrl(req, res) {
  const shortID = shortid();
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

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
}

module.exports = { handleGenerateNewShortUrl };
