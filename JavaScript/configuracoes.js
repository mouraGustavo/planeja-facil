document.addEventListener("DOMContentLoaded", function() {

        // Elementos do formulário
        const form = document.querySelector('#formAlterarlogin');
        const inputNome = document.querySelector('#name');
        const inputSenha = document.querySelector('#password');
        const inputCargo = document.querySelector('#cargo');
        const botaoDeletar = document.querySelector('#deleteUser');
        const botoesFerramentas = document.getElementById("listaDeIcones");

        const botoesListas = botoesFerramentas.querySelectorAll("li");

        botoesListas.forEach((botao) => {

            botao.addEventListener("click", (evento) => {
    
                window.location.href = './configuracoes.html';
    
            });
    
        });
    
        // Função para carregar dados do usuário (exemplo com localStorage)
        function carregarDadosUsuario() {
            const usuario = JSON.parse(localStorage.getItem('usuario')) || { name: '', password: '', cargo: '' };
            inputNome.value = usuario.name;
            inputSenha.value = usuario.password;
            inputCargo.value = usuario.cargo;
        }
    
        // Função para salvar dados do usuário
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const usuarioAtualizado = {
                name: inputNome.value,
                password: inputSenha.value,
                cargo: inputCargo.value,
            };
            localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado));
            alert('Dados atualizados com sucesso!');
        });
    
        // Função para deletar o perfil
        botaoDeletar.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja deletar seu perfil? Essa ação não pode ser desfeita.')) {
                localStorage.removeItem('usuario');
                alert('Perfil deletado com sucesso!');
                // Redirecionar após exclusão
                window.location.href = './index.html';
            }
        });
    
        // Carregar os dados ao abrir a página
        document.addEventListener('DOMContentLoaded', carregarDadosUsuario);

});