// pegar as tarefas
const inputTarefas = document.getElementById("nova-tarefa");
const lista = document.getElementById("lista-tarefas");
const contador = document.getElementById("contador");
const botao = document.getElementById("adicionar");

let tarefas = [];

botao.addEventListener("click", adicionarLista);

// adicionar tarefas na lista
function adicionarLista(){
    const valorTarefas = inputTarefas.value;
    
    if(valorTarefas === ""){
        window.alert("É necessário digitar algo, tente novamente!");
    }else{
        tarefas.push(valorTarefas);
        totalTarefas++;
        pendentes++;

        atualizarContador();

        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = valorTarefas;

        const botaoConcluir = document.createElement("button");
        botaoConcluir.textContent = "✅";
        botaoConcluir.classList.add("concluir");
        botaoConcluir.addEventListener("click", function(){
            novaTarefa.classList.toggle("concluida");

            if(botaoConcluir){
                pendentes--;
            }else{
                pendentes++;
            }

            atualizarContador();
        });

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "❌";
        botaoExcluir.classList.add("excluir");
        botaoExcluir.addEventListener("click", function(){
            novaTarefa.classList.contains("concluida");

            if(botaoExcluir){
                pendentes--;
            }

            totalTarefas--;

            lista.removeChild(novaTarefa);
            tarefas = tarefas.filter(tarefa => tarefa !== valorTarefas);

            atualizarContador();
         
        });

        novaTarefa.appendChild(botaoConcluir);
        novaTarefa.appendChild(botaoExcluir);

        lista.appendChild(novaTarefa);
        inputTarefas.value = "";

    }
}

let totalTarefas = 0;
let pendentes = 0;

function atualizarContador(){
    contador.innerHTML = `Pendentes: <strong>${pendentes}</strong> | Total: <strong>${totalTarefas}</strong>`;
}

