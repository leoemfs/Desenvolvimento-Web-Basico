//funcao para limpar formulario
function limparFormulario(){
        document.getElementById('rua').value = "";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('uf').value = "";
        document.getElementById('ibge').value = "";
}
//buscar cep na api e coletar dados para colocar nas div com id correspondente
function minhafuncao(conteudo){
    if(!('erro' in conteudo)){
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
        document.getElementById('ibge').value = conteudo.ibge;
    }else{
        alert("O CEP digitado não existe na base de dados.");
        limparFormulario();
    }
}
//funcao para receber e limpar o cep que é recebido 
function pesquisacep(valor){
    let cep = valor.replace(/\D/g, ''); //expressão regular
    if(cep != ""){
        let valida = /^[0-9]{8}$/;
        if(valida.test(cep)){
            //alert('CEP valido');
            let script = document.createElement('script');
            script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=minhafuncao";
            document.body.appendChild(script);
        }else{
            limparFormulario();
            alert("O CEP não possui 8 digitos numericos.");
        }
    }else{
        limparFormulario();
        alert('O CEP não pode ser vazio');
    }
}