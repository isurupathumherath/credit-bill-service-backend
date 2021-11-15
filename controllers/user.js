const User = require('../models/user');
require('dotenv').config();

//Add New User
exports.create = (req, res) => {
    const { firstName, middleName, lastName, address, emailAddress, mobileNumber, nic, dob, gender, username, password, role, addedBy } = req.body;

    switch (true) {
        case !firstName:
            return res.status(404).json({
                error: 'First Name is Required'
            });
        case !lastName:
            return res.status(404).json({
                error: 'Last Name is Required'
            });
        case !address:
            return res.status(404).json({
                error: 'Address is Required'
            });
        case !emailAddress:
            return res.status(404).json({
                error: 'Email is Required'
            });
        case !mobileNumber:
            return res.status(404).json({
                error: 'Mobile Number is Required'
            });
        case !nic:
            return res.status(404).json({
                error: 'NIC is Required'
            });
        case !dob:
            return res.status(404).json({
                error: 'Date of Birth is Required'
            });
        case !gender:
            return res.status(404).json({
                error: 'Gender is Required'
            });
        case !username:
            return res.status(404).json({
                error: 'Username is Required'
            });
        case !password:
            return res.status(404).json({
                error: 'Password is Required'
            });
        case !role:
            return res.status(404).json({
                error: 'Role is Required'
            });
        case !addedBy:
            return res.status(404).json({
                error: 'Added Person is Required'
            });
    }

    User.create({ firstName, middleName, lastName, address, emailAddress, mobileNumber, nic, dob, gender, username, password, role, addedBy }, (err, user) => {
        if (err) {
            console.log(err)
            res.status(404).json({
                error: 'Record is not added'
            })
        }
        res.json(user);
    })
}

//Display All Users
exports.read = (req, res) => {
    User.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, users) => {
            if (err) console.log(err);
            res.json(users);
        });
};

//Display One User by Id
exports.readById = (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id)
        .exec((err, user) => {
            if (err) console.log(err);
            res.json(user);
        });
};

//Login 
exports.login = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username, password: password })
        .exec((err, employee) => {
            if (err) {
                if (err.keyPattern.username == 1) {
                    res.status(400).json({
                        error: 'Username is already in use'
                    });
                }
                else {
                    res.status(400).json({
                        error: 'Internal Server Error! Try Again!'
                    });
                }
            };
            res.json(employee);
        });
};