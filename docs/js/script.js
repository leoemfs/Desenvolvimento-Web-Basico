
let min = 0;
let max = 0;

function sortear(){
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let sortear = parseInt((Math.random() * (max - min) + min));
    document.getElementById('sorteio').innerHTML = `O valor sorteado é ${sortear}`;
}

let nota1 =  0.0;
let nota2 =  0.0;
let nota3 =  0.0;
let nota4 =  0.0;

function calcularMedia(){
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    let situacao = "";

    if(media < 2.0){
        situacao = "Reprovado";
    }else if(media >= 2.0 && media <= 5.9){
        situacao = "Recuperação";
    }else {
        situacao = "Aprovado"
    }

    let resultado = document.getElementById('resultado');
    
    if (situacao === "Aprovado") {
        resultado.style.backgroundColor = "green";
    } else if (situacao === "Recuperação") {
        resultado.style.backgroundColor = "blue";
    } else {
        resultado.style.backgroundColor = "red";
    }

    resultado.innerHTML = "Nome: " + nome + " Média: " + media.toFixed(2) + " Situação: " + situacao;
}
