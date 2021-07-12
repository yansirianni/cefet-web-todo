let tarefas = [{
    nome: 'Comprar leite', 
    categoria:'compras',
    realizada: false
}, {
    nome: 'Escutar chimbinha', 
    categoria:'lazer',
    realizada: true
}];

const containerEl = document.querySelector('#lista-tarefas');
const incluirTarefaEl = document.querySelector('#incluir-nova-tarefa');

function insereTarefaNaPagina(tarefa){    

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

incluirTarefaEl.addEventListener('click', e => {
    const nomeTarefaEl = document.querySelector('#nova-tarefa-nome');
    const categoriaTarefaEl = document.querySelector('#nova-tarefa-categoria');

    const tarefa = {
        nome: nomeTarefaEl.value,
        categoria: categoriaTarefaEl.value,
        realizada: false
    };

    tarefas.push(tarefa);  
    insereTarefaNaPagina(tarefa); 

    nomeTarefaEl.value = '';
    nomeTarefaEl.focus();
});