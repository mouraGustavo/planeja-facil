document.addEventListener("DOMContentLoaded", function() {

    const listaFavoritos = document.getElementById("listaFavoritos");
    const linkFavoritos = listaFavoritos.querySelectorAll("div");
    const botaoFavorito = document.getElementById("botaoExpandir__Favorito");
    const iconeSeta = document.getElementById("iconeSetaFavorito");

    const listaProjetos = document.getElementById("listaProjetos");
    const botaoExpandir__Projetos = document.getElementById("botaoExpandir__Projetos");
    const botaoProjetos = Array.from(listaProjetos.getElementsByClassName("menuProcura__lista__projetos__botao__expandir__dois"));
    const linkProjetos = (listaProjetos.querySelectorAll("a"));
    const intensProjetos = (listaProjetos.querySelectorAll("section"));
    const linhaProjetos = (listaProjetos.querySelectorAll("div"));
    const iconeSeta__projetos = document.getElementById("iconeSeta__projetos");

    const listaTodosProjetos = document.getElementById("listaTodosProjetos");
    const link__TodosProjetos = listaTodosProjetos.querySelectorAll("a");
    const linhaTodosProjetos = listaTodosProjetos.querySelectorAll("div");
    const botaoExpandir__TodosProjetos = document.getElementById("botaoExpandir__TodosProjetos");
    const iconeSeta__Todosprojetos = document.getElementById("iconeSeta__TodosProjetos");
    const iconeSeta__TodosProjetos2 = document.getElementById("iconeSeta__TodosProjetos2");

    const listaProjetosFinalizados = document.getElementById("listaProjetosFinalizados");
    const link__ProjetosFinalizado = listaProjetosFinalizados.querySelectorAll("a");
    const linhaProjetosFinalizado = listaProjetosFinalizados.querySelectorAll("div");
    const botaoExpandir__ProjetosFinalizado = document.getElementById("botaoExpandir__ProjetosFinalizado");
    const iconeSeta__ProjetosFinalizado = document.getElementById("iconeSeta__ProjetosFinalizado");
    const iconeSeta__ProjetosFinalizado2 = document.getElementById("iconeSeta__ProjetosFinalizado2");

    const listaProjetosIncompletos = document.getElementById("listaProjetosIncompletos");
    const link__ProjetosIncompletos = listaProjetosIncompletos.querySelectorAll("a");
    const linhaProjetosIncompletos = listaProjetosIncompletos.querySelectorAll("div");
    const botaoExpandir__ProjetosIncompletos = document.getElementById("botaoExpandir__ProjetosIncompletos");
    const iconeSeta__ProjetosIncompletos = document.getElementById("iconeSeta__ProjetosIncompletos");
    const iconeSeta__ProjetosIncompletos2 = document.getElementById("iconeSeta__ProjetosIncompletos2");

    const listaProjetosCompartilhados = document.getElementById("listaProjetosCompartilhados");
    const link__ProjetosCompartilhados = listaProjetosCompartilhados.querySelectorAll("a");
    const linhaProjetosCompartilhados = listaProjetosCompartilhados.querySelectorAll("div");
    const botaoExpandir__ProjetosCompartilhados = document.getElementById("botaoExpandir__ProjetosCompartilhados");
    const iconeSeta__ProjetosCompartilhados = document.getElementById("iconeSeta__ProjetosCompartilhados");
    const iconeSeta__ProjetosCompartilhados2 = document.getElementById("iconeSeta__ProjetosCompartilhados2");


    let rotacionado = false;

    function retacionar (rotacionado) {

        if (!rotacionado) {

            iconeSeta.style.transform = "rotate(180deg)";
    
        } else {
    
            iconeSeta.style.transform = "rotate(0deg)";
    
        }

    }

    function retacionar__projeto (rotacionado) {

        if (!rotacionado) {

            iconeSeta__projetos.style.transform = "rotate(180deg)";
    
        } else {
    
            iconeSeta__projetos.style.transform = "rotate(0deg)";
    
        }

    }

    function retacionar__todosProjeto (rotacionado) {

        if (!rotacionado) {

            iconeSeta__Todosprojetos.style.transform = "rotate(180deg)";
            iconeSeta__TodosProjetos2.style.transform = "rotate(180deg)";
    
        } else {
    
            iconeSeta__Todosprojetos.style.transform = "rotate(0deg)";
            iconeSeta__TodosProjetos2.style.transform = "rotate(0deg)";
    
        }

    }

    function retacionar__ProjetoFinalizados (rotacionado) {

        if (!rotacionado) {

            iconeSeta__ProjetosFinalizado.style.transform = "rotate(180deg)";
            iconeSeta__ProjetosFinalizado2.style.transform = "rotate(180deg)";
    
        } else {
    
            iconeSeta__ProjetosFinalizado.style.transform = "rotate(0deg)";
            iconeSeta__ProjetosFinalizado2.style.transform = "rotate(0deg)";
    
        }

    }

    function retacionar__ProjetoIncompletos (rotacionado) {

        if (!rotacionado) {

            iconeSeta__ProjetosIncompletos.style.transform = "rotate(180deg)";
            iconeSeta__ProjetosIncompletos2.style.transform = "rotate(180deg)";
    
        } else {
    
            iconeSeta__ProjetosIncompletos.style.transform = "rotate(0deg)";
            iconeSeta__ProjetosIncompletos2.style.transform = "rotate(0deg)";
    
        }

    }

    function retacionar__ProjetoCompartilhados (rotacionado) {

        if (!rotacionado) {

            iconeSeta__ProjetosCompartilhados.style.transform = "rotate(180deg)";
            iconeSeta__ProjetosCompartilhados2.style.transform = "rotate(180deg)";
    
        } else {
    
            iconeSeta__ProjetosCompartilhados.style.transform = "rotate(0deg)";
            iconeSeta__ProjetosCompartilhados2.style.transform = "rotate(0deg)";
    
        }

    }

    botaoFavorito.addEventListener("click", () => {

        linkFavoritos.forEach(link => {

            link.classList.toggle("esconder");

        });

        retacionar (rotacionado);
        rotacionado = !rotacionado;

    });

    botaoExpandir__Projetos.addEventListener("click", () => {

        botaoProjetos.forEach(link => {

            link.classList.toggle("esconder");

        });

        linkProjetos.forEach(link => {

            link.classList.toggle("esconder");

        });

        intensProjetos.forEach(link => {

            link.classList.toggle("esconder");

        });

       /*  linhaProjetos.forEach(link => {

            link.classList.toggle("esconder");

        }); */

        retacionar__projeto (rotacionado);
        rotacionado = !rotacionado;

    });

    botaoExpandir__TodosProjetos.addEventListener("click", () => {

        link__TodosProjetos.forEach(link => {
            
            link.classList.toggle("esconder");

        });

        linhaTodosProjetos.forEach(link => {

            link.classList.toggle("esconder");

        });

        retacionar__todosProjeto (rotacionado);
        rotacionado = !rotacionado;

    });

    botaoExpandir__ProjetosFinalizado.addEventListener("click", () => {

        link__ProjetosFinalizado.forEach(link => {
            
            link.classList.toggle("esconder");

        });

        linhaProjetosFinalizado.forEach(link => {

            link.classList.toggle("esconder");

        });

        retacionar__ProjetoFinalizados (rotacionado);
        rotacionado = !rotacionado;

    });

    botaoExpandir__ProjetosIncompletos.addEventListener("click", () => {

        link__ProjetosIncompletos.forEach(link => {
            
            link.classList.toggle("esconder");

        });

        linhaProjetosIncompletos.forEach(link => {

            link.classList.toggle("esconder");

        });

        retacionar__ProjetoIncompletos (rotacionado);
        rotacionado = !rotacionado;

    });

    botaoExpandir__ProjetosCompartilhados.addEventListener("click", () => {

        link__ProjetosCompartilhados.forEach(link => {
            
            link.classList.toggle("esconder");

        });

        linhaProjetosCompartilhados.forEach(link => {

            link.classList.toggle("esconder");

        });

        retacionar__ProjetoCompartilhados (rotacionado);
        rotacionado = !rotacionado;

    });

    linkFavoritos.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse link e de decoração é não tem uma funcionalidade")

        });

    });

    link__TodosProjetos.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse link e de decoração é não tem uma funcionalidade")

        });

    });

    link__ProjetosFinalizado.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse link e de decoração é não tem uma funcionalidade")

        });

    });

    linhaProjetosIncompletos.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse link e de decoração é não tem uma funcionalidade")

        });

    });

    linhaProjetosCompartilhados.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse link e de decoração é não tem uma funcionalidade")

        });

    });

    // Modal de adicionar novo projeto
    document.getElementById('adicionarProjeto').addEventListener('click', () => {
        document.getElementById('modalCriarProjeto').style.display = 'flex';
    });

    document.getElementById('fecharModal').addEventListener('click', () => {
        document.getElementById('modalCriarProjeto').style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modalCriarProjeto');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('formCriarProjeto').addEventListener('submit', async function (event) {
        event.preventDefault();
    
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
    
        try {
            const token = localStorage.getItem('token');
            // console.log("token: ",token);
            if (!token) {
                alert('Você precisa estar logado para criar um projeto.');
                return;
            }
    
            const response = await fetch('../api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
    
            const result = await response.json();
            if (response.ok) {
                alert('Projeto criado com sucesso!');
                document.getElementById('modalCriarProjeto').style.display = 'none';
                location.reload();
            } else {
                alert(`Erro ao criar projeto: ${result.message}`);
            }
        } catch (error) {
            console.error('Erro ao criar projeto:', error);
            alert('Erro ao criar projeto. Tente novamente mais tarde.');
        }
    });
    
    const projetoSelecionado = localStorage.getItem('projetoSelecionado');
    if (projetoSelecionado) {
        const projeto = JSON.parse(projetoSelecionado);
        const titulo = document.querySelector('.telaPrincipal__cabecalho__continer__informacao__apresentacao__titulo');
        titulo.textContent = projeto.name;
    }
});
document.addEventListener('DOMContentLoaded', listarProjetos);
// Lista projetos
async function listarProjetos() {
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
        if (response.ok) {
            const container = document.querySelector('.menuProcura__lista__projetos__continerDoProjeto');

            container.innerHTML = '';

            projetos.forEach(projeto => {
                const projetoDiv = document.createElement('div');
                projetoDiv.className = 'menuProcura__lista__projetos__linha__decorativa';

                const img = document.createElement('img');
                img.className = 'menuProcura__lista__projetos__linha__decorativa__img';
                img.src = './Imagens/menuProcura/Linha decorativa.png';
                img.alt = '';

                const link = document.createElement('a');
                link.className = 'menuProcura__lista__projetos__projeto__link';
                link.href = '#';
                link.textContent = projeto.name;

                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const titulo = document.querySelector('.telaPrincipal__cabecalho__continer__informacao__apresentacao__titulo');
                    titulo.textContent = projeto.name;

                    localStorage.setItem('projetoSelecionado', JSON.stringify(projeto));
                });
                projetoDiv.appendChild(img);
                projetoDiv.appendChild(link);

                container.appendChild(projetoDiv);
            });
        } else {
            alert(`Erro ao carregar projetos: ${projetos.message}`);
        }
    } catch (error) {
        console.error('Erro ao listar projetos:', error);
        alert('Erro ao listar projetos. Tente novamente mais tarde.');
    }
}

