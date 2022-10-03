let numPedido = 0
let listaPedidos = []

function comprarPizza(tamanho) {
    numPedido++

    listaPedidos.push({
        "número": numPedido,
        "tamanho": tamanho,
        "sabores": [],
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 0
    })

    localStorage.setItem("listaPedidos", JSON.stringify(listaPedidos))

    listaPedidos = JSON.parse(localStorage.getItem('listaPedidos'));
}

function comprarCombo1() {
    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": 4,
        "sabores": "mussarela",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 60
    }

    listaPedidos.push(pedido)

    numPedido++

    pedido = {
        "número": numPedido,
        "tamanho": 2,
        "sabores": "brigadeiro",
        "cliente": "",
        "endereço": "",
        "email": "",
        "telefone": "",
        "valor": 30
    }

    listaPedidos.push(pedido)
}