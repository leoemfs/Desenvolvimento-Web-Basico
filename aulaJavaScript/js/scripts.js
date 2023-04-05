function tabuada(){
    let numero = document.getElementById('numero').value;
    let divisoria = document.getElementById('resultab');
   
    for(let i = 1; i <=10; i++){
        let result;
        result = i * numero;

        const node = document.createElement("p");
        const text = document.createTextNode(`${numero } x ${i} = ${result}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }


    //document.getElementById('resultab').innerHTML = `<p> ${numero} </p>`;

}

function imprime(){
    let num = document.getElementById('num').value;
    let divisoria = document.getElementById('imp');
    divisoria.innerHTML = "";
    for(let i = 0; i < num; i++){
        const node = document.createElement("h4");
        const text = document.createTextNode(`${"Texto H4"}`);
        node.appendChild(text);
        divisoria.appendChild(node);   
    }
}

let click = 0;
function contaClique(){
    click++;
    document.getElementById("clique").innerHTML = click;
}

function sortear(){
    let sorteado = parseInt(Math.random()*100);
    document.getElementById("sorteio").innerHTML = `O valor sorteado é ${sorteado}`;
}

function sortear2(){
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let result = parseInt(Math.random() * (max - min) + min);
    document.getElementById("sorteio2").innerHTML = `O valor sorteado é ${result}`;
}