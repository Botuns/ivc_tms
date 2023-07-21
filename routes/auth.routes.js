const express = require('express');
const router = express.Router();
const userController = require('../controllers/_userController');

// Register a new user
router.post('/auth/register', userController.registerUser);

// User login
router.post('/auth/login', userController.loginUser);

module.exports = router;
