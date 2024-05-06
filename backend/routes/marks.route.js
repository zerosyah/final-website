const express = require("express");
const create = require("../controllers/marks.controller");
const router = express.Router();


router.post("/create/:subject/:studentId", create.createDynamicController);
router.get("/get/:studentSubject/:studentId", create.dynamicController);

module.exports = router;
