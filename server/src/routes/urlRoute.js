const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleRedirectToOriginalUrl,
  handleGetAnalytics,
  handleGetAllUrlMadeByUserId,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirectToOriginalUrl);
router.get("/analytics/:shortId", handleGetAnalytics);
router.get("/all-urls/:id", handleGetAllUrlMadeByUserId);

module.exports = router;
