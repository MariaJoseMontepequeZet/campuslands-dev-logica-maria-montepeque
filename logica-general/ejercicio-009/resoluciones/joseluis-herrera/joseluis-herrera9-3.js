let estado_espectador = "Tranquilo";
let palomitas = true;

while (estado_espectador !== "Fuera de la Sala") {
    console.log(`\n[ESTADO ACTUAL]: El espectador está {estado_espectador}.`);

    switch (estado_espectador) {
        case "Tranquilo":
            console.log("1. No pasa nada (Sigue viendo la película)");
            console.log("2. ¡Aparece un fantasma de la nada!");
            let accion1 = prompt("¿Qué pasa en la película? (1/2): ");

            if (accion1 === "2") {
                estado_espectador = "Asustado";
            } else {
                console.log("El espectador come palomitas tranquilamente...");
            }
            break;

        case "Asustado":
            console.log("1. La música baja de volumen (Se calma el ambiente)");
            console.log("2. ¡VIENE UN JUMPSCARE CON UN GRITO FUERTE!");
            let accion2 = prompt("¿Qué pasa ahora? (1/2): ");

            if (accion2 === "1") {
                estado_espectador = "Tranquilo";
            } else if (accion2 === "2") {
                estado_espectador = "En Shock";
            }
            break;

        case "En Shock":
            if (palomitas) {
                console.log("¡El espectador tiró las palomitas del susto!");
                palomitas = false;
            }

            console.log("1. El espectador respira hondo y se tranquiliza");
            console.log("2. ¡El monstruo empieza a perseguir al protagonista!");
            let accion3 = prompt("¿Qué pasa ahora? (1/2): ");

            if (accion3 === "1") {
                estado_espectador = "Asustado";
            } else if (accion3 === "2") {
                estado_espectador = "Fuera de la Sala";
            }
            break;
    }
}

console.log("\n El espectador salió corriendo de la sala. ¡La película dio demasiado miedo!");
console.log("=== FIN DE LA SIMULACIÓN ===");