const express = require('express');
const unidadesController = require('../controllers/unidadesController');
const cursosController = require('../controllers/cursosController');
const faleConoscoController = require('../controllers/faleConoscoController');
const router = express.Router();

/* GET home page. */
router.get('/unidades', unidadesController.index);

router.get('/cursos', cursosController.index);

router.get('/faleConosco', faleConoscoController.index);

module.exports = router;
