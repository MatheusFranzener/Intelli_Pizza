let sabores = []
let valTotal = 0
let numPedido = Number(localStorage.getItem("varPedido"))

var pedidoObj = JSON.parse(localStorage.getItem("pedido" + numPedido))
let nomeCliente = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let nascimento = document.querySelector("#nascimento")
let cpf = document.querySelector("#cpf")
let cep = document.querySelector("#cep")
let logradouro = document.querySelector("#logradouro")
let numero = document.querySelector("#numero")
let complemento = document.querySelector("#complemento")
let bairro = document.querySelector("#bairro")
let localidade = document.querySelector("#localidade")
let uf = document.querySelector("#uf")

function fazerPedido() {
    if(pedidoObj.borda == ""  && document.querySelector('input[name=borda]:checked')){
        pedidoObj.borda = document.querySelector('input[name=borda]:checked').value
    }
    
    if(pedidoObj.sabores.length == 0 && sabores.length > 0){
        pedidoObj.sabores = sabores
    }
    
    if (pedidoObj.bebida == "" && document.querySelector('input[name=bebida]:checked')) {
        pedidoObj.bebida = document.querySelector('input[name=bebida]:checked').value
    }

    pedidoObj.nome = nome.value
    pedidoObj.sobrenome = sobrenome.value
    pedidoObj.nascimento = nascimento.value
    pedidoObj.cpf = cpf.value
    pedidoObj.cep = cep.value
    pedidoObj.logradouro = logradouro.value
    pedidoObj.num = numero.value
    pedidoObj.complemento = complemento.value
    pedidoObj.bairro = bairro.value
    pedidoObj.localidade = localidade.value
    pedidoObj.uf = uf.value

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
    verificarSabores(sabores, n, saborN)
    console.log(sabores)
} 

function rmvSabor(sabor, n, saborN) {
    document.getElementsByClassName("pointer")[n].setAttribute("hidden", "hidden")
    document.getElementsByClassName("pointer")[n + 1].removeAttribute("hidden")
    document.getElementById("sabor" + saborN).textContent = "0"
    valTotal -= 5
    let index = sabores.indexOf(sabor)
    sabores.splice(index, index + 1)
    verificarSabores(sabores, n, saborN)
    console.log(sabores)
}

function verificarSabores(arrSabores, n, saborN) {
    if(arrSabores.length > pedidoObj.tamanho){
        alert('Número máximo de sabores')
        sabores.pop()
        document.getElementsByClassName("pointer")[n].setAttribute("hidden", "hidden")
        document.getElementsByClassName("pointer")[n + 1].removeAttribute("hidden")
        document.getElementById("sabor" + saborN).textContent = "0"
    }
}

function limpar(){
    localStorage.clear()
    window.location.href = "/"
}

const endereco = (dados) =>{
    for(let x in dados ){
        if(document.querySelector('#' + x))
        document.querySelector('#'+x).value = dados[x]
    }
}

cep.addEventListener('blur', ()=>{
    let search = cep.value.replace("-","");

    fetch(`https://viacep.com.br/ws/${search}/json/`,{
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    })
    .then(res =>{
        res.json()
        .then(dados => {
            endereco(dados);
        })
    })
    .catch(error => console.log('Deu Erro:' + error));
});