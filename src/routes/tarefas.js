const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/tarefas', function(req, res, next) {
  res.render('tarefas', { title: 'Finalmente' });
});


module.exports = router;
