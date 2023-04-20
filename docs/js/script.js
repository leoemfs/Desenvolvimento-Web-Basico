let click = 0;
let min = 0;
let max = 0;

function sortear(){
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let sortear = parseInt((Math.random() * (max - min) + min));
    document.getElementById('sorteio').innerHTML = `O valor sorteado é ${sortear}`;
}