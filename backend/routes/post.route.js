const express = require("express");
const verifyToken = require("../utils/verifyzuder");
const create = require("../controllers/post.controller.js")
const router = express.Router();

router.post("/create", verifyToken, create)

module.exports = router