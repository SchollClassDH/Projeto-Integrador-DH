// importações 
const express = require('express')
const app = express()
const path = require('path');
const session = require('express-session');
const port = 3000

const aulasRouter = require('./routes/aulas');
const formAulasRouter = require('./routes/formAulas');
const authController = require('./controllers/authController');
const usuariosRouter = require('./routes/usuarios');
const perfilRouter = require('./routes/perfil');
const menuHeaderRouter = require('./routes/menuHeader');

// Difinir Visualização
app.set('views', './views')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(session({
  secret: 'XxdDQo4F5A*btj5Ai5#EWaA!I$'
}));
app.use('/', perfilRouter);
app.use('/', aulasRouter);
app.use('/', menuHeaderRouter);
app.use('/formAulas', formAulasRouter);
app.use('/usuarios', usuariosRouter);
app.get('/', authController.show);
app.post('/login', authController.login);

app.get('/cadastro', (request, response) => {
  response.render('cadastro');
});

app.get('/formulario', estaAutorizado, (request, response) => {
  console.log('Eh Autorizado?', request.session)
  response.render('formulario');
});

function estaAutorizado(request, response, next) {
  if (request.session.autorizado) {
    return next();
  }

  return response.redirect('/');
}

app.listen(port, () => console.info(`Aberto na porta ${port}`));

module.exports = app;