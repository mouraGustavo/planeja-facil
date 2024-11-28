document.addEventListener("DOMContentLoaded", function() {
   
    const novaTarefaTopo = document.getElementById("novaTarefaTopo");
    const botaoTarefaTopo = novaTarefaTopo.querySelectorAll("img");

    const emProgressoTopo = document.getElementById("emProgressoTopo");
    const botaoemProgressoTopo = emProgressoTopo.querySelectorAll("img");

    const completoTopo = document.getElementById("completoTopo");
    const botaocompletoTopo = completoTopo.querySelectorAll("img");


    botaoTarefaTopo.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse botão e de decoração é não tem uma funcionalidade")

        });

    });

    botaoemProgressoTopo.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse botão e de decoração é não tem uma funcionalidade")

        });

    });

    botaocompletoTopo.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse botão e de decoração é não tem uma funcionalidade")

        });

    });

    // Abrir modal criar tareaf
    const modalNovaTarefa = document.getElementById('modalCriarTarefa');
    const fecharModal = document.getElementById('fecharModalTask');
    const formulario = document.getElementById('formCriarTarefa');
    const addTask1 = document.getElementById('addTask1');
    const addTask2 = document.getElementById('addTask2');
    const addTask3 = document.getElementById('addTask3');

    addTask1.addEventListener('click', () => {
        modalNovaTarefa.style.display = 'block';
    });

    addTask2.addEventListener('click', () => {
        modalNovaTarefa.style.display = 'block';
    });

    addTask3.addEventListener('click', () => {
        modalNovaTarefa.style.display = 'block';
    });

    fecharModal.addEventListener('click', () => {
       modalNovaTarefa.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalNovaTarefa) {
            modalNovaTarefa.style.display = 'none';
        }
    });

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value || '';
        const projetoId = document.getElementById('projetoId').value;
        const responsavel = JSON.parse(localStorage.getItem('user'));
        const dataEntrega = document.getElementById('dataVencimento').value;
        const status = document.getElementById('status').value;
        
        const novaTarefa = {
            title: titulo,
            description: descricao,
            projectId: projetoId,
            assignedTo: responsavel._id,
            dueDate: dataEntrega,
            status: status
        };
        try {
            const token = localStorage.getItem('token');
            
            if (!token) {
                alert('Você precisa estar logado para criar um projeto.');
                return;
            }
    
            const response = await fetch('../api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(novaTarefa)
            });
            
            console.log("response: ",response);
            if (response.ok) {
                alert('Tarefa criada com sucesso!');
                modalNovaTarefa.style.display = 'none';
                formulario.reset();
            } else {
                const erro = await response.json();
                alert('Erro ao criar tarefa: ' + erro);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro na requisição: ' + error.message);
        }
    });

    const modalEditarTarefa = document.getElementById('modalEditarTarefa');

    document.getElementById('formEditarTarefa').addEventListener('submit', async (e) => {
        e.preventDefault();
        const tarefaId = document.getElementById('editarTarefaId').value;
        const titulo = document.getElementById('tituloEditar').value;
        const descricao = document.getElementById('descricaoEditar').value;
        const dataVencimento = document.getElementById('dataVencimentoEditar').value;
        const statusEditar = document.getElementById('statusEditar').value;
    
        await atualizarTarefa(tarefaId, { title: titulo, description: descricao, dueDate: dataVencimento, status: statusEditar });
        modalEditarTarefa.style.display = 'none';
    });
    
    document.getElementById('btnExcluirTarefa').addEventListener('click', async () => {
        const tarefaId = document.getElementById('editarTarefaId').value;
    
        await excluirTarefa(tarefaId);
        modalEditarTarefa.style.display = 'none';
    });
});

function abrirModalEditar(tarefa) {
    document.getElementById('editarTarefaId').value = tarefa._id;
    document.getElementById('tituloEditar').value = tarefa.title;
    document.getElementById('descricaoEditar').value = tarefa.description;
    document.getElementById('dataVencimentoEditar').value = tarefa.dueDate.split('T')[0]; // Formato YYYY-MM-DD
    document.getElementById('statusEditar').value = tarefa.status;

    const modalEditarTarefa = document.getElementById('modalEditarTarefa');
    modalEditarTarefa.style.display = 'block'; // Exibe a modal

    const span = document.getElementById('fecharTaskEdit');
    span.onclick = function() {
        modalEditarTarefa.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modalEditarTarefa) {
            modalEditarTarefa.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', selectProject);
document.addEventListener('DOMContentLoaded', listarTarefasPorUsuario);

async function atualizarTarefa(tarefaId, dadosAtualizados) {
    const token = localStorage.getItem('token');

    console.log('dadosAtualizados:', dadosAtualizados);
    try {
        const response = await fetch(`../api/tasks/update/${tarefaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!response.ok) {
            const erro = await response.json();
            console.log('Erro ao atualizar tarefa:', erro);
            throw new Error(erro.message);
        }

        alert('Tarefa atualizada com sucesso!');
        listarTarefasPorUsuario(); // Atualiza a lista de tarefas após a edição
    } catch (error) {
        console.log('Erro ao atualizar tarefa:', error);
        alert('Erro ao atualizar tarefa: ' + error.message);
    }
}
async function excluirTarefa(tarefaId) {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`../api/tasks/delete/${tarefaId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const erro = await response.json();
            throw new Error(erro.message);
        }

        alert('Tarefa excluída com sucesso!');
        listarTarefasPorUsuario(); // Atualiza a lista de tarefas após a exclusão
    } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
        alert('Erro ao excluir tarefa: ' + error.message);
    }
}

async function selectProject() {
    const selectProjetos = document.getElementById('projetoId');

    try {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar logado para visualizar os projetos.');
            return;
        }
        const response = await fetch('../api/projects', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });


        const projetos = await response.json();

        selectProjetos.innerHTML = '<option value="">-- Selecione um Projeto --</option>';

        projetos.forEach(projeto => {
            const option = document.createElement('option');
            option.value = projeto._id;
            option.textContent = projeto.name;
            selectProjetos.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao listar projetos:', error);
        alert('Erro ao listar projetos: ' + error.message);
    }
}

async function listarTarefasPorUsuario() {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const ulToDo = document.querySelector('.tarefas-to-do');
    const ulInProgress = document.querySelector('.tarefas-in-progress');
    const ulDone = document.querySelector('.tarefas-done');
    
    ulToDo.innerHTML = '';
    ulInProgress.innerHTML = '';
    ulDone.innerHTML = '';

    if (!token) return;

    try {
        const response = await fetch('../api/tasks', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar tarefas');
        }

        const tarefas = await response.json();

        tarefas.forEach(tarefa => {
            const li = document.createElement('li');
            li.className = 'telaPrincipal__tarefas__categoria__cards__continer';

            // Formatação da data
            const dataEntrega = new Date(tarefa.dueDate);
            const dataFormatada = dataEntrega.toLocaleDateString('pt-BR');

            li.innerHTML = `
                <div class="telaPrincipal__tarefas__categoria__cards__continer__topo">
                    <h4 class="telaPrincipal__tarefas__categoria__cards__continer__titulo">
                        ${tarefa.title}
                    </h4>
                    <div class="telaPrincipal__tarefas__categoria__cards__continer__topo__topicos">
                    </div>
                    <img class="telaPrincipal__tarefas__categoria__cards__continer__topo__topicos__img" id="task_${tarefa._id}" src="./Imagens/Tela principal/Icone menu amarelo.png" alt="Icone menu" style="cursor: pointer;">
                    <img class="dtelaPrincipal__tarefas__categoria__cards__continer__topo__topicos__img" src="./Imagens/Tela principal/delete.png" alt="Excluir" id="delete_${tarefa._id}" style="cursor: pointer;">
                </div>
                <p class="telaPrincipal__tarefas__categoria__cards__continer__resumo">
                    ${tarefa.description}
                </p>

                <div class="LinhaDecorativa2"></div>
                
                <div class="telaPrincipal__tarefas__categoria__cards__continer__final">
                
                <img class="telaPrincipal__tarefas__categoria__cards__continer__final__pessaosImg" src="./Imagens/cards/Homens icones.png" alt="Icone pessoas">
                
                </div>

                <div class="linhaDecorativa2"></div>
            `;

            // Adiciona a tarefa à div correspondente com base no status
            if (tarefa.status === 'to-do') {
                ulToDo.appendChild(li);
            } else if (tarefa.status === 'in-progress') {
                ulInProgress.appendChild(li);
            } else if (tarefa.status === 'done') {
                ulDone.appendChild(li);
            }
            const icon = li.querySelector(`#task_${tarefa._id}`);
            icon.addEventListener('click', () => {
                abrirModalEditar(tarefa);
            });
            const deleteIcon = li.querySelector(`#delete_${tarefa._id}`);
            deleteIcon.addEventListener('click', async () => {
                if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
                    await excluirTarefa(tarefa._id);
                }
            });
        });
    } catch (error) {
        console.error('Erro ao listar tarefas:', error);
    }
}
async function listarTarefasPorProjeto(projectId) {
    const token = localStorage.getItem('token');
    const ulToDo = document.querySelector('.tarefas-to-do');
    const ulInProgress = document.querySelector('.tarefas-in-progress');
    const ulDone = document.querySelector('.tarefas-done');
    
    ulToDo.innerHTML = '';
    ulInProgress.innerHTML = '';
    ulDone.innerHTML = '';

    try {
        const response = await fetch(`../api/tasks/project/${projectId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar tarefas do projeto');
        }

        const tarefas = await response.json();
        
        tarefas.forEach(tarefa => {
            const li = document.createElement('li');
            li.className = 'telaPrincipal__tarefas__categoria__cards__continer';

            // Formatação da data
            const dataEntrega = new Date(tarefa.dueDate);
            const dataFormatada = dataEntrega.toLocaleDateString('pt-BR');

            li.innerHTML = `
                <div class="telaPrincipal__tarefas__categoria__cards__continer__topo">
                    <h4 class="telaPrincipal__tarefas__categoria__cards__continer__titulo">
                        ${tarefa.title}
                    </h4>
                    <div class="telaPrincipal__tarefas__categoria__cards__continer__topo__topicos">
                    </div>
                    <img class="telaPrincipal__tarefas__categoria__cards__continer__topo__topicos__img" id="task_${tarefa._id}" src="./Imagens/Tela principal/Icone menu amarelo.png" alt="Icone menu" style="cursor: pointer;">
                    <img class="telaPrincipal__tarefas__categoria__cards__continer__topo__topicos__img" src="./Imagens/Tela principal/delete.png" alt="Excluir" id="delete_${tarefa._id}" style="cursor: pointer;">
                </div>
                <p class="telaPrincipal__tarefas__categoria__cards__continer__resumo">
                    ${tarefa.description}
                </p>

                <div class="LinhaDecorativa2"></div>
                
                <div class="telaPrincipal__tarefas__categoria__cards__continer__final">
                
                <img class="telaPrincipal__tarefas__categoria__cards__continer__final__pessaosImg" src="./Imagens/cards/Homens icones.png" alt="Icone pessoas">
                
                </div>

                <div class="linhaDecorativa2"></div>
            `;

            // Adiciona a tarefa à div correspondente com base no status
            if (tarefa.status === 'to-do') {
                ulToDo.appendChild(li);
            } else if (tarefa.status === 'in-progress') {
                ulInProgress.appendChild(li);
            } else if (tarefa.status === 'done') {
                ulDone.appendChild(li);
            }
            const icon = li.querySelector(`#task_${tarefa._id}`);
            icon.addEventListener('click', () => {
                abrirModalEditar(tarefa);
            });

            const deleteIcon = li.querySelector(`#delete_${tarefa._id}`);
            deleteIcon.addEventListener('click', async () => {
                if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
                    await excluirTarefa(tarefa._id);
                }
            });
        });
    } catch (error) {
        console.error('Erro ao listar tarefas do projeto:', error);
    }
}