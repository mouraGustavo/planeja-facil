document.addEventListener("DOMContentLoaded", function() {

    const iconesCabecalho = document.getElementById("iconesCabecalho");
    const iconeCabecalho = [iconesCabecalho.children[0], iconesCabecalho.children[1]];
    
    iconeCabecalho.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse botao e de decoração é não tem uma funcionalidade")

        });

    });

    const paginasLinks = document.getElementById("paginasLinks");
    const links = paginasLinks.querySelectorAll("a");
    
    links.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse link e de decoração é não tem uma funcionalidade")

        });

    });

    const ColegasIcones = document.getElementById("ColegasIcones");
    const verMais = [ColegasIcones.children[3]];
    verMais.forEach((botao) => {

        botao.addEventListener("click", (evento) => {

            alert ("Esse botao e de decoração é não tem uma funcionalidade")

        });

    });



});