const express = require('express');
const faleConoscoController = require('../controllers/faleConoscoController');
const router = express.Router();

/* GET home page. */
router.get('/faleConosco', faleConoscoController.show);

module.exports = router;



