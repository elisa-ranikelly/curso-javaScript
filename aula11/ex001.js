var botao = window.document.getElementById("clique");
botao.addEventListener("click", gerarTabuada);

var tab = document.getElementById("tabuada");

function gerarTabuada(){

    var numero = document.getElementById("numero").value;

    if(numero.length <= 0){
        window.alert("ERRO: Insira os dados!");
        return;
    }else{
        numero = Number(numero);
        tab.innerHTML = "";
        for(var c = 0; c <= 10; c++){
            var item = document.createElement("option");
            item.text = `${numero} X ${c} = ${numero*c}`
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}