const express = require('express');
const router = express.Router();

//import controller function names
const { create, read, readById, } = require('../controllers/customer');

router.post('/add', create);

router.get('/customers', read);
router.get('/customerById/:id', readById);

module.exports = router;