const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// 🔥 register PRECISA existir e ser função
router.post('/register', userController.register);

module.exports = router;
