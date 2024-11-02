document.addEventListener("DOMContentLoaded", function() {
   
    const botoesFerramentas = document.getElementById("listaDeIcones");

    const botoesListas = botoesFerramentas.querySelectorAll("li");

    botoesListas.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse botão e de decoração é não tem uma funcionalidade")

        });

    });

});