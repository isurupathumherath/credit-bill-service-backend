const express = require('express');
const router = express.Router();

//import controller function names
const { create, read, readById, update} = require('../controllers/customer');

router.post('/add', create);

router.get('/customers', read);
router.get('/customerById/:id', readById);
router.put('/update/:id',update);

module.exports = router;