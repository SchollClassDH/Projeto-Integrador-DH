const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();


router.get('/', usuariosController.usuarios);

router.get('/login', function (req, res, next) {
  res.render('/admin');
});

module.exports = router;
