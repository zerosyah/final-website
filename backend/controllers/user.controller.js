const handleError = require("../utils/error.js");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.js")

//test api
/**
 * test api
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error
 */
const test = (req, res) =>{
    res.json({
        message: "api is running"
    });
}
//update api
/**
 * update api
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error
 */
const updateFunction = async (req, res, next)=>{
    // check if user id is not equal to req.params.id
    if (req.user.id !== req.params.id){
        return next(handleError(401, "you can update only your account"))
    }
    try{
        // hash password if true
        if (req.body.password){
            // generate salt
            const salt = await bcrypt.genSalt(10)
            // hash password
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        //update user
        const updateUser = await userModel.findByIdAndUpdate(
            //user id
            req.params.id,
            {
                //set user data
                $set:{
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture,
                }
            },
            //new user data is true
            {new: true}
        );

        //remove password
        const {password, ...rest} = updateUser._doc;

        //send status
        res.status(200).json(rest);
    } catch(error){
        // send error
        next(error)
    }
}
// delete user api
const deleteFunction = async (req, res, next)=>{
    // check if user id is not equal to req.params.id
    if (req.user.id !== req.params.id) {
        // return error
        return next(handleError(401, "you can delete only your account"));
    }
    try {
        // delete user
        await userModel.findByIdAndDelete(req.params.id);

        // send response
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        // send error
        next(error);
    }
}

// get all users controller
const getUsers = async (req, res, next) =>{
    // check if user is an admin
    if(!req.user.isAdmin){
        return next(handleError(403, "only admins can get all users"))
    }

    // get all users
    try{
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.sort === "asc" ? 1 : -1;
        const users = await userModel.find()
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

            const usersWithoutPassword = users.map((user) => {
                const { password, ...rest } = user._doc;
                return rest;
            })

            const totalUsers = await userModel.countDocuments();

            const now = new Date();

            const oneMonthAgo = new Date(
                now.getFullYear(),
                now.getMonth() - 1,
                now.getDate()
            );

            const lastMonthUsers = await userModel.countDocuments({
                createdAt: { $gte: oneMonthAgo },
            })

        res.status(200).json({
            users: usersWithoutPassword,
            totalUsers,
            lastMonthUsers,
        })

    } catch (error){
        next(error)
    }
}

module.exports = {
    test,
    updateFunction,
    deleteFunction,
    getUsers
};
 