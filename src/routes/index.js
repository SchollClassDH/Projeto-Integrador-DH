const { Router } = require('express');

const aulasRouter = require('./aulas');
const formAulasRouter = require('./formAulas');
const usuariosRouter = require('./usuarios');
const perfilRouter = require('./perfil');
const menuHeaderRouter = require('./menuHeader');
const loginRouter = require('./login');

const authController = require('../controllers/authController');
const estaAutorizado = require('../middleware/estaAutenticado');

const routerWithAuth = Router();
const routerWithoutAuth = Router();

routerWithAuth.get('/cadastro', (_, response) => {
  response.render('cadastro');
});

routerWithAuth.use(estaAutorizado);

routerWithAuth.use('/perfil', perfilRouter);
routerWithAuth.use('/aulas', aulasRouter);
routerWithAuth.use('/formAulas', formAulasRouter);
routerWithAuth.use('/usuarios', usuariosRouter);
routerWithAuth.use('/menu', menuHeaderRouter);


routerWithAuth.get('/formulario', (_, response) => {
  response.render('formulario');
});

routerWithoutAuth.use('/login', loginRouter);
routerWithAuth.get('/logout', authController.logout);
routerWithoutAuth.get('/', (_, response) =>
  response.redirect('login')
);

module.exports = { routerWithAuth, routerWithoutAuth };