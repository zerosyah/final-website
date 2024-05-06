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
})

const accountingSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    marks: [markSchema],
})

const accounting = mongoose.model("accountings", accountingSchema);
module.exports = accounting
