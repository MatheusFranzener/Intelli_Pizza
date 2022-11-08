let sabores = []
let valTotal = 0
let numPedido = Number(localStorage.getItem("varPedido"))

var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))
let nomeCliente = document.querySelector("#inputNome")
let emailCliente = document.querySelector("#inputEmail")
let enderecoCliente = document.querySelector("#inputEndereco")
let telefoneCliente = document.querySelector("#inputTelefone")

function fazerPedido() {
    if(pedidoObj.borda == ""  && document.querySelector('input[name=borda]:checked')){
        pedidoObj.borda = document.querySelector('input[name=borda]:checked').value
    }
    
    if(pedidoObj.sabores == [] && sabores.length > 0){
        pedidoObj.sabores = sabores
    }
    
    if (pedidoObj.bebida == "" && document.querySelector('input[name=bebida]:checked')) {
        pedidoObj.bebida = document.querySelector('input[name=bebida]:checked').value
    }

    pedidoObj.cliente = nomeCliente.value
    pedidoObj.email = emailCliente.value
    pedidoObj.endereço = enderecoCliente.value
    pedidoObj.telefone = telefoneCliente.value

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

    pedidoObj.valor += valTotal;

    console.log(pedidoObj)

    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedidoObj))
}

function addSabor(sabor, n, saborN) {
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

function limpar(){
    localStorage.clear()
    window.location.href = "/"
}