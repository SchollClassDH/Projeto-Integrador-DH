const express = require('express')
const app = express()
const path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');

const { routerWithAuth, routerWithoutAuth } = require('./routes');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(routerWithoutAuth, routerWithAuth);

app.listen(process.env.PORT, () => console.info(`Aberto na porta ${process.env.PORT}`));

module.exports = app;