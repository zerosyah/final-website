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
    }
})

const creativeArtSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    marks: [markSchema],
})

const creativeart = mongoose.model("creativearts", creativeArtSchema);
module.exports = creativeart
