var numeros = [1, 2, 3, 4, 5];
console.log(`numeros: ${numeros}`);

//adicionando numeros no vetor em um lugar específico:
numeros[5] = 6;
console.log(`numeros: ${numeros}`);

//adicionando numeros no vetor na ultima posição:
numeros.push(7);
console.log(`numeros: ${numeros}`);

//apagando o ultimo elemento:
numeros.pop(0);
console.log(`numeros: ${numeros}`);

//tamanho do array:
console.log(numeros.length);

//ordenação de array crescente:
console.log(numeros.sort());

//visualização de todos os elementos:
for(var i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

for(var numero in numeros){
    console.log(numeros[numero]);
}

//procura o valor através do número e retorna a posição:
var posicao = numeros.indexOf(10);
if(posicao == -1){
    console.log("O valor não foi encontrado!");
}else{
    console.log(`Está na posição ${posicao} `);
}


