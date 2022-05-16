// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var select = document.getElementById('opcoes');

// When the user clicks the button, open the modal 
function abrirModal() {
    modal.style.display = "block";
    esconderJogo();
    expandirSelect();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    mostrarJogo();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        mostrarJogo();
    }
}

function expandirSelect() {
    document.getElementById('opcoes').size = document.getElementById('opcoes').options.length
}

function mostrarJogo() {
    document.getElementById('jogo').style.display = 'flex';
    adiconaTema();
}

function esconderJogo() {
    document.getElementById('jogo').style.display = 'none';
}

function adiconaTema() {
    temaSelecionadoModal = select.options[select.selectedIndex].value;
}