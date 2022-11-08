const cep = document.querySelector('#cep');

const endereco = (dados) =>{
    for(let x in dados ){
        if(document.querySelector('#' + x))
        document.querySelector('#'+x).value = dados[x]
    }
}

cep.addEventListener('blur', ()=>{
    let search = cep.value.replace("-","")

    fetch(`https://viacep.com.br/ws/${search}/json/`,{
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    })
    .then(res =>{
        res.json()
        .then(dados => {
            endereco(dados)
        })
    })
    .catch(error => console.log('Deu Erro:' + error))
})