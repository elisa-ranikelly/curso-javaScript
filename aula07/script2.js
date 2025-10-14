window.document.getElementById("botao").addEventListener("click", verificaMedia);

function verificaMedia(){
    
    var txtn1 = document.getElementById("nota1");
    var txtn2 = document.getElementById("nota2");

    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);

    var resul = document.getElementById("resultado");

    if(txtn1.value == "" || txtn2.value == ""){
        window.alert("ERRO: Digite a nota!");
    }

    var media = (n1 + n2) / 2;
    var msg = "";
    
    if(media >=0 && media <= 4){
        msg = "REPROVADO sem recuperação!";
    }else if(media < 7){
        msg = "Direito a RECUPERAÇÃO."
    }else if(media <= 10){
        msg = "APROVADO."
    }else{
        msg = " Média inválida!"
    }

    resul.innerHTML = `Sua média é ${media}. ${msg}` ;

    



    

}