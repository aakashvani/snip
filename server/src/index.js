const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors("http://localhost:3000"));

app.use(express.json());

const urlRoute = require("./routes/urlRoute");
const userRoute = require("./routes/userRoute");

app.use("/url", urlRoute);
app.use("/user", userRoute);

module.exports = app;
