let valores = document.querySelector("select#ival");
let res = document.querySelector("div#resultado");
let lista = [];

function isNumero(n){
    if(n >= 1 && n <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i] == n){
            return true;
        }
    }
    return false;
}

function adicionar(){

    let num = document.querySelector("input#inum");
    let numeros = Number(num.value);

    if(isNumero(numeros) && !inLista(numeros, lista)){
        lista.push(numeros);
        let item = document.createElement("option");
        item.text = `Valor ${numeros} adicionado.`;
        valores.appendChild(item);
        resultado.innerHTML = "";
    }else{
        window.alert("Valor inválido ou já adicionado na lista!");
    }
    num.value = "";
    num.focus();
}

function finalizar(){
    if(lista.length == 0){
        window.alert("Adicone valores antes de finalizar.");
    }else{
        let tot = lista.length;
        let maior = lista[0];
        let menor = lista[0];

        for(numero in lista){
            if(lista[numero] > maior){
                maior = lista[numero];
            }
            if(lista[numero] < menor){
                menor = lista[numero];
            }
        }

        resultado.innerHTML = "";
        resultado.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> números cadastrados.</p>`
        resultado.innerHTML += `<p>Maior número cadastrado: <strong>${maior}</strong> </p>`
        resultado.innerHTML += `<p>Menor número cadastrado: <strong>${menor}</strong> </p>`
    }
}