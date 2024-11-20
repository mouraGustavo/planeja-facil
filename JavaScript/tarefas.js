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
    const fecharModal = document.querySelectorAll('.fechar');
    const formulario = document.getElementById('formNovaTarefa');
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


    fecharModal.forEach((botaoFechar) => {
        botaoFechar.addEventListener('click', () => {
            modalNovaTarefa.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalNovaTarefa) {
            modalNovaTarefa.style.display = 'none';
        }
    });

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const projetoId = document.getElementById('projetoId').value;
        const responsavel = JSON.parse(localStorage.getItem('user'));
        const dataEntrega = document.getElementById('dataEntrega').value;

        const novaTarefa = {
            title: titulo,
            description: descricao,
            projectId: projetoId,
            assignedTo: responsavel._id,
            dueDate: dataEntrega
        };

        try {
            const token = localStorage.getItem('token');
            // console.log("token: ",token);
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

            if (response.ok) {
                const tarefaCriada = await response.json();
                console.log('Tarefa criada com sucesso:', tarefaCriada);
                modal.style.display = 'none';
                formulario.reset();
            } else {
                const erro = await response.json();
                console.error('Erro ao criar tarefa:', erro.message);
                alert('Erro ao criar tarefa: ' + erro.message);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro na requisição: ' + error.message);
        }
    });
});
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

document.addEventListener('DOMContentLoaded', selectProject);