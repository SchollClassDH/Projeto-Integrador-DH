const express = require('express');
const path = require('path');
const session = require('express-session');

const authController = require('./src/controllers/authController');
const usuariosRouter = require('./src/routes/usuarios');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use(session({
    secret: 'XxdDQo4F5A*btj5Ai5#EWaA!I$'
}));

app.get('/', authController.show);
app.post('/login', authController.login);


app.get('/cadastro',(request, response) => {
    response.render('cadastro');
});

app.get('/login',(request, response) => {
    response.render('login');
});


app.get('/admin', estaAutorizado, (request, response) => {
    console.log('Eh Autorizado?', request.session)
    response.render('admin');
});



app.use('/usuarios', usuariosRouter);


app.listen('3000', () => {
    console.log('Aplicação executada na porta 3000');
});

function estaAutorizado(request, response, next) {
    if (request.session.autorizado) {
        return next();
    }

    return response.redirect('/');
}