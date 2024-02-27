const express = require("express");
const verifyToken = require("../utils/verifyzuder");
const post = require("../controllers/post.controller.js")

const router = express.Router();

// create posts routes
router.post("/create", verifyToken, post.create);

// get all posts routes
router.get("/posts", post.getAll);

module.exports = router 