const mongoose = require("mongoose");

const lifeScienceSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
    },
    testDate: {
        type: String,
        required: true,
    },
    testName: {
        type: String,
        required: true,
    },
    testScore: {
        type: Number,
        required: true,
    },
    testTotalScore: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const lifeScience = mongoose.model("lifeScience", lifeScienceSchema);
module.exports = lifeScience