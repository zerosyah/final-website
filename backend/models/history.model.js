const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
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

const history = mongoose.model("history", historySchema);
module.exports = history