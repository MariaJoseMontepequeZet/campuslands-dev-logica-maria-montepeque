const determinarEstrategia = (composicion, nivelOponente, puntosDeVida) => {
    if (puntosDeVida < 30) {
        return { estrategia: "Retirada táctica", motivo: "Puntos de vida bajos, prioridad a la supervivencia." };
    }

    if (nivelOponente === "alto") {
        return { estrategia: "Defensiva precavida", motivo: "Oponente de alto nivel, evitar riesgos innecesarios." };
    }

    if (nivelOponente === "medio" && composicion === "agresiva") {
        return { estrategia: "Ataque rápido", motivo: "Oponente nivel medio permite aprovechar una composición agresiva." };
    }

    return { estrategia: "Equilibrada", motivo: "Sin riesgos inmediatos, mantener formación estándar." };
};
console.log(determinarEstrategia("agresiva", "alto", 80));  
console.log(determinarEstrategia("agresiva", "medio", 20)); 