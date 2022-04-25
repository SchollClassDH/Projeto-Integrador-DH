// const express = require('express');
// const router = express.Router();


// router.get('/tarefas', function(req, res, next) {
//   res.render('tarefas', { title: 'Finalmente' });
// });


// module.exports = router;


const express = require('express');
// const multer = require('multer');
// const storage = require('../config/multer');
const tarefasController = require('../controllers/tarefasController');

const router = express.Router();
// const upload = multer({ storage });

router.post('/formulario',tarefasController.create);

module.exports = router;
