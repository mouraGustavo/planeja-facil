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

});