const express = require('express')
const app = express()
const path = require('path');
const session = require('express-session');
const { routerWithAuth, routerWithoutAuth } = require('./routes');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(session({
  secret: 'XxdDQo4F5A*btj5Ai5#EWaA!I$',
  resave: true,
  saveUninitialized: true
}));

app.use(routerWithoutAuth, routerWithAuth);

app.listen(process.env.PORT, () => console.info(`Aberto na porta ${process.env.PORT}`));

module.exports = app;