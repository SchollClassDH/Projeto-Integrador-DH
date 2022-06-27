const express = require('express');
const router = express.Router();
const aulasController = require('../controllers/aulasController')

router.get('/', aulasController.index);
router.post('/', aulasController.create);

module.exports = router;
