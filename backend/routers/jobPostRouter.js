const express = require("express");
const getJobPost = require("../controllers/jobPostController");

const router = express.Router();

router.route("/jobform").get(getJobPost);


module.exports = router