const comidas = [
    { id: 1, nombre: "Hamburguesa", precio: 40, cantidad: 2 },
    { id: 2, nombre: "Tacos", precio: 25, cantidad: 3 },
    { id: 3, nombre: "Pizza", precio: 60, cantidad: 1 }
];

function calcularVenta(comidas) {

    if (!comidas || comidas.length === 0) {
        console.log("No hay ventas para calcular.");
        return;
    }

    let totalVentas = 0;

    for (let i = 0; i < comidas.length; i++) {

        let total = comidas[i].precio * comidas[i].cantidad;
        totalVentas += total;

        if (total >= 100) {
            console.log(`${comidas[i].nombre}: Venta alta Q${total}`);
        } else {
            console.log(`${comidas[i].nombre}: Venta baja Q${total}`);
        }
    }

    console.log("--------------------");
    console.log("Total de ventas: Q" + totalVentas);
}

calcularVenta(comidas);