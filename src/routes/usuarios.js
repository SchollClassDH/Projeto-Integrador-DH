const express = require('express');


const usuariosController = require('../controllers/usuariosController');


const router = express.Router();

router.post('/', usuariosController.create);


module.exports = router;
