let estado_espectador = "Tranquilo";
let palomitas = true;

while (estado_espectador !== "Fuera de la Sala") {
    console.log(`\n[ESTADO ACTUAL]: El espectador está {estado_espectador}.`);

    if (estado_espectador === "Tranquilo") {
        console.log("1. No pasa nada (Sigue viendo la película)");
        console.log("2. ¡Aparece un fantasma de la nada!");
        let accion = prompt("¿Qué pasa en la película? (1/2): ");

        if (accion === "2") {
            estado_espectador = "Asustado";
        } else {
            console.log("El espectador come palomitas tranquilamente...");
        }

    } else if (estado_espectador === "Asustado") {
        console.log("1. La música baja de volumen (Se calma el ambiente)");
        console.log("2. ¡VIENE UN JUMPSCARE CON UN GRITO FUERTE!");
        let accion = prompt("¿Qué pasa ahora? (1/2): ");

        if (accion === "1") {
            estado_espectador = "Tranquilo";
        } else if (accion === "2") {
            estado_espectador = "En Shock";
        }

    } else if (estado_espectador === "En Shock") {
        if (palomitas) {
            console.log("¡El espectador tiró las palomitas del susto!");
            palomitas = false;
        }

        console.log("1. El espectador respira hondo y se tranquiliza");
        console.log("2. ¡El monstruo empieza a perseguir al protagonista!");
        let accion = prompt("¿Qué pasa ahora? (1/2): ");

        if (accion === "1") {
            estado_espectador = "Asustado";
        } else if (accion === "2") {
            estado_espectador = "Fuera de la Sala";
        }
    }
}

console.log("\n El espectador salió corriendo de la sala. ¡La película dio demasiado miedo!");
console.log("=== FIN DE LA SIMULACIÓN ===");