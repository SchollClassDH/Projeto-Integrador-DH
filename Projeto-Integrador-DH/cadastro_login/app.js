const express=require('express')
const app=express()

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.send('Ola')
});

app.get('/login',function(req,res){
    res.render("../view/login")
})

app.get('/cadastro',function(req,res){
    res.render("../view/cadastro")
})


app.listen(3000,()=>{
    console.log('usando porta 3000')
});