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

  // req uswr data from the frontend
  const user = req.body;

  // create new user using data from the frontend
  const newUser = new userModel(user);

  // try save user
  try {
    // saving user to the database
    await newUser.save();

    // send response to the frontend
    res.status(201).json({ message: "user created" });
  } catch (error) {
    // send error to the frontend if failed to create user
    next(error);

    // send error to the frontend if failed to create user
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
  // req user data {email, password} from the frontend
  const { email, password } = req.body;

  // try find user from the database
  try {
    //find email from the database
    const validEmail = await userModel.findOne({ email: email });

    // if user with email not found send error to the frontend
    if (!validEmail) return next(handleError(404, "user with email not found"));

    // if user with email found compare password from the frontend with password from the database
    const validPassword = await bcrypt.compare(password, validEmail.password);

    // if password not match send error to the frontend
    if (!validPassword)
      return next(handleError(401, "invalid credentials"));

      // if password match generate token
    const token = jwt.sign({ id: validEmail._id }, process.env.JWT_SECRET);

    // remove password from the database data return to the frontend
    const { password: pass, ...rest } = validEmail._doc;

    // set expiration date
    const expiryDate = new Date(Date.now() + 3000000);

    // send token and status code
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    // send error to the frontend
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
  // req data from google data base
  try {
    // find find user with email from google data base
    const user = await userModel.findOne({ email: req.body.email });

    // action if availablle
    if (user) {
      // generate token if user found
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      // remove password
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
    // send error to the frontend
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
