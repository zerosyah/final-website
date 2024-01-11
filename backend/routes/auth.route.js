const express = require("express")
const  router = express.Router()
const sign = require("../controllers/auth.controller.js")

//route for sign-up
router.post("/signup", sign.signup)

//route for sign-in
router.post("/signin", sign.signin)

//route for sign-in and sign-up with google
router.post("/google", sign.google)

//signout
router.get("/signout", sign.signout)

module.exports = router;