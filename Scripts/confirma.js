let numPedido = Number(localStorage.getItem("varPedido"))

let tamanho = document.getElementById("textoPedido1")
let saboresTxt = document.getElementById("textoPedido2")
let borda = document.getElementById("textoPedido3")
let bebida = document.getElementById("textoPedido4")
let nome = document.getElementById("textoPedido5")
let email = document.getElementById("textoPedido6")
let endereco = document.getElementById("textoPedido7")
let telefone = document.getElementById("textoPedido8")
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
saboresTxt.appendChild(document.createTextNode(pedidoObj.sabores))
borda.appendChild(document.createTextNode(pedidoObj.borda))
bebida.appendChild(document.createTextNode(pedidoObj.bebida))
nome.appendChild(document.createTextNode(pedidoObj.cliente))
email.appendChild(document.createTextNode(pedidoObj.email))
endereco.appendChild(document.createTextNode(pedidoObj.endereço))
telefone.appendChild(document.createTextNode(pedidoObj.telefone))
preco.appendChild(document.createTextNode(pedidoObj.valor))

let extra = 0

function entregar() {
    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))

    extra = 5

    let preco = document.getElementById("preco")
    preco.textContent = "R$ " + (pedidoObj.valor + extra)

    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function retirar() {
    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))

    extra = 5

    let preco = document.getElementById("preco")
    preco.textContent = "R$ " + pedidoObj.valor

    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function limpar(){
    localStorage.clear()
    window.location.href = "/"
}