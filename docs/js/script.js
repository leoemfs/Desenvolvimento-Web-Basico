
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
function enviarPesquisa() {
    let elemento = document.getElementsByName('cat');
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = " Afinidades: ";
    for (let i = 0; i < elemento.length; i++) {
      if (elemento[i].checked) {
        document.getElementById('resultPesquisa').innerHTML = "Categoria selecionada: " + elemento[i].value;
      }
    }
    for (let i = 0; i < checkBoxes.length; i++) {
      text = text + checkBoxes[i].value + ", ";
    }
    let resultPesquisa = document.getElementById('resultPesquisa');
    resultPesquisa.innerHTML = document.getElementById('resultPesquisa').innerHTML + text;

    mudarCor();
  }

  function mudarCor() {
    let categoria = document.querySelector('input[name="cat"]:checked').value;
    let afinidades = document.querySelectorAll('input[type="checkbox"]:checked');
    let afinidadesArray = [];
    afinidades.forEach(function(afinidade) {
      afinidadesArray.push(afinidade.value);
    });
  
    let cor = "";
    if (categoria == "Front-End" && afinidadesArray.includes("HTML+CSS+JAVASCRIPT")) {
      cor = "lightblue";
    }else if(categoria == "Front-End" && afinidadesArray.includes("Design")) {
        cor = "gray";
    }else if (categoria == "Back-End" && afinidadesArray.includes("Java POO")) {
      cor = "lightgreen";
    }else if (categoria == "Back-End" && afinidadesArray.includes("Logica de Programação")) {
        cor = "green";
    }else if (categoria == "Full-Stack" && afinidadesArray.includes("HTML+CSS+JAVASCRIPT") && afinidadesArray.includes("Java POO")) {
      cor = "lightpink";
    }else if (categoria == "Full-Stack" && afinidadesArray.includes("HTML+CSS+JAVASCRIPT")) {
        cor = "yellow";
    }else if (categoria == "Full-Stack" && afinidadesArray.includes("Logica de Programação")) {
        cor = "lightpink";
    } else {
      cor = "white";
    }
    document.querySelector('#bgPesquisa').style.backgroundColor = cor;
  }
  
