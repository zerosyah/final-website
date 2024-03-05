const express = require("express")
const comment = require("../controllers/comment.controller.js")
const verifyToken = require("../utils/verifyzuder.js")

const router = express.Router()

// create comment
router.post("/create", verifyToken, comment.Create)

// get all comments
router.get("/comments/:postId", comment.getAll)

// comment like
router.put("/like/:commentId", verifyToken, comment.commentLike)

module.exports = router;