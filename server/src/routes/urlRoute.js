const express = require("express");
const { handleGenerateNewShortUrl } = require("../controller/urlController");

const router = express.Router();

router.post("/create-short-url", handleGenerateNewShortUrl);

module.exports = router