const express = require('express');
const router = express.Router();

//import controller function names
const { create, read, readById, requireSignin } = require('../controllers/user');

router.post('/add', requireSignin, create);

router.get('/users', requireSignin, read);
router.get('/userById/:id', requireSignin, readById);

// router.get('/secret', requireSignin, (req, res) => {
//     res.json({
//         data: req.user.username
//     })
// })

module.exports = router;