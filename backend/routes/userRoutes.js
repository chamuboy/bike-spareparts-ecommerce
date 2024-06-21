const express = require('express');
const { registerUser, loginUser } = require('../controllers/userContoller');
const auth = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/admin', auth(true), (req, res) => {
    res.send('Admin dashboard');
});

router.get('/buyer', auth(false), (req, res) => {
    res.send('Buyer dashboard');
});

module.exports = router;
