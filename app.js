// importações 

const express = require('express') 
const { engine } = require('express/lib/application')
const app = express()
const port = 3000

const aulasRouter = require('./src/routes/aulas');

// Arquivos Estaticos

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));


// Difinir Visualização
app.set('views', './views')
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

// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const aulasRouter = require('./src/routes/aulas');


// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'src','views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', aulasRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

