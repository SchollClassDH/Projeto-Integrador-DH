const express = require('express');
const perfilController = require('../controllers/perfilController');
const router = express.Router();

/* GET home page. */
router.get('/', perfilController.index);


module.exports = router;
