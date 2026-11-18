require('dotenv').config();

const loggerMiddleware = require('./src/middleware/logger')   
const valorProdutoMiddleware = require('./src/middleware/valorProduto')
const produtoDobradoMiddleware = require('./src/middleware/produtoDobrado')
const express = require('express');
const app = express();
const port = 3000; 

//Middleware to formatar o body para JSON 
app.use(express.json())
// Para formatar os dados do formulario (x-www-form-urlencoded)
app.use(express.urlencoded({extended: true}))

app.use(loggerMiddleware)

app.use(valorProdutoMiddleware)

app.use(produtoDobradoMiddleware)

app.get('/', function (req,res){
    res.send('Guilherme Ferreira2'+ process.env.nome)

});

app.post('/produtos',(req,res) => {
    res.send('O produto foi criado!: ' + req.body.preco )     
})

app.put ('/produtos/:id',(req,res) => {
    let id = req.params.id
    res.send(` O produto foi criado" Nome: ${req.produto.nome}. Valor: ${req.produto.valor}`)
})

app.delete('/produtos/:id',(req,res) => {
    let id = req.params.id
    res.send(`O produto ${id} foi deletado!`)
})

app.listen(port, function(){
    console.log('Servidor rodando na porta'  + port)
})