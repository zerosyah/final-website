const userModel = require("../models/user.js");
const handleError = require("../utils/error.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signup api requirest
/**
 * an api to signup a new user
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error
 */
const signup = async (req, res, next) => {
  const user = req.body;
  const newUser = new userModel(user);
  try {
    await newUser.save();
    res.status(201).json({ message: "user created" });
  } catch (error) {
    next(error);
    res.status(404).json({ message: "error occared saving user!" });
  }
};

//login api requirest
/**
 * an api to login a user
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error
 */
const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //find email from the database
    const validEmail = await userModel.findOne({ email: email });
    //action if availablle
    if (!validEmail) return next(handleError(404, "user with email not found"));
    const validPassword = await bcrypt.compare(password, validEmail.password);
    if (!validPassword)
      return next(handleError(401, "invalid credentials"));
    const token = jwt.sign({ id: validEmail._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validEmail._doc;
    const expiryDate = new Date(Date.now() + 3000000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// google login requirest
/**
 * an api to login a user with google
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error
 */
const google = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    //action if availablle
    if (user) {
      //generate token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      //remove password
      const { password: pass, ...rest } = user._doc;
      //set cookie
      const expiryDate = new Date(Date.now() + 3600000);
      //send token
      res
        .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    } else {
      //generate password
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      //create user
      const newUser = new userModel({
        //create user first name with random number and unique name
        firstName:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.floor(Math.random() * 10000).toString(),
        email: req.body.email,
        //create user last name with random number
        lastName: req.body.name,
        //create user password with generated password
        password: generatedPassword,
        //create user profile picture
        profilePicture: req.body.photo,
      });
      //save user
      await newUser.save();
      //generate token
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      //remove password
      const { password: pass, ...rest } = user._doc;
      //set cookie
      const expiryDate = new Date(Date.now() + 3600000);
      //send token
      res
        .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    console.log(error);
  }
};

const signout = async (req, res, next) => {
  res.clearCookie("access_token").status(200).json("user has been signed out");
};

// export all functions
module.exports = {
  signup,
  signin,
  google,
  signout,
};
