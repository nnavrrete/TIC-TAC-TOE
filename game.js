const prompt = require('prompt-sync')();

let gato = [" 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 "];   // Array de 3x3


let jugador1 = "X";
let jugador2 = "O";

let game = true;

function printGato() {
    console.log(gato[0] + "|" + gato[1] + "|" + gato[2]);
    console.log("-----");
    console.log(gato[3] + "|" + gato[4] + "|" + gato[5]);
    console.log("-----");
    console.log(gato[6] + "|" + gato[7] + "|" + gato[8]);
}

console.log("Bienvenido al juego del gato");
printGato();

while (game) {
    let jugador = prompt("Es el turno del jugador 1 (X). Ingrese la posición (1-9): ");
    gato[jugador - 1] = jugador1 ;
    printGato();

    if (condicionesGanador(jugador1)) {
        console.log("¡El jugador 1 (X) ha ganado!");
        game = false;
        break;
    }

    jugador = prompt("Es el turno del jugador 2 (O). Ingrese la posición (1-9): ");
    gato[jugador - 1] = jugador2;
    printGato();

    if (condicionesGanador(jugador2)) {
        console.log("¡El jugador 2 (O) ha ganado!");
        game = false;
        break;
    }
}

console.log("Fin del juego");

function condicionesGanador(jugador) {
    // Comprobar filas
    if (gato[0] === jugador && gato[1] === jugador && gato[2] === jugador) {
        return true;
    }
    if (gato[3] === jugador && gato[4] === jugador && gato[5] === jugador) {
        return true;
    }
    if (gato[6] === jugador && gato[7] === jugador && gato[8] === jugador) {
        return true;
    }

    // Comprobar columnas
    if (gato[0] === jugador && gato[3] === jugador && gato[6] === jugador) {
        return true;
    }
    if (gato[1] === jugador && gato[4] === jugador && gato[7] === jugador) {
        return true;
    }
    if (gato[2] === jugador && gato[5] === jugador && gato[8] === jugador) {
        return true;
    }

    // Comprobar diagonales
    if (gato[0] === jugador && gato[4] === jugador && gato[8] === jugador) {
        return true;
    }
    if (gato[2] === jugador && gato[4] === jugador && gato[6] === jugador) {
        return true;
    }

    return false;
}

