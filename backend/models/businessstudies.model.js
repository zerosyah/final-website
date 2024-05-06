const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
    testMonth: { 
        type: String, 
        required: true
    },
    testName: { 
        type: String, 
        required: true 
    },
    mark: { 
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const businessStudiesSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    marks: [markSchema],
})

const businessStudies = mongoose.model("businessStudies", businessStudiesSchema);
module.exports = businessStudies
