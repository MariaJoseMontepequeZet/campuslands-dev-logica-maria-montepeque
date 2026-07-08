/**
 * Simulación de estados: Supervivencia en Película de Miedo
 * Entradas: personaje {nombre, salud, escondido}
 */

function simularEstado(personaje, evento) {
    // Regla de eliminación inmediata
    if (personaje.salud <= 0) return "Eliminado";

    switch (evento) {
        case "atrapado":
            personaje.salud -= 50;
            return personaje.salud > 0 ? "Herido" : "Eliminado";
            
        case "esconderse":
            personaje.escondido = true;
            return "Escondido";
            
        case "escapar":
            personaje.escondido = false;
            return "Vivo";
            
        default:
            return personaje.escondido ? "Escondido" : "Vivo";
    }
}

// Pruebas
let persona = { nombre: "Ana", salud: 100, escondido: false };
console.log("Evento 1:", simularEstado(persona, "atrapado")); // Herido
console.log("Evento 2:", simularEstado(persona, "esconderse")); // Escondido