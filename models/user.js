const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        max: 255,
        required: true
    },
    middleName: {
        type: String,
        trim: true,
        max: 255,
        required: false
    },
    lastName: {
        type: String,
        trim: true,
        max: 255,
        required: true
    },
    address: {
        type: String,
        max: 255,
        required: true
    },
    emailAddress: {
        type: String,
        max: 255,
        required: true
    },
    mobileNumber: {
        type: String,
        max: 10,
        required: true
    },
    nic: {
        type: String,
        trim: true,
        max: 12,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    username: {
        type: String,
        trim: true,
        max: 255,
        required: true
    },
    password: {
        type: String,
        max: 255,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String,
        required: true
    },
})
