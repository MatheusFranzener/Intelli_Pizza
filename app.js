const express = require ('express') 
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const app = express()
let contador = 0;

const timeElapsed = Date.now();
const hoje = new Date(timeElapsed);

const port = process.env.PORT || 8081

app.use(express.static(__dirname + '/'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

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

app.post('/pedido', (req, res)=>{
    res.redirect('/confirma');
})

app.post('/confirma',(req, res)=>{
    contador++;
    sql.query('insert into cliente values(?,?,?,?)', [req.body.cpf, req.body.nome, req.body.sobrenome, req.body.nascimento])
    sql.query('insert into endereco values(?,?,?,?,?,?,?)', [req.body.cep, req.body.logradouro, req.body.num, req.body.complemento, req.body.bairro, req.body.localidade, req.body.uf])
    sql.query('insert into adicional values(?,?,?)', [, req.body.bebida, req.body.borda])
    sql.query('insert into pizza values(?,?,?,?,?,?,?)', [, req.body.tamanho, req.body.sabores[0], req.body.sabores[1], req.body.sabores[2], req.body.sabores[3], contador])
    sql.query('insert into pedido values(?,?,?,?,?,?)', [, req.body.valor, req.body.ret_ent, hoje, req.body.cpf, contador])
    res.redirect('/');
})

app.listen(port,() =>{
    console.log(`Servidor on! http://localhost:${port}`)
})