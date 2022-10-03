let numPedido = Number(localStorage.getItem("varPedido"))
let listaPedidos = []
let pedido

function comprarPizza(tamanho) {
    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": tamanho,
        "sabores": [],
        "borda": "",
        "bebida": "",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 0
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarCombo1() {
    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": 4,
        "sabores": "mussarela",
        "borda": "",
        "bebida": "",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 60
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))

    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": 2,
        "sabores": "brigadeiro",
        "borda": "",
        "bebida": "",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 30
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

let sabores = []

let nomeCliente = document.querySelector("#nomeCliente").value
console.log("Nome: ", nomeCliente);

function fazerPedido() {
    let bebida = document.querySelector('input[name=bebida]:checked').value
    let nomeCliente = document.querySelector("#nomeCliente").value
    let emailCliente = document.querySelector("#exampleInputEmail1").value
    let enderecoCliente = document.querySelector("#exampleInputAddress1").value
    let telefoneCliente = document.querySelector("#exampleInputCellphone1").value

    var pedidoTeste = (localStorage.getItem("pedido" + numPedido));

    pedidoTeste.borda = saborBorda;
    pedidoTeste.bebida = bebida;
    pedidoTeste.cliente = nomeCliente;
    pedidoTeste.email = emailCliente;
    pedidoTeste.endereço = enderecoCliente;
    pedidoTeste.telefone = telefoneCliente;
}

console.log(localStorage.getItem("pedido" + numPedido))

function addSabor(sabor, n, saborN) {
    document.getElementsByClassName("pointer")[n].removeAttribute("hidden")
    document.getElementsByClassName("pointer")[n + 1].setAttribute("hidden", "hidden")
    document.getElementById("sabor" + saborN).textContent = "1"
    sabores.push(sabor)
}

function rmvSabor(sabor, n, saborN) {
    document.getElementsByClassName("pointer")[n].setAttribute("hidden", "hidden")
    document.getElementsByClassName("pointer")[n + 1].removeAttribute("hidden")
    document.getElementById("sabor" + saborN).textContent = "0"
    let index = sabores.indexOf(sabor)
    sabores.splice(index, index + 1)
}