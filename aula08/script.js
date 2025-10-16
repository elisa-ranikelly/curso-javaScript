var botao = window.document.getElementById("botao");
var lista = window.document.getElementById("lista");

botao.addEventListener("click", criarContato)

function criarContato(){
    
    var nome = window.document.getElementById("nome").value;
    var endereco = window.document.getElementById("endereco").value;
    var tel = window.document.getElementById("tel").value;
    var obs = window.document.getElementById("obs").value;
    
    var tipo = window.document.querySelector('input[name="tipo"]:checked').value;

    var linguagens = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(l => l.value).join(', ');

    if(nome === "" || endereco === "" || tel === "" || obs === ""){
        window.alert("ERRO: Insira os dados!");
        return;
    }

    adicionarContato(nome, endereco, tel, obs, tipo, linguagens);
    window.document.getElementById("formulario").reset();
}

function adicionarContato(nome, endereco, tel, obs, tipo, linguagens){

    var linha = window.document.createElement("tr");
    
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${endereco}</td>
        <td>${tipo}</td>
        <td>${tel}</td>
        <td>${linguagens}</td>
        <td>${obs}</td>
        <td><button class="excluir">Excluir</button></td>
    `;

    linha.querySelector(".excluir").addEventListener("click", function() {
        linha.remove();
    });

    lista.appendChild(linha);
}

