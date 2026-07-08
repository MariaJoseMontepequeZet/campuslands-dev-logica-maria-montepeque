function elegirRaqueta(raqueta1, raqueta2) {
    if (raqueta1.control > raqueta2.control) {
        return { mejor: raqueta1.nombre, motivo: "Mayor nivel de control." };
    } else if (raqueta2.control > raqueta1.control) {
        return { mejor: raqueta2.nombre, motivo: "Mayor nivel de control." };
    }   
    if (raqueta1.velocidad > raqueta2.velocidad) {
        return { mejor: raqueta1.nombre, motivo: "Empate en control, mayor velocidad." };
    } else if (raqueta2.velocidad > raqueta1.velocidad) {
        return { mejor: raqueta2.nombre, motivo: "Empate en control, mayor velocidad." };
    }

    return { mejor: "Ninguna", motivo: "Ambas raquetas son idénticas." };
}
const r1 = { nombre: "Butterfly", control: 8, velocidad: 7 };
const r2 = { nombre: "Stiga", control: 8, velocidad: 9 };

console.log(elegirRaqueta(r1, r2));