const express = require("express");
const app = express();

app.use(express.json());

const urlRoute = require("./routes/urlRoute");

app.use("/api", urlRoute);
module.exports = app;
