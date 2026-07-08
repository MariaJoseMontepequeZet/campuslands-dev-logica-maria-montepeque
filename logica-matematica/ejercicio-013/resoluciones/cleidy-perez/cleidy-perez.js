const saltos = [
    { id: 1, paracaidista: "Juan", distancia: 1200 },
    { id: 2, paracaidista: "María", distancia: 950 },
    { id: 3, paracaidista: "Carlos", distancia: 1500 }
];

function calcularDistancia(saltos) {

    if (!saltos || saltos.length === 0) {
        console.log("No hay saltos registrados.");
        return;
    }

    let distanciaTotal = 0;

    for (let i = 0; i < saltos.length; i++) {

        distanciaTotal += saltos[i].distancia;

        if (saltos[i].distancia >= 1000) {
            console.log(`${saltos[i].paracaidista}: Distancia suficiente`);
        } else {
            console.log(`${saltos[i].paracaidista}: Distancia insuficiente`);
        }
    }

    let promedio = distanciaTotal / saltos.length;

    console.log("----------------------");
    console.log("Distancia total:", distanciaTotal, "metros");
    console.log("Promedio:", promedio.toFixed(2), "metros");
}

calcularDistancia(saltos);