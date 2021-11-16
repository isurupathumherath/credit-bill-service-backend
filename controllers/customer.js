const Customer = require('../models/customer');
require('dotenv').config();

//Add New Customer
exports.create = (req, res) => {
    const { firstName, middleName, lastName, address, emailAddress, mobileNumber, nic, dob, gender, companyid, balance, addedAt
    , updatedAt, addedBy, updatedBy } = req.body;

    switch (true) {
        case !firstName:
            return res.status(404).json({
                error: 'First Name is Required'
            });
        case !middleName:
                return res.status(404).json({
                    error: 'Middle Name is Required'
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
        case !companyid:
            return res.status(404).json({
                error: 'Company ID is Required'
            });
        case !balance:
            return res.status(404).json({
                error: 'Balance is Required'
            });
        case !addedAt:
            return res.status(404).json({
                error: 'Added Date is Required'
            });
        case !updatedAt:
                return res.status(404).json({
                    error: 'Updated Date is Required'
                });
        case !addedBy:
            return res.status(404).json({
                error: 'Added Person is Required'
            });
        case !updatedBy:
                return res.status(404).json({
                    error: 'Updated Person is Required'
                });
    }

    Customer.create({ firstName, middleName, lastName, address, emailAddress, mobileNumber, 
        nic, dob, gender, companyid, balance, addedAt,updatedAt, addedBy, updatedBy }, (err, customer) => {
        if (err) {
            console.log(err)
            res.status(404).json({
                error: 'Record is not added'
            })
        }
        res.json(customer);
    })
}

//Display All Customers
exports.read = (req, res) => {
    Customer.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, customers) => {
            if (err) console.log(err);
            res.json(customers);
        });
};

//Display All customers by Id
exports.readById = (req, res) => {
    console.log(req.params.id)
    Customer.findById(req.params.id)
        .exec((err, customer) => {
            if (err) console.log(err);
            res.json(customer);
        });
};

//Login 
{/*exports.login = (req, res) => {
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
};*/}