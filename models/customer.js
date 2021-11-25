const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const customerSchema = new mongoose.Schema({
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
    companyid: {
        type: String,
        trim: true,
        max: 255,
        required: true
    },
    balance: {
        type: String,
        max: 255,
        required: true
    },
    addedAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    },
    addedBy: {
        type: String,
        required: false
    },
    updatedBy: {
        type: String,
        required: false
    },
}, { timestamps: true })

module.exports = mongoose.model('Customer', customerSchema);