const jwt = require("jsonwebtoken");
const handleError = require("./error.js");

/**
 * verify token and move to the middlewere
 * @param {*} req fetch data from frontend
 * @param {*} res send data to frontend
 * @param {*} next error 
 */
const verifyToken = (req, res, next) =>{
    // request token from the cookie of the browser
    const token = req.cookies.access_token;

    //if token is not available
    if (!token) return next(handleError(401, "you are not authenticated!!"))

    //verify token
    jwt.verify(token, process.env.JWT_SECRET, 
        /**
         * catch error
         * @param {*} err error
         * @param {*} user user
         */
        (err, user)=>{
        if(err) return next(handleError(403, "token not valid!"));

        //if token is valid return user
        req.user = user;
        next()
    })
}

module.exports = verifyToken;