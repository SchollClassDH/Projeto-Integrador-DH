const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const estaAutorizado = require('../middleware/estaAutenticado');

router.post('/', usuariosController.create);
router.get('/registro', usuariosController.registerScreen);
router.put('/', estaAutorizado, usuariosController.update);

module.exports = router;
