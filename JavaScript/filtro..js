document.addEventListener("DOMContentLoaded", function() {
   
    const botoesFiltro = document.getElementById("botoesFiltro");

    const botoeFiltro = botoesFiltro.querySelectorAll("button");

    botoeFiltro.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse botão e de decoração é não tem uma funcionalidade")

        });

    });

});