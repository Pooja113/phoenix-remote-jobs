import express from "express";
import {createPost , getPosts } from "../controllers/jobPostController.js"

const router = express.Router();

router.route("/joblist").post(createPost);
router.route("/joblist").get(getPosts);

export default router
