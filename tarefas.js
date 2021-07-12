let tarefas = [{
    nome: 'Comprar leite', 
    categoria:'compras',
    realizada: false
}, {
    nome: 'Escutar chimbinha', 
    categoria:'lazer',
    realizada: true
}];

function insereTarefaNaPagina(tarefa){

    let containerEl = document.querySelector('#lista-tarefas');

    let tarefaEl = document.createElement('li');
    
    tarefaEl.innerHTML = `${tarefa.nome}`;
    tarefaEl.classList.add(`item-tarefa`, `categoria-${tarefa.categoria}`)

    if(tarefa.realizada){
        tarefaEl.classList.add('marcado');
    }

    containerEl.appendChild(tarefaEl);
}

// chama a função para cada item do vetor
tarefas.forEach(insereTarefaNaPagina);