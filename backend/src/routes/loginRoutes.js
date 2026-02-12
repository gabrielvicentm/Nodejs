const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

// 🔥 register PRECISA existir e ser função
router.get('/search', loginController.search);

module.exports = router;