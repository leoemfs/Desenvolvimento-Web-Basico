let respostaArray = ["aluno","prova","bimestre 1", "nota 10"];
let respostaEnviada = [];

function enviarResposta(){

    let pl1 = document.getElementById('p1').value;
    let pl2 = document.getElementById('p2').value;
    let pl3 = document.getElementById('p3').value;
    let pl4 = document.getElementById('p4').value;

    let respostaEnviadaArray = [pl1,pl2,pl3,pl4];
    
    

    document.getElementById('resultado').innerHTML = `Sua resposta foi ${respostaEnviadaArray}`;
   
    //compara(); 
    //return respostaEnviadaArray;
}

/*function compara(array, array){
    for(let i = 0; i < respostaArray.length; i++){
        for(let j = )
    }
}



/*console.log(respostaEnviadaArray)*/
/*.contais()*/

/*respostaEnviada.foreach(function(resposta)){
    resposta.push(respostaEnviada.value);
}*/

/*if(respostaEnviada == "aluno" && Array.includes("aluno")){
    parabens voce acertou uma palavra.
}*/