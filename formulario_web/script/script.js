function salvar() {
    let table = document.getElementById("tabela");

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let nascimento = document.getElementById('nascimento').value;
    let estado = document.getElementById('estado').value;

    let row = table.insertRow();
    let nomeTable = row.insertCell();
    let emailTable = row.insertCell();
    let nascimentoTable = row.insertCell();
    let estadoTable = row.insertCell();
    let acoes = row.insertCell();

    nomeTable.innerHTML = nome;
    emailTable.innerHTML = email;
    nascimentoTable.innerHTML = nascimento;
    estadoTable.innerHTML = estado;
    acoes.innerHTML = '<i class="bi bi-pencil-square"></i>'
    limpar();
}

function limpar(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('nascimento').value = '';
    document.getElementById('estado').value= '';
}