const express = require("express");
const verifyToken = require("../utils/verifyzuder");
const post = require("../controllers/post.controller.js")
const router = express.Router();

router.post("/create", verifyToken, post.create);
router.get("/posts", post.getAll);

module.exports = router 