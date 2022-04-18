const express = require('express');
const router = express.Router();
const aulasController = require('../controllers/aulasController')

/* GET home page. */
router.get('/aulas', aulasController.index);

module.exports = router;
