const proyectos = [
    { id: 1, nombre: "Intro 3D", presupuesto: 500, tipo: "basico" },
    { id: 2, nombre: "Logo animado", presupuesto: 800, tipo: "medio" },
    { id: 3, nombre: "Corto 3D", presupuesto: 1500, tipo: "avanzado" }
];

function calcularPresupuesto(proyectos) {

    if (!proyectos || proyectos.length === 0) {
        console.log("No hay proyectos registrados.");
        return;
    }

    let total = 0;
    let totalConDescuento = 0;

    for (let i = 0; i < proyectos.length; i++) {

        let descuento = 0;

        if (proyectos[i].tipo === "basico") {
            descuento = 0.05;
        } else if (proyectos[i].tipo === "medio") {
            descuento = 0.10;
        } else if (proyectos[i].tipo === "avanzado") {
            descuento = 0.15;
        }

        let precioFinal = proyectos[i].presupuesto - (proyectos[i].presupuesto * descuento);

        total += proyectos[i].presupuesto;
        totalConDescuento += precioFinal;

        console.log(`${proyectos[i].nombre}: $${precioFinal.toFixed(2)}`);
    }

    console.log("--------------------");
    console.log("Total sin descuento:", total);
    console.log("Total con descuento:", totalConDescuento.toFixed(2));
}

calcularPresupuesto(proyectos);