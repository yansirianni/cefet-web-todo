let tarefas = [{
    nome: 'Comprar leite', 
    categoria:'compras',
    realizada: false
}, {
    nome: 'Escutar chimbinha', 
    categoria:'lazer',
    realizada: true
}];

//Exercicio 1
const tarefasEl = document.querySelector('#lista-tarefas');
const incluirTarefaEl = document.querySelector('#incluir-nova-tarefa');
const filtroCategoriaEl = document.querySelector('#filtro-de-categoria');
const novaTarefaNomeEl = document.querySelector('#nova-tarefa-nome');

function insereTarefaNaPagina(tarefa){    

    let tarefaEl = document.createElement('li');
    
    tarefaEl.innerHTML = `${tarefa.nome}`;
    tarefaEl.classList.add(`item-tarefa`, `categoria-${tarefa.categoria}`)

    if(tarefa.realizada){
        tarefaEl.classList.add('marcado');
    }

    tarefasEl.appendChild(tarefaEl);
}

// chama a função para cada item do vetor
tarefas.forEach(insereTarefaNaPagina);

//Exercicio 2
function adicionaTarefa(e){

    console.log('chemei');

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
}

incluirTarefaEl.addEventListener('click', adicionaTarefa);

//Exercicio 3
function filtraTarefas(e){

    let tarefasList = document.querySelectorAll('.item-tarefa');

    for(tarefaEl of tarefasList){    

        if(e.currentTarget.value === ''){
            tarefaEl.classList.remove('retido-no-filtro');
        }
        else if(tarefaEl.classList.contains(`categoria-${e.currentTarget.value}`)){                       
            tarefaEl.classList.remove('retido-no-filtro');
        } else {        
            tarefaEl.classList.add('retido-no-filtro');            
        }
    }        
}

filtroCategoriaEl.addEventListener('change', filtraTarefas);

//Exercicio 4
novaTarefaNomeEl.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        adicionaTarefa(e);
    }
});