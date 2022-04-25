const express = require('express');

let app = express();


app.get('/', (req, res)=>res.send("olá mundo!"));
app.get('/contatos', (req, res)=>res.send({nome: "Guilherme", idade:31}));
// criando um servidor
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))