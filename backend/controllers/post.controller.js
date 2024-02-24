const errorHandler = require("../utils/error.js")
const postModel = require("../models/post.model.js")

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

module.exports = create