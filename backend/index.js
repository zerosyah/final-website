const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const userRouter = require("./routes/user.route.js");
const authRouter = require("./routes/auth.route.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const postRouter = require("./routes/post.route.js");


// create express app
const app = express();

// dirictory name
const __dirnames = path.resolve();


// use express app
app.use(express.json());

// use cookies
app.use(cookieParser());

// use cors
app.use(cors());

//connect to mongongooseDB, then Listen to server
/**
 * connecting to the mongoose database and listen to the port
 * @method connect() method that takes in the connecting string to the database
 * @param {string} process.env.MONGO  is a connection string to the database
 * @param {Number} process.env.PORT is a port number
 * @param {any} Error parameter on a callback function to produce an error if it's occers
 * @method then() what to happen if connect() is successful
 * @method catch() returns an error if connect() fails
*/
mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log("connected to the database");
  app.listen(process.env.PORT, () => {
    console.log(`server running port ${process.env.PORT}`);
  });
})
  .catch((Error) => {
    console.log(Error);
  });
  
  //route api endpoints
/**
 * this are api endpoints for user route and auth
 * @method use() takes is name of the route, and required name
 * @param {string} /api/user - is direction
 * @param {string} /api/auth - is direction
 * @param {any} userRouter name for user Route
 * @param {any} authRouter name for auth route
*/

//route api endpoints for user route
app.use("/api/user", userRouter);

//route api endpoints for auth
app.use("/api/auth", authRouter);

// route api endpoints for post
app.use("/api/post", postRouter);

// use express app static path to serve static files *they must be after api endpoints
app.use(express.static(path.join(__dirnames, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirnames, "client", "dist", "index.html"));
});

//middleware api endpoint
app.use(
  /**
   * Middleware function/api endpoint
   *
   * @param {any} err catches an error if occars
   * @param {any} req get information from the frontend
   * @param {any} res response after code runs
   * @param {Function} next that will accept result or responses
   * @returns returns a status
   */
  (err, req, res, next) => {
    /**
     * variable for storing error status code and message
     *
     * @constant {any} statusCode returns status code
     * @constant {string} message stores an error message
     * @param {boolean} success false
     */
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  }
);
