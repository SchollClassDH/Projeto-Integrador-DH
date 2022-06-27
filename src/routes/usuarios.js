const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.create);
// router.put('/', usuariosController.update);

module.exports = router;
