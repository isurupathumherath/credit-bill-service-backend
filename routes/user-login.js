const express = require('express');
const router = express.Router();

//import controller function names
const { login } = require('../controllers/user');

router.post('/login', login);

module.exports = router;