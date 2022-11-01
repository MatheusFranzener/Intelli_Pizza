const express = require ('express');
const app = express ();

const port = '8081';

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname +  '/Components/home.html');
})

app.get('/pedido',(req, res)=>{
    res.sendFile(__dirname +  '/Components/pedido.html');
})

app.get('/confirma',(req, res)=>{
    res.sendFile(__dirname +  '/Components/confirma.html');
})

app.listen(port,() =>{
    console.log('Servidor on! http://localhost:8081');
})