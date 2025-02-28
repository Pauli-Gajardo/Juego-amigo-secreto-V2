// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = ["María", "Ana", "Pedro", "Andrés", "Pablo"]

function mostrarAmigos () {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Limpiar la lista antes de agregar nuevos elementos

    let contenido = "";
    for (let i = 0; i < amigos.length; i++) {
        contenido += `<li>${amigos[i]}</li>`
    }
    lista.innerHTML = contenido;
}

function sortearAmigo () {
    if (amigos.length ===0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
}

function agregarAmigo () {
    console.log("Hola");
    const input = document.getElementById("amigo");
    console.log(input);
    const nombre = input.value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    console.log(nombre)
    if (nombre !== "") {
        amigos.push(nombre);
        console.log(amigos);
        input.value = "";
        mostrarAmigos();
    }
}
//Llamar a la función para mostrar los amigos al cargar la página
document. addEventListener("DOMContentLoaded", mostrarAmigos);

document.getElementById("boton-agregar").addEventListener("click", agregarAmigo);