import db from './src/database/database.js'

import {loggerMiddleware} from './src/middleware/index.js'
import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000; 

//Middleware to formatar o body para JSON 
app.use(json())
// Para formatar os dados do formulario (x-www-form-urlencoded)
app.use(urlencoded({extended: true}))

app.use(loggerMiddleware)

app.get('/', function (req,res){
    res.status(200).json({
        "status": "OK",
        "codigo": 200,
        "mensagem": `Bem Vindo`
    })
});

app.post('/produtos',(req,res) => {
    res.status(201).json({
        "status": "Criado",
        "codigo": 201,
        "mensagem": ` O produto foi criado" Nome: ${req.body.nome}. Valor: ${req.body.valor}`     
})

app.put ('/produtos/:id',(req,res) => {
    let id = req.params.id
    let produto = req.body

    res.status(200).json({
        "status": "Alterado",
        "codigo": 200,
        "mensagem": `O produto ${id} foi alterado! Nome: ${produto.nome}, Valor: ${produto.preco}`

    })
    //res.send(`O produto ${id} foi alterado!`)
})
})

app.delete('/produtos/:id',(req,res) => {
    let id = req.params.id
    res.status(200).json({
        "status": "Deletado",
        "codigo": 200,
        "mensagem": `O produto ${id} foi alterado! Nome: ${produto.nome}, Valor: ${produto.preco}`

    })

    
    //res.send(`O produto ${id} foi deletado!`)
})

app.get('/usuarios', (req, res) => {

    db('usuarios').select('*')
        .then((usuarios) => {

            res.status(200).json({
                "status": "OK",
                "codigo": 200,
                "mensagem": usuarios
            });

        })
        .catch(() => {

            console.log('Erro ao consultar os usuários');

            res.status(500).json({
                "status": "Erro",
                "codigo": 500,
                "mensagem": "Erro ao consultar os usuários"
            });

        });

});

app.listen(port, function(){
    console.log('Servidor rodando na porta'  + port)
})  