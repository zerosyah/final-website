const accountingModel = require("../models/accounting.model");
const bussinessstudiesModel = require("../models/businessstudies.model");
const creativeartModel = require("../models/creativeart.model");
const dramaModel = require("../models/drama.model");
const englishModel = require("../models/english.model");
const geaographyModel = require("../models/geography.model");
const historyModel = require("../models/history.model");
const isizuluModel = require("../models/isizulu.model");
const lifescienceModel = require("../models/lifescience.model");
const lifeorientation = require("../models/lifeorientation.model");
const mathematicsModal = require("../models/mathematics.model");
const naturalscienceModel = require("../models/naturalscience.model");
const physicalscienceModel = require("../models/physicalscience.model");
const tourismModel = require("../models/tourism.model");
const technologyModel = require("../models/technology.model");
const userModel = require("../models/user.model");
const userDetailModel = require("../models/user.detail.model");
const mongoose = require("mongoose");
const handleError = require("../utils/error");

const createAccounting = async (req, res, next) => {};

const createDrama = async (req, res, next) => {};

const createEnglish = async (req, res, next) => {};

const createTourism = async (req, res, next) => {};

const createMethematics = async (req, res, next) => {};

const createPhysicalScience = async (req, res, next) => {
  console.log(req.params.studentId);
  const { testMonth, testName, mark} = req.body;
  const addMarks = await physicalscienceModel.findOneAndUpdate(
    {studentId: req.params.studentId},
    {
      $push: {
        marks: {
          testMonth,
          testName,
          mark,
          date: new Date().toLocaleString()
        }
      }
    },
    { new: true }
  )
};
const getPhysicalScience = async (req, res, next) => {
  console.log(req.params.studentId);
  try {
    const studentValid = await physicalscienceModel.findOne({studentId: req.params.studentId});

    if (!studentValid) {
      next(
        handleError(
          404,
          `student: ${req.params.studentId} does not partake on this class.`
        )
      );
    }
    res.status(200).json({student: studentValid})
  } catch (error) {
    next(error);
  }
};

const createLifeScience = async (req, res, next) => {};

const createNaturaScience = async (req, res, next) => {};

const createGeography = async (req, res, next) => {};

const createLifeOrientation = async (req, res, next) => {};

const createHistory = async (req, res, next) => {};

const createIsizulu = async (req, res, next) => {};

const createBussinessStudies = async (req, res, next) => {};

const createCreativeArt = async (req, res, next) => {};

const createTechnology = async (req, res, next) => {};

module.exports = {
  createAccounting,
  createDrama,
  createEnglish,
  createTourism,
  createMethematics,
  createPhysicalScience,
  createLifeScience,
  createNaturaScience,
  createGeography,
  createLifeOrientation,
  createHistory,
  createIsizulu,
  createBussinessStudies,
  createCreativeArt,
  createTechnology,
  getPhysicalScience
};
