var display = document.getElementById("display");

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
document.addEventListener("DOMContentLoaded", cargarNotasGuardadas);

function agregarNota() {
    var notaTexto = document.getElementById("nota").value;
    if (notaTexto !== "") {
        var listaNotas = document.getElementById("lista-notas");
        var nuevaNota = document.createElement("li");
        nuevaNota.textContent = notaTexto;
        
        var botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            listaNotas.removeChild(nuevaNota);
            guardarNotas();
        };
        
        nuevaNota.appendChild(botonEliminar);
        listaNotas.appendChild(nuevaNota);
        guardarNotas();
        document.getElementById("nota").value = "";
    }
}

function guardarNotas() {
    var notas = [];
    var listaNotas = document.getElementById("lista-notas").getElementsByTagName("li");
    for (var i = 0; i < listaNotas.length; i++) {
        notas.push(listaNotas[i].textContent);
    }
    localStorage.setItem("notas", JSON.stringify(notas));
}

function cargarNotasGuardadas() {
    var notas = localStorage.getItem("notas");
    if (notas) {
        notas = JSON.parse(notas);
        var listaNotas = document.getElementById("lista-notas");
        notas.forEach(function(nota) {
            var nuevaNota = document.createElement("li");
            nuevaNota.textContent = nota;
            
            var botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.onclick = function() {
                listaNotas.removeChild(nuevaNota);
                guardarNotas();
            };
            
            nuevaNota.appendChild(botonEliminar);
            listaNotas.appendChild(nuevaNota);
        });
    }
}
var display = document.getElementById("display");

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}