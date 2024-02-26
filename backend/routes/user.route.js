const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller.js");
const verifyToken = require("../utils/verifyzuder.js");

router.get("/", user.test);

// update api
router.post("/update/:id", verifyToken, user.updateFunction)

// delete api
router.delete("/delete/:id", verifyToken, user.deleteFunction)

module.exports = router;