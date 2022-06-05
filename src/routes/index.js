const { Router } = require('express');

const aulasRouter = require('./aulas');
const formAulasRouter = require('./formAulas');
const usuariosRouter = require('./usuarios');
const perfilRouter = require('./perfil');
const menuHeaderRouter = require('./menuHeader');
const authController = require('../controllers/authController');
const estaAutorizado = require('../middleware/estaAutenticado');

const routerWithAuth = Router();
const routerWithoutAuth = Router();

routerWithAuth.use(estaAutorizado);

routerWithAuth.use('/perfil', perfilRouter);
routerWithAuth.use('/aulas', aulasRouter);
routerWithAuth.use('/formAulas', formAulasRouter);
routerWithAuth.use('/usuarios', usuariosRouter);
routerWithAuth.use('/menu', menuHeaderRouter);
routerWithAuth.get('/cadastro', (request, response) => {
  response.render('cadastro');
});

routerWithAuth.get('/formulario', estaAutorizado, (request, response) => {
  response.render('formulario');
});

routerWithoutAuth.get('/', authController.show);
routerWithoutAuth.post('/login', authController.login);

module.exports = { routerWithAuth, routerWithoutAuth };