function parImpar(n){
    if(n % 2 == 0){
        return `O número ${n} é par.`;
    }else{
       return `O número ${n} é par.`;
    }
}

let numero = parImpar(10);
console.log(numero);

function calculaMedia(nota1, nota2){
    var media = (nota1 + nota2) / 2;
    if(media >= 0 && media <= 3){
        return `Reprovado sem direito a recuperação.`;
    }else if(media <= 5){
        return `Reprovado com direito a recuperação.`;
    }else if(media <= 10){
        return `Aprovado.`;
    }else{
        return `Média inválida..`;
    }
}

let notas = calculaMedia(7, 8);
console.log(notas);