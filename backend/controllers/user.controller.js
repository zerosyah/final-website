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
        next(error)
    }
}
// delete user api
const deleteFunction = async (req, res, next)=>{
    // check if user id is not equal to req.params.id
    if (req.user.id !== req.params.id) {
        return next(handleError(401, "you can delete only your account"));
    }
    try {
        // delete user
        await userModel.findByIdAndDelete(req.params.id);
        // send response
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    test,
    updateFunction,
    deleteFunction
};
 