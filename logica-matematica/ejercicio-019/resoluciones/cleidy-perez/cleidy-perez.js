const formulas = [
    { id: 1, nombre: "Agua", ph: 7 },
    { id: 2, nombre: "Ácido clorhídrico", ph: 2 },
    { id: 3, nombre: "Hidróxido de sodio", ph: 12 }
];

function validarPH(formulas) {

    if (!formulas || formulas.length === 0) {
        console.log("No hay fórmulas químicas para revisar.");
        return;
    }

    let validas = 0;

    for (let i = 0; i < formulas.length; i++) {

        if (formulas[i].ph >= 0 && formulas[i].ph <= 14) {
            console.log(`${formulas[i].nombre}: pH válido`);
            validas++;
        } else {
            console.log(`${formulas[i].nombre}: pH inválido`);
        }
    }

    console.log("--------------------");
    console.log("Total de fórmulas válidas:", validas);
}

validarPH(formulas);