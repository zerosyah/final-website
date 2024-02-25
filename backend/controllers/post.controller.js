const errorHandler = require("../utils/error.js")
const postModel = require("../models/post.model.js");
const { post } = require("../routes/post.route.js");
const { now } = require("mongoose");

const create = async  (req, res, next) =>{
    console.log(req.user);
    /*if(!req.user.isAdmin){
        return next(errorHandler(403, "you are not allowed to do that!"));
    }*/
    console.log("checking for title and content");
    if(!req.body.title || !req.body.content){
        return next(errorHandler(403, "title and content are required"));
    }
    const slug = req.body.title.split().join("-").toLowerCase().replace(/[^a-zA-Z0-9 -]/g, "");
    const newPost = new postModel({
        ...req.body, slug, userId: req.user.id,
    })
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch(error){
        next(error)
    }
}
const getPosts = async(req, res, next) =>{
    try{
        const startIndex = parsent(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === "asc" ? 1 : -1;
        const posts = await postModel.find({
            ...(req.query.userId && { userId: req.query.userId }),
            ...(req.query.category && { category: req.query.category }),
            ...(req.query.slug && { category: req.query.slug}),
            ...(req.query.postId && {_id: req.query.postId}),
            ...(req.query.searchTerm && {
                $or: [
                    { title: { $regex: req.query.searchTerm, $options: "i" } },
                    { content: { $regex: req.query.searchTerm, $options: "i" } },
                ],

            }),
    }).sort({ updatedAt: sortDirection}).skip(startIndex).limit(limit);

    const tottalPosts = await post.countDocuments();
    const now = new Date(
        now.getFullYear(),
        now.getMonth()-1,
        now.getDate(),
    );
    const lastMonthPosts = await post.countDocuments({
        createdAt: {
            $gte: oneMonthAgo,
        }
    });
    res.status(200).json(
        posts,
            tottalPosts,
            lastMonthPosts,
    )
    } catch(error){
        next(error)
    }
}

module.exports = {
    create,
    getPosts
}