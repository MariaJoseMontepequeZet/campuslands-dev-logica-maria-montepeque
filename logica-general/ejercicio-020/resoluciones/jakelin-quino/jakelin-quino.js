function seleccionarCombo(presupuesto, nivelHambre) {
    if (presupuesto >= 15 && nivelHambre === "alto") {
        return { combo: "Combo Familiar", precio: 15, nota: "Ideal para saciar hambre extrema." };
    }
    if (presupuesto >= 8) {
        return { combo: "Combo Mediano", precio: 8, nota: "Equilibrio entre precio y sabor." };
    }
    if (presupuesto >= 5) {
        return { combo: "Combo Económico", precio: 5, nota: "Opción rápida y barata." };
    }
    return { combo: null, precio: 0, nota: "Presupuesto insuficiente para cualquier combo." };
}

console.log(seleccionarCombo(20, "alto"));
console.log(seleccionarCombo(3, "bajo"));