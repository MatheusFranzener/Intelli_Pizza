let numPedido = Number(localStorage.getItem("varPedido"))
let pedido = {
    "numero": "",
    "tamanho": "",
    "sabores": [],
    "borda": "",
    "bebida": "",
    "nome": "",
    "sobrenome": "",
    "nascimento": "",
    "cpf": "",
    "cep": "",
    "logradouro": "",
    "num": "",
    "complemento": "",
    "bairro": "",
    "localidade": "",
    "uf": "",
    "ret_ent": "",
    "valor": 0
}

function comprarPizza(tamanho) {
    numPedido++

    pedido.numero = numPedido
    pedido.tamanho = tamanho

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

    pedido.número = numPedido
    pedido.tamanho = [4, 2]
    pedido.sabores = ["Marguerita", "Chocolate Preto"]
    pedido.borda = "Catupiry"
    pedido.valor = 65

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarCombo2() {
    numPedido++

    pedido.número = numPedido
    pedido.tamanho = 3
    pedido.sabores = ["Brócolis Especial"]
    pedido.borda = "Catupiry"
    pedido.bebida = "Coca-Cola"
    pedido.valor = 40

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarCombo3() {
    numPedido++

    pedido.número = numPedido
    pedido.tamanho = [4, 4]
    pedido.sabores = ["Calabresa", "Portuguesa"]
    pedido.borda = "Catupiry"
    pedido.bebida = "Guaraná",
    pedido.valor = 85

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}

function comprarCombo4() {
    numPedido++

    pedido.número = numPedido
    pedido.tamanho = [4, 3]
    pedido.sabores = ["Marguerita", "Calabresa"]
    pedido.borda = "Catupiry"
    pedido.valor = 75

    localStorage.setItem("varPedido", JSON.stringify(numPedido))
    localStorage.setItem('pedido' + numPedido, JSON.stringify(pedido))
}