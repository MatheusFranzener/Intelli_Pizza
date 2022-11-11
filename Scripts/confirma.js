let numPedido = Number(localStorage.getItem("varPedido"))

let tamanho = document.getElementById("tamanho")
let sabor1 = document.getElementById("sabor1")
let sabor2 = document.getElementById("sabor2")
let sabor3 = document.getElementById("sabor3")
let sabor4 = document.getElementById("sabor4")
let borda = document.getElementById("borda")
let bebida = document.getElementById("bebida")
let nome = document.getElementById("nome")
let sobrenome = document.getElementById("sobrenome")
let nascimento = document.getElementById("nascimento")
let cpf = document.getElementById("cpf")
let cep = document.getElementById("cep")
let logradouro = document.getElementById("logradouro")
let numero = document.getElementById("cep")
let complemento = document.getElementById("complemento")
let bairro = document.getElementById("bairro")
let localidade = document.getElementById("localidade")
let uf = document.getElementById("uf")
let preco = document.getElementById("preco")

var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))

if (typeof pedidoObj.tamanho == "object") {
    for (let i = 0; i < pedidoObj.tamanho.length; i++) {
        switch (pedidoObj.tamanho[i]) {
            case 1:
                pedidoObj.tamanho[i] = "Broto"
                break;
            case 2:
                pedidoObj.tamanho[i] = "Pequena"
                break;
            case 3:
                pedidoObj.tamanho[i] = "Média"
                break;
            case 4:
                pedidoObj.tamanho[i] = "Grande"
                break;
        }
    }
} else {
    switch (pedidoObj.tamanho) {
        case 1:
            pedidoObj.tamanho = "Broto"
            break;
        case 2:
            pedidoObj.tamanho = "Pequena"
            break;
        case 3:
            pedidoObj.tamanho = "Média"
            break;
        case 4:
            pedidoObj.tamanho = "Grande"
            break;
    }
}


tamanho.appendChild(document.createTextNode(pedidoObj.tamanho))
sabor1.appendChild(document.createTextNode(pedidoObj.sabores[0]))
sabor2.appendChild(document.createTextNode(pedidoObj.sabores[1]))
sabor3.appendChild(document.createTextNode(pedidoObj.sabores[2]))
sabor4.appendChild(document.createTextNode(pedidoObj.sabores[3]))
borda.appendChild(document.createTextNode(pedidoObj.borda))
bebida.appendChild(document.createTextNode(pedidoObj.bebida))
nome.appendChild(document.createTextNode(pedidoObj.nome))
sobrenome.appendChild(document.createTextNode(pedidoObj.sobrenome))
nascimento.appendChild(document.createTextNode(pedidoObj.nascimento))
cpf.appendChild(document.createTextNode(pedidoObj.cpf))
cep.appendChild(document.createTextNode(pedidoObj.cep))
logradouro.appendChild(document.createTextNode(pedidoObj.logradouro))
numero.appendChild(document.createTextNode(pedidoObj.numero))
complemento.appendChild(document.createTextNode(pedidoObj.complemento))
bairro.appendChild(document.createTextNode(pedidoObj.bairro))
localidade.appendChild(document.createTextNode(pedidoObj.localidade))
uf.appendChild(document.createTextNode(pedidoObj.uf))
preco.appendChild(document.createTextNode(pedidoObj.valor))

let extra = 0

function entregar() {
    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))
    console.log(pedidoObj)
    pedidoObj.ret_ent = "Entrega"

    extra = 5

    let preco = document.getElementById("preco")
    preco.textContent = "R$ " + (pedidoObj.valor + extra)

    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function retirar() {
    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))
    pedidoObj.ret_ent = "Retirada"

    extra = 5

    let preco = document.getElementById("preco")
    preco.textContent = "R$ " + pedidoObj.valor

    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function confirmar() {
    let req = JSON.parse(localStorage.getItem("pedido" + numPedido))
    console.log('Objeto q vai ser mandado: ', req)
    fetch('/confirma', {
        method: "POST",
        body: JSON.stringify(req),
        headers: { "Content-Type": "application/json" }
    })
    .then(res => {
        localStorage.clear();
        window.href.location = '/';
    })
    .catch(error => console.log('Deu Erro:' + error));
}

function limpar() {
    localStorage.clear();
    window.location.href = "/";
}