// importações 

const express = require('express') 
const { engine } = require('express/lib/application')
const app = express()
const port = 3000


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



// Listen 
app.listen(port, () => console.info(`Aberto na porta ${port}`))
