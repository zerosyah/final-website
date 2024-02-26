const express = require("express");
const verifyToken = require("../utils/verifyzuder");
const post = require("../controllers/post.controller.js")
const router = express.Router();

// create post api
router.post("/create", verifyToken, post.create)

// get api for post
router.get("/getposts", post.getPosts)

module.exports = router 