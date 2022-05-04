const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual')

function insert(numero){
    resultado.innerHTML += numero;
}

function cleanAll(){
    resultado.innerHTML = '';
}

function backspace() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
        alert((resultado) + "=" + (eval(resultado)),)
    }   
}
