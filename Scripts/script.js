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

    switch (tamanho) {
        case 1:
            pedido.valor = 20
            break;
        case 2:
            pedido.valor = 30
            break;
        case 3:
            pedido.valor = 40
            break;
        case 4:
            pedido.valor = 50
            break;
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarCombo1() {
    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": [4, 2],
        "sabores": ["Marguerita", "Chocolate Preto"],
        "borda": "",
        "bebida": "",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 65
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarCombo2() {
    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": 3,
        "sabores": ["Brócolis Especial"],
        "borda": "",
        "bebida": "Coca-Cola",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 40
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarCombo3() {
    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": [4, 4],
        "sabores": ["Calabresa", "Portuguesa"],
        "borda": "",
        "bebida": "Guaraná",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 85
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarComb4() {
    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": [4, 3],
        "sabores": ["Marguerita", "Calabresa"],
        "borda": "",
        "bebida": "",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 75
    }

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

let sabores = []
let valTotal = 0

function fazerPedido() {
    let saborBorda = document.querySelector('input[name=borda]:checked').value
    let bebida = document.querySelector('input[name=bebida]:checked').value
    let nomeCliente = document.querySelector("#nomeCliente").value
    let emailCliente = document.querySelector("#exampleInputEmail1").value
    let enderecoCliente = document.querySelector("#exampleInputAddress1").value
    let telefoneCliente = document.querySelector("#exampleInputCellphone1").value

    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))

    if (pedidoObj.borda == "Catupiry") {
        pedidoObj.valor += 2
    } else if (pedidoObj.borda == "Chocolate Preto") {
        pedidoObj.valor += 3
    }

    if (pedidoObj.bebida == "Coca-Cola") {
        pedidoObj.valor += 8
    } else if (pedidoObj.bebida == "Sprite") {
        pedidoObj.valor += 6
    } else if (pedidoObj.bebida == "Guaraná") {
        pedidoObj.valor += 7
    } else if (pedidoObj.bebida == "Fanta") {
        pedidoObj.valor += 7
    }

    pedidoObj.borda = saborBorda
    if(pedidoObj.sabores == []){
        pedidoObj.sabores = sabores
    }
    if(pedidoObj.bebida == []){
        pedidoObj.bebida = bebida
    }
    pedidoObj.cliente = nomeCliente
    pedidoObj.email = emailCliente
    pedidoObj.endereço = enderecoCliente
    pedidoObj.telefone = telefoneCliente

    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function addSabor(sabor, n, saborN) {
    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))

    switch (pedidoObj.tamanho) {
        case 1:
            if (sabores.length == 1) {
                return alert("Você já escolheu o máximo de sabores.")
            }
        case 2:
            if (sabores.length == 2) {
                return alert("Você já escolheu o máximo de sabores.")
            }
        case 3:
            if (sabores.length == 3) {
                return alert("Você já escolheu o máximo de sabores.")
            }
        case 4:
            if (sabores.length == 4) {
                return alert("Você já escolheu o máximo de sabores.")
            }
    }

    document.getElementsByClassName("pointer")[n].removeAttribute("hidden")
    document.getElementsByClassName("pointer")[n + 1].setAttribute("hidden", "hidden")
    document.getElementById("sabor" + saborN).textContent = "1"
    valTotal += 5
    sabores.push(sabor)
}

function rmvSabor(sabor, n, saborN) {
    document.getElementsByClassName("pointer")[n].setAttribute("hidden", "hidden")
    document.getElementsByClassName("pointer")[n + 1].removeAttribute("hidden")
    document.getElementById("sabor" + saborN).textContent = "0"
    valTotal -= 5
    let index = sabores.indexOf(sabor)
    sabores.splice(index, index + 1)
}

let extra = 0

function entregar() {
    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))

    extra = 5
    
    let preco = document.getElementById("preco")
    preco.textContent = "R$" + (pedidoObj.valor + extra)
    
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function retirar() {
    var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))
    
    extra = 5

    let preco = document.getElementById("preco")
    preco.textContent = "R$" + pedidoObj.valor
    
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function redirecionar(){

    alert('Seu pedido foi confirmado')
    localStorage.clear()
    window.location.href = "http://127.0.0.1:5500/Components/home.html"
}