const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/', authController.show);
router.post('/', authController.login);

module.exports = router;
