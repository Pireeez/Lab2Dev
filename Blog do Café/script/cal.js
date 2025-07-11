
function insert(valor) {
    document.getElementById('resposta').innerHTML += valor;
  
}

function allClear(){
    document.getElementById('resposta').innerHTML = '';
}

function singleClear(){
    var valor = document.getElementById('resposta').innerHTML;
    var res = '';

    for (i = 0; i < valor.length - 1; i++){
        res = res + valor[i];
    }
    document.getElementById('resposta').innerHTML = res;
}