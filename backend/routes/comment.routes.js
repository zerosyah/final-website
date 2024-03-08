const express = require("express");
const comment = require("../controllers/comment.controller.js");
const verifyToken = require("../utils/verifyzuder.js");

const router = express.Router();

// create comment
router.post("/create", verifyToken, comment.Create);

// get all comments
router.get("/comments/:postId", comment.getAll);
router.get("/comments", comment.getComments);

// comment like
router.put("/like/:commentId", verifyToken, comment.commentLike);

// edit comment
router.put("/edit/:commentId", verifyToken, comment.editComment);

// delete comment
router.delete("/delete/:commentId", verifyToken, comment.deleteComment);

module.exports = router;
