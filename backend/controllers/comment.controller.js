const errorHandler = require("../utils/error.js");
const comment = require("../models/comment.model.js");

// create comment controller
const Create = async (req, res, next) => {
  // request the content, postId and userId from the frontend
  const { content, postId, userId } = req.body;
  // try to create a new comment
  try {
    // check if the user is authenticated
    if (userId !== req.user.id)
      // if not send error
      return next(errorHandler(403, "you can't comment on other's posts"));

    // create a new comment
    const newComment = new comment({
      content,
      postId,
      userId,
    });

    // save the new comment
    await newComment.save();

    // send response
    res.status(200).json(" new comment created");
  } catch (error) {
    // send error if the action fails
    next(error);
  }
};
// get all comments controller
const getAll = async (req, res, next) => {
  try {
    // get all comments from the database and sort them in descending order
    const comments = await comment
      .find({ postId: req.params.postId })
      .sort({ createdAt: -1 });

    // return the comments
    res.status(200).json(comments);
  } catch (error) {
    // send error if the action fails
    next(error);
  }
};

const getComments = async (req, res, next) => {
  try {
    // initiate start index
    const startIndex = parseInt(req.query.startIndex) || 0;

    // get limit
    const limit = parseInt(req.query.limit) || 9;

    // sort direction
    const sortDirection = req.query.sort === "asc" ? 1 : -1;

    // get all comments from the database and sort them in descending order
    const comments = await comment
      .find()
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalComments = await comment.countDocuments();
    console.log(totalComments);

    // initialize date
    const now = new Date();

    // get last month
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    // get last month users
    const lastMonthComments = await comment.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    // return the comments
    res.status(200).json({comments, totalComments, lastMonthComments});
  } catch (error) {
    // send error if the action fails
    next(error);
  }
};

// like comment controller
const commentLike = async (req, res, next) => {
  // try to find the post using it's Id
  try {
    // find the post from the database
    const com = await comment.find({ _id: req.params.commentId });

    // if post is not found
    if (!com) {
      // send error
      return next(errorHandler(404, "comment not found"));
    }

    // searching if the user has already liked the post
    const userIndex = com[0].likes.indexOf(req.user.id);

    // if the user has not liked the post
    if (userIndex === -1) {
      // increase the number of likes
      com[0].numberOfLikes += 1;

      // add the user to the likes
      com[0].likes.push(req.user.id);
    } else {
      // decrease the number of likes
      com[0].numberOfLikes -= 1;

      // remove the user from the likes
      com[0].likes.splice(userIndex, 1);
    }

    // save the post
    await com[0].save();

    // return the post
    res.status(200).json(com);
    /*console.log(com);*/
  } catch (error) {
    // send error if the action fails
    next(error);
  }
};

const editComment = async (req, res, next) => {
  try {
    //console.log(req.params.commentId);
    const com = await comment.findById(req.params.commentId);
    if (!com) {
      return next(errorHandler(404, "comment not found"));
    }
    if (com.userId !== req.user.id || !req.user.isAdmin) {
      return next(errorHandler(403, "you can only edit your comments"));
    }
    const updatedComment = await comment.findByIdAndUpdate(
      req.params.commentId,
      {
        content: req.body.content,
      },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const com = await comment.findById(req.params.commentId);
    if (!com) {
      return next(errorHandler(404, "comment not found"));
    }
    if (com.userId !== req.user.id || !req.user.isAdmin) {
      return next(errorHandler(403, "you can only delete your comments"));
    }
    await comment.findByIdAndDelete(req.params.commentId);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  Create,
  getAll,
  commentLike,
  editComment,
  deleteComment,
  getComments,
};
