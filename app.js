
// importações 

const express = require('express') 
const { engine } = require('express/lib/application')
const app = express()
const port = 3000

const aulasRouter = require('./src/routes/aulas');
const tarefasRouter = require('./src/routes/tarefas');

// Arquivos Estaticos

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));


// Difinir Visualização
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/perfil', (req, res)=> {
    res.render("perfilDoUsuario")

})

app.get('/', (req, res)=> {
    res.render("index")
})

app.use('/', aulasRouter);


// Listen 
app.listen(port, () => console.info(`Aberto na porta ${port}`))





const path = require('path');
const session = require('express-session');

const authController = require('./src/controllers/authController');
const usuariosRouter = require('./src/routes/usuarios');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/', tarefasRouter);


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




function estaAutorizado(request, response, next) {
    if (request.session.autorizado) {
        return next();
    }

    return response.redirect('/');
}


//Rotas
const perfilRouter = require('./src/routes/perfil');



// Arquivos Estaticos

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));


app.set('views', path.join(__dirname, 'src','views'));
app.set('view engine', 'ejs');



app.use('/', perfilRouter);
app.use('/', aulasRouter);


app.get('/', (req, res)=> {
    res.render("/index")

})



