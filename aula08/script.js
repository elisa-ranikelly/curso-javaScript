var botao = window.document.getElementById("botao");
var lista = window.document.getElementById("lista");

botao.addEventListener("click", criarContato)

function criarContato(){
    
    var nome = window.document.getElementById("nome").value;
    var endereco = window.document.getElementById("endereco").value;
    var tel = window.document.getElementById("tel").value;
    var obs = window.document.getElementById("obs").value;
    var linguagens = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(l => l.value).join(', ');
    var tipo = document.getElementsByName("tipo");
    var tipoMoradia = tipo[0].checked ? "Casa" : "Apartamento";

    if(nome === "" || endereco === "" || tel === "" || obs === ""){
        window.alert("ERRO: Insira os dados!");
        return;
    }

    adicionarContato(nome, endereco, tel, tipoMoradia, linguagens, obs.value);

    window.document.querySelector("form").reset();
}

function adicionarContato(nome, endereco, tel, tipoMoradia, linguagens, obs){

    var contato = window.document.createElement("div");
    contato.className = "contato";

    contato.innerHTML = `
        <strong>Nome:</strong> ${nome}
        <strong>Endereço:</strong> ${endereco}
        <strong>Telefone:</strong> ${tel}
        <strong>Moradia:</strong> ${tipoMoradia}
        <strong>Linguagens:</strong> ${linguagens}
        <strong>Observações:</strong> ${obs}
    `;

    contato.querySelector(".excluir").addEventListener("click", function() {
                contato.remove();
    });

    lista.appendChild(contato);
}

