function carrega(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("img");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = "imagens/foto-manha.png";
        document.body.style.background = "#e2cd9f";
    }else if(hora >= 12 && hora < 18){
        img.src = "imagens/foto-tarde.png";
        window.document.body.style.background = "#b9846f"
    }else{
        img.src = "imagens/foto-noite.png";
        window.document.body.style.background = "#515154"
    }
}

function verifica(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("nas");
    var nasc = Number(fano.value);
    var res = window.document.getElementById("res");

    if(fano.value.length == 0 || nasc > ano){
        window.alert("ERRO: Verifique os dados e tente novamente!");
    }else{
        var fsexo = window.document.getElementsByName("radsexo");
        var idade = ano - nasc;
        var genero = "";
        //cria uma imagem via javaScript
        var img = window.document.createElement("img");
        img.setAttribute("id", "foto");
        
        if(fsexo[1].checked){
            
            genero = "Mulher";
            
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "imagens/crianca-m.png")
            }else if(idade < 21){
                img.setAttribute("src", "imagens/jovem-m.png");
            }else if(idade < 50){
                img.setAttribute("src", "imagens/adulta.png");
            }else{
                img.setAttribute("src", "imagens/idosa.png");
            }
        }else if (fsexo[0].checked){

            genero = "Homem";

            if(idade >= 0 && idade < 10){
                 img.setAttribute("src", "imagens/crianca-h.png")
            }else if(idade < 21){
                img.setAttribute("src", "imagens/jovem-h.png");
            }else if(idade < 50){
                img.setAttribute("src", "imagens/adulto.png");
            }else{
                img.setAttribute("src", "imagens/idoso.png");
            }
        }
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos."
        res.appendChild(img);
    }
}