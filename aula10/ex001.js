var botao = window.document.getElementById("clique");
botao.addEventListener("click", fazerContagem);

var resultado = document.getElementById("resultado");

function fazerContagem(){

    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var passo = document.getElementById("passo").value;

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert("ERRO: Insira os dados!");
        return;
    }else{
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);
        
        if(passo == 0 || passo < 0){
            window.alert("ERRO: Passo inválido! Seu valor passa a ser 1!");
            passo = 1;
        }
        
        if(inicio < fim){
            for(var c = inicio; c <= fim; c += passo){
                resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        }else{
            for(var c = inicio; c >= fim; c -= passo){
                resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        resultado.innerHTML += ` \u{1F6A9}`;  
    }
}


