const express = require('express');
const router = express.Router();
const aulasController = require('../controllers/aulasController')

router.get('/', aulasController.index);

module.exports = router;
