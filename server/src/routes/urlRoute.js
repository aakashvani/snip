const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleRedirectToOrignalUrl,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirectToOrignalUrl);

module.exports = router;
