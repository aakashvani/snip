const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleRedirectToOrignalUrl,
  handleGetAnalatics,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirectToOrignalUrl);
router.get("/analytics/:shortId", handleGetAnalatics);

module.exports = router;
