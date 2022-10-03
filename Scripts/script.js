let numPedido = Number(localStorage.getItem("varPedido"))
let listaPedidos = []
let pedido

function comprarPizza(tamanho) {
    numPedido++

    if (tamanho < 4) {
        document.getElementsByClassName("botao").setAttribute(hidden, "true")
    }

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

function fazerPedido() {

    let saborBorda = document.querySelector('input[name=seguro]:checked').value

}

function addSabor(sabor, n, saborN) {
    document.getElementsByClassName("pointer")[n].removeAttribute("hidden")
    document.getElementsByClassName("pointer")[n+1].setAttribute("hidden", "hidden")
    document.getElementById("sabor"+ saborN).textContent = "1"
    sabores.push(sabor)
}

function rmvSabor(sabor, n, saborN) {
    document.getElementsByClassName("pointer")[n].setAttribute("hidden", "hidden")
    document.getElementsByClassName("pointer")[n+1].removeAttribute("hidden")
    document.getElementById("sabor"+ saborN).textContent = "0"
    let index = sabores.indexOf(sabor)
    sabores.splice(index, index+1)
}