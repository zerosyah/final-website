const errorHandler = require("../utils/error.js");
const comment = require("../models/comment.model.js")

// create comment controller
const Create = async (req, res,next) =>{
    // request the content, postId and userId from the frontend
    const { content, postId, userId } = req.body
    // try to create a new comment
    try{
        // check if the user is authenticated
        if(userId !== req.user.id)
            // if not send error
            return next(errorHandler(403, "you can't comment on other's posts"))
        
        // create a new comment
        const newComment = new comment({
            content,
            postId,
            userId,
        });

        // save the new comment
        await newComment.save()

        // send response
        res.status(200).json(" new comment created")
    } catch(error){
        // send error if the action fails
        next(error)
    }

}
// get all comments controller
const getAll = async (req, res, next) => {
    try{
        // get all comments from the database and sort them in descending order
        const comments = await comment.find({ postId: req.params.postId }).sort({ createdAt: -1 })

        // return the comments
        res.status(200).json(comments)
    }catch(error){
        // send error if the action fails
        next(error)
    }
}

// like comment controller
const commentLike = async(req, res, next)=>{
    // try to find the post using it's Id
    try{
        // find the post from the database
        const com = await comment.find({ _id: req.params.commentId });
        
        // if post is not found 
        if (!com){
            // send error
            return next(errorHandler(404, "comment not found"))
        }

        // searching if the user has already liked the post
        const userIndex = com[0].likes.indexOf(req.user.id);

        // if the user has not liked the post
        if (userIndex === -1){
            // increase the number of likes
            com[0].numberOfLikes += 1

            // add the user to the likes
            com[0].likes.push(req.user.id)
        } else{
            // decrease the number of likes
            com[0].numberOfLikes -= 1

            // remove the user from the likes
            com[0].likes.splice(userIndex, 1)
        }

        // save the post
        await com[0].save()

        // return the post
        res.status(200).json(com)
        /*console.log(com);*/

    } catch(error){
        // send error if the action fails
        next(error)
    }
}

module.exports = {
    Create,
    getAll,
    commentLike
}