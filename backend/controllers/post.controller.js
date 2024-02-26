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
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    // if error return error
    next(error);
  }
};

const getAll = async (req, res, next) => {
  console.log(req.user);
  console.log("get posts");
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order || "asc" ? 1 : -1;
    
    const posts = await postModel.find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.quert.category && { category: req.query.category }),
        ...(req.query.slug && { category: req.query.slug }),
        ...(req.query.postId && {_id: req.query.postId}),
        ...(req.query.searchTerm && {
            $or: [
                {title: {$regex: req.query.searchTerm, $options: "i"}},
                {content: {$regex: req.query.searchTerm, $options: "i"}},
            ],
        }),
    }).sort({ updatedAt: sortDirection }).skip(startIndex).limit(limit);
    const totalPosts = await postModel.countDocuments();

    const now = new Date();
    const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate(),
    );
    const lastMonthAgo = await postModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
    });
    res.status(200).json({
        posts,
        totalPosts,
        lastMonthAgo,
    });
    if (posts){
        console.log(posts);
        res.status(200).json(posts);
    }

  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll
};
