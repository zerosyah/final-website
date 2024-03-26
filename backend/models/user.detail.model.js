const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    gradeAppliedFor: {
        type: String,
        required: true,
    },
    highestGradePassed: {
        type: String,
        required: true,
    },
    isRepeatingGrade: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    countryOfOrigin: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        max: 20,
    },
    otherNames: {
        type: String,
        max: 20,
    },
    gender: {
        type: String,
        required: true,
    },
    idNumber: {
        type: String,
        required: true,
    },
    StudentAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    homeNumber: {
        type: String,
        required: true,
    },
    EmergencyNumber: {
        type: Number,
        required: true,
    },
    previousSchoolName: {
        type: String,
        required: true,
    },
    previousSchoolAddress: {
        type: String,
        required: true,
    },
    previousSchoolZipCode: {
        type: String,
        required: true,
    },
    previousSchoolProvince:{
        type: String,
        required: true,
    },
    previousSchoolCountry: {
        type: String,
        required:  true,
    },
    medicalAidNumber: {
        type: String,
    },
    medicalAidName: {
        type: String,
    },
    medicalAidMainMemberNames: {
        type: String,
    },
    studentDoctorName: {
        type: String,
    },
    studentDoctorAddress: {
        type: String,
    },
    studentDoctorNumber: {
        type: String,
    },
    studentRequireCounseling: {
        type: String,
    },
    studentMedicalCondition: {
        type: String,
        required: true,
        default: "none",
    },
}, {timestamps: true});

const userDetailModel = mongoose.model("forms", userDetailSchema);
module.exports = userDetailModel;