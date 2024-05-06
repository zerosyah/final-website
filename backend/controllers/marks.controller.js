const accountingModel = require("../models/accounting.model");
const bussinessstudiesModel = require("../models/businessstudies.model");
const creativeArtModel = require("../models/creativeart.model");
const dramaModel = require("../models/drama.model");
const englishModel = require("../models/english.model");
const geaographyModel = require("../models/geography.model");
const historyModel = require("../models/history.model");
const isizuluModel = require("../models/isizulu.model");
const lifescienceModel = require("../models/lifescience.model");
const lifeorientation = require("../models/lifeorientation.model");
const mathematicsModal = require("../models/mathematics.model");
const naturalscienceModel = require("../models/naturalScience.model");
const physicalscienceModel = require("../models/physicalscience.model");
const tourismModel = require("../models/tourism.model");
const technologyModel = require("../models/technology.model");
const mongoose = require("mongoose");
const handleError = require("../utils/error");

const models = {
  Accounting: accountingModel,
  Bussiness_Studies: bussinessstudiesModel,
  Creative_Art: creativeArtModel,
  Drama: dramaModel,
  English: englishModel,
  Geaography: geaographyModel,
  History: historyModel,
  Isizulu: isizuluModel,
  Life_Sciences: lifescienceModel,
  Life_Orientation: lifeorientation,
  Mathematics: mathematicsModal,
  Natural_Sciences: naturalscienceModel,
  Physical_Sciences: physicalscienceModel,
  Tourism: tourismModel,
  Technology: technologyModel,
};

const dynamicController = async (req, res, next) => {
  try {
    // get the model name from the request parameters or body
    const subject_name = req.params.studentSubject;

    // define a map of model names to thier corresponding models
    console.log(models[subject_name]);

    // check if the model name exists in the models map
    if (!models[subject_name]) {
      console.log(models[subject_name]);
      next(handleError(404, `subject: ${subject_name} does not exist.`));
    }

    // use the requested model to perform operations
    const model = models[subject_name];
    const valid = await model.findOne({ studentId: req.params.studentId });

    // if student does not exist in the database return an error
    if (!valid) {
      next(
        handleError(404, `student: ${req.params.studentId} does not exist.`)
      );
    } else {
      // return the based on the operation
      res.status(200).json({ message: "student found", student: valid });
    }
  } catch (error) {
    next(error);
  }
};

const createDynamicController = async (req, res, next) => {
  const { testMonth, testName, mark, status } = req.body;

  const subject_name = req.params.subject;

  console.log(subject_name, studentId);

  try {
    const model = models[subject_name];
    const valid = await model.findOneAndUpdate(
      { studentId:  req.params.studentId },
      {
        $push: {
          marks: {
            testMonth,
            testName,
            mark,
            date: new Date().toLocaleString(),
          },
        },
      }
    );
    res.status(200).json({ message: "student found", student: valid });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  dynamicController,
  createDynamicController,
};
