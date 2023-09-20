const express = require("express");
const app = express();

app.use(express.json());

const urlRoute = require("./routes/urlRoute");

app.use("/url", urlRoute);
module.exports = app;
