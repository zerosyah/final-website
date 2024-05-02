const express = require("express");
const create = require("../controllers/marks.controller");
const router = express.Router();

router.post("/create/accounting/:studentId", create.createAccounting);
router.post(
  "/create/bussinessstudies/:studentId",
  create.createBussinessStudies
);
router.post("/create/Creative_Art/:studentId", create.createCreativeArt);
router.post("/create/Drama/:studentId", create.createDrama);
router.post("/create/English/:studentId", create.createEnglish);
router.post("/create/Geography/:studentId", create.createGeography);
router.post("/create/History/:studentId", create.createHistory);
router.post("/create/Isizulu/:studentId", create.createIsizulu);
router.post("/create/Life_Sciences/:studentId", create.createLifeScience);
router.post("/create/Life_Orientation/:studentId", create.createLifeOrientation);
router.post("/create/Mathematics/:studentId", create.createMethematics);
router.post("/create/Natural_Sciences/:studentId", create.createNaturaScience);
router.post("/create/Physical_Sciences/:studentId", create.createPhysicalScience);
router.get("/get/Physical_Sciences/:studentId", create.getPhysicalScience);
router.post("/create/Technology/:studentId", create.createTechnology);
router.post("/create/Tourism/:studentId", create.createTourism);

module.exports = router;
