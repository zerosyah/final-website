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
    gradeRepeated: {
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
    streetAddress: {
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
        type: String,
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
        default: "none"
    },
    medicalAidName: {
        type: String,
        default: "none"
    },
    medicalAidMainMember: {
        type: String,
        default: "none",
    },
    medicalAidDoctorAddress: {
        type: String,
        default: "none"
    },
    medicalAidDoctorName: {
        type: String,
        default: "none"
    },
    medicalAidDoctorNumber: {
        type: String,
        default: "none"
    },
    studentRequiringCounseling: {
        type: String,
        default: "none",
    },
    studentMedicalCondition: {
        type: String,
        default: "none",
    },
    disability:{
        type: String,
        default: "none"
    },
    studentRelion: {
        type: String,
        default: "none"
    },
    numberOfSiblingsInSchool: {
        type: Number,
        default: 0
    },
    positionInTheFamily: {
        type: String,
        default: "first"
    },
    firstSiblingName: {
        type: String,
        default: "none"
    },
    secondSiblingName: {
        type: String,
        default: "none"
    },
    thirdSiblingName:{
        type: String,
        default: "none"
    },
    parentTitle: {
        type: String,
        required: true,
    },
    parentInitials: {
        type: String,
        required: true,
    },
    parentFirstName:{
        type: String,
        required: true,
    },
    parentHomeLanguage: {
        type: String,
        required: true,
    },
    parentId:{
        type: String,
        required: true,
    },
    parentSurname:{
        type: String,
        required: true,
    },
    parentHomeLanguage:{
        type: String,
        required: true,
    },
    parentSecondName: {
        type: String,
        default: "none"
    },
    parentEmail: {
        type: String,
        default: "none"
    },
    parentPhone: {
        type: String,
        required: true,
    },
    parentAlterNumber: {
        type: String,
        required: true,
    }
}, {timestamps: true});
const userDetailModel = mongoose.model("forms", userDetailSchema);
module.exports = userDetailModel;
