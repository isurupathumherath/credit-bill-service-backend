const express = require('express');
const router = express.Router();

//import controller function names
const { create, read, readById } = require('../controllers/user');

router.post('/add', create);

router.get('/users', read);
router.get('/userById/:id', readById);

module.exports = router;