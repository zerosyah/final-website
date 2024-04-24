const handleError = require("../utils/error.js");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.js");
const userDetailModel = require("../models/user.detail.model.js");

//test api
/**
 * test api
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error
 */
const test = (req, res) => {
  res.json({
    message: "api is running",
  });
};
//update api
/**
 * update api
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error
 */
const updateFunction = async (req, res, next) => {
  // check if user id is not equal to req.params.id
  if (req.user.id !== req.params.id) {
    return next(handleError(401, "you can update only your account"));
  }
  try {
    // hash password if true
    if (req.body.password) {
      // generate salt
      const salt = await bcrypt.genSalt(10);
      // hash password
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    //update user
    const updateUser = await userModel.findByIdAndUpdate(
      //user id
      req.params.id,
      {
        //set user data
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      //new user data is true
      { new: true }
    );

    //remove password
    const { password, ...rest } = updateUser._doc;

    //send status
    res.status(200).json(rest);
  } catch (error) {
    // send error
    next(error);
  }
};
// delete user api
const deleteFunction = async (req, res, next) => {
  // check if user id is not equal to req.params.id
  if (!req.user.isAdmin && req.user.id !== req.params.id) {
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
};

// get all users controller
const getUsers = async (req, res, next) => {
  // check if user is an admin
  if (!req.user.isAdmin) {
    return next(handleError(403, "only admins can get all users"));
  }

  // get all users
  try {
    // initiate start index
    const startIndex = parseInt(req.query.startIndex) || 0;

    // get limit
    const limit = parseInt(req.query.limit) || 9;

    // sort direction
    const sortDirection = req.query.sort === "asc" ? 1 : -1;

    // find users and posts
    const users = await userModel
      .find()
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    // remove password from the database data return to the frontend
    const usersWithoutPassword = users.map((user) => {
      // remove password
      const { password, ...rest } = user._doc;

      // return rest of the data
      return rest;
    });

    // get total users
    const totalUsers = await userModel.countDocuments();

    // initialize date
    const now = new Date();

    // get last month
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    // get last month users
    const lastMonthUsers = await userModel.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    // send data to the frontend
    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};

// get user by id
const getById = async (req, res, next) => {
  try {
    // find user by id from the database
    const user = await userDetailModel.findOne({ userId: req.params.id });

    // if user not found send error to the frontend
    if (!user) return next(handleError(404, "user not found"));

    // send data to the frontend
    res.status(200).json({ users: user });
  } catch (error) {
    // send error to the frontend
    next(error);
  }
};

// get user by id without password
const get = async (req, res, next) => {
  try {
    // find user by id from the database
    const user = await userModel.findById(req.params.id);

    if (!user) return next(handleError(404, "user not found"));

    // send data to the frontend
    res.status(200).json({ users: user });
  } catch (error) {
    // send error to the frontend
    next(error);
  }
};

// get users that have commented
const userComments = async (req, res, next) => {
  // try find user from the database
  try {
    // find user by id from the database
    const user = await userModel.findById(req.params.userId);

    // if user not found send error to the frontend
    if (!user) return next(handleError(404, "user not found"));

    // remove password from the database data return to the frontend
    const { password, ...rest } = user._doc;

    // send data to the frontend
    res.status(200).json(rest);
  } catch (error) {
    // send error to the frontend
    next(error);
  }
};

const formData = async (req, res, next) => {
  //check if user is an admin or have an account
  const validId = await userModel.findById(req.params.id);
  if (!validId) {
    return next(handleError(404, "user not found, create an account first"));
  }
  if (req.user.id !== req.params.id){
    return next(handleError(404, "create an account first"));
  }

  // requisting data of the client
  const clientData = req.body;

  // create a new user Data using data from frontEnd
  const newClientData = new userDetailModel(clientData);

  // try to get user data from the frontend
  try {
    // save user data to the database
    await newClientData.save();

    // send data to the frontend
    res.status(201).json({ message: "data saved to the database" });
  } catch (error) {
    // send error to the frontend
    next(error);
  }
};

module.exports = {
  test,
  updateFunction,
  deleteFunction,
  getUsers,
  userComments,
  formData,
};
