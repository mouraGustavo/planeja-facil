document.addEventListener("DOMContentLoaded", function() {

    const menuOpcoesDaPagina = document.getElementById("menuOpcoesDaPagina");
    const iconesCabecalho = document.getElementById("iconesCabecalho");
    const classeEsconder = iconesCabecalho.querySelector(".esconder");

    const opcoesIntens = menuOpcoesDaPagina.querySelectorAll(".menu-item");

     // Verifique se os itens foram selecionados
     console.log("Itens do menu encontrados:", opcoesIntens.length); // Deve exibir o número de itens encontrados

    menuOpcoesDaPagina.addEventListener("click", (evento) => {

        classeEsconder.classList.toggle("esconder");

    });

    opcoesIntens.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            

            alert ("Esse botão e de decoração é não tem uma funcionalidade")

        });

    });

});
