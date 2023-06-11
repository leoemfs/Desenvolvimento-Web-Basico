function fazGet(){
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


// function
function criaLinha(usuarios){
    let linha = document.createElement("tr")
    let colId = document.createElement("td")
    let colEmail = document.createElement("td")
    let colSenha = document.createElement("td")
    colId.innerHTML = usuarios.id_login_pk
    colEmail.innerHTML = usuarios.email
    colSenha.innerHTML = usuarios.senha
    linha.appendChild(colId)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)

    return linha;
}

function main(){
    let dados = fazGet("http://localhost:3000/login")
    let tabela = document.getElementById('table')
    let usuarios = JSON.parse(dados)
    usuarios.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

main();