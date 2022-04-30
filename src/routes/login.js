const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();


router.get('/', function (req, res) {

});

router.get('/login', function (req, res, next) {
  res.render('/login');
});


module.exports = router;
