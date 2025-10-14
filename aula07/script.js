window.document.getElementById("botao").addEventListener("click", verifica);

function verifica(){
    
    var numbertxt = window.document.getElementById("numero");
    var num = Number(numbertxt.value);
    var res = window.document.getElementById("resultado");

    if(numbertxt.value == ""){
        window.alert("ERRO: Digite um número!");
    }

    var msg = "";

    if(num === 0){
        msg = "O número digitado é 0."
    }else {
        if (num % 2 === 0){
            msg = `O número ${num} é <strong>par</strong> `;
        }else{
            msg = `O número ${num} é <strong>ímpar</strong>`
        }

        if(num > 0){
            msg += ` e <strong>positivo</strong>.` 
        }else{
            msg += ` e <strong>negativo</strong>.`
        }
    }

    res.innerHTML = msg;
}