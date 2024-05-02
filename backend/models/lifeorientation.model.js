const mongoose = require("mongoose");

const lifeOrientationSchema = new mongoose.Schema({
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

const lifeOrientation = mongoose.model("lifeOrientation", lifeOrientationSchema);
module.exports = lifeOrientation