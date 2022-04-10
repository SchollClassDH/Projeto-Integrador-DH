const express = require('express');
const formAulasController = require('../controllers/formAulasController');
const router = express.Router();

router.post('/', formAulasController.create);

module.exports = router;
