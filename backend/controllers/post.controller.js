const errorHandler = require("../utils/error.js");
const postModel = require("../models/post.model.js");

const create = async (req, res, next) => {
  if(!req.user.isAdmin){
        return next(errorHandler(403, "you are not allowed to do that!"));
    }

  // check if title and content are not empty
  if (!req.body.title || !req.body.content) {
    // if true return error
    return next(errorHandler(403, "title and content are required"));
  }

  // create slug
  const slug = req.body.title
    .split()
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/g, "");

  // create new post
  const newPost = new postModel({
    // set post data
    ...req.body,
    slug,
    userId: req.user.id,
  });

  // save post
  try {
    // save post
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    // if error return error
    next(error);
  }
};


// get all posts
const getAll = async (req, res, next) => {
  // check if title and content are not empty
  try {
    // initiate start index
    const startIndex = parseInt(req.query.startIndex) || 0;

    // get limit
    const limit = parseInt(req.query.limit) || 9;

    // sort direction
    const sortDirection = req.query.order || "asc" ? 1 : -1;

    // search post id
    const posts = await postModel.find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.category && { category: req.query.category }),
        ...(req.query.slug && { category: req.query.slug }),
        ...(req.query.postId && {_id: req.query.postId}),
        ...(req.query.searchTerm && {
            $or: [
                {title: {$regex: req.query.searchTerm, $options: "i"}},
                {content: {$regex: req.query.searchTerm, $options: "i"}},
            ],
        }),
    }).sort({ updatedAt: sortDirection }).skip(startIndex).limit(limit);

    // get total posts
    const totalPosts = await postModel.countDocuments();

    // get last month
    const now = new Date();
    const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate(),
    );

    // get last month
    const lastMonthAgo = await postModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
    });

    // send response
    res.status(200).json({
        posts,
        totalPosts,
        lastMonthAgo,
    });
  } catch (error) {
    // send error
    next(error);
  }
};

module.exports = {
  create,
  getAll
};