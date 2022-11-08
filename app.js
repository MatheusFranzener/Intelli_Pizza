const express = require ('express') 
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const app = express ()

const timeElapsed = Date.now();
const data = new Date(timeElapsed);
const hoje = data.toISOString;

const port = process.env.PORT || 8081

app.use(express.static(__dirname + '/'))
app.use(bodyParser.urlencoded({extended: false}))

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port:3306,
    database: 'intelli_pizzaria'
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname +  '/Components/home.html')
})

app.get('/cadastro', (req, res)=>{
    res.sendFile(__dirname +  '/Components/cadastro.html')
})

app.get('/pedido',(req, res)=>{
    res.sendFile(__dirname +  '/Components/pedido.html')
})

app.get('/confirma',(req, res)=>{
    res.sendFile(__dirname +  '/Components/confirma.html')
})

app.post('/cadastro', (req, res)=>{
    sql.query('insert into cliente values (?,?,?,?)', [req.body.cpf, req.body.nome, req.body.sobrenome, req.body.data])
    sql.query('insert into endereco values (?,?,?,?,?,?,?,?,?)',[ ,req.body.cep, req.body.logradouro, req.body.numero, req.body.complemento, req.body.bairro, req.body.bairro, req.body.localidade, req.body.uf])
    res.redirect('/cadastro');
})

app.post('/pedido', (req, res)=>{
    sql.query('insert into endereco values (?,?,?,?,?,?)',[null, hoje, req.body.total, req.body.retiradaEntrega, req.body.cpf, req.body.pizza])
    res.redirect('/confirma');
})

app.get('/consulta', (req, res) => {
    sql.query('select * from cadastro', (err, results, fields) => {
        res.json(results)
    })
})

app.listen(port,() =>{
    console.log(`Servidor on! http://localhost:${port}`)
})