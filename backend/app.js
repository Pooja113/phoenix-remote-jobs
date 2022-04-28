const express = require("express");
const app = express();

app.use(express.json());
const jobform = require("./routers/jobPostRouter");

app.use("/",jobform);

module.exports = app