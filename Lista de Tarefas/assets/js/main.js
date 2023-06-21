//cria variáveis com base nas classes atribuidas ao elemento HTML

const valTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//função que cria elementos da lista (li)
function criaLi(){
    const li = document.createElement('li');
    return li;
}

//função que permite inserir informações no input usando a tecla Enter
valTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!valTarefa.value) return;
        criaTarefa(valTarefa.value);

    }
});

//Limpa o input para receber novo valor e foca no cursor do input

function limpaInput(){
valTarefa.value = '';
valTarefa.focus();
}

//Cria botão de apagar o item adicionado à lista (li)
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

//função que permite que o botão de apagar remova o elemento da lista;

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

//impede que o botão de captura aceite valores vazios no input e adiciona o valor no input se tudo certo;
btnTarefa.addEventListener('click', function(){
    if (!valTarefa.value) return;
    criaTarefa(valTarefa.value);
});

//Permite que o elemento selecionado seja removido
document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

// Salva as tarefas adicionadas via input e as coloca em um array. 
// Aqui os elementos js são convertidos em string via JSON.

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerHTML;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    } 

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

// Adiciona as tarefas salvas ao local storage e posteriormente, as converte 
//para js novamente.

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

    adicionaTarefasSalvas();
}

//chama as tarefas
