const reactivos = [
    {
        nombre: "Ácido Clorhídrico",
        cantidad: 8,
        minimo: 5
    },
    {
        nombre: "Hidróxido de Sodio",
        cantidad: 3,
        minimo: 5
    },
    {
        nombre: "Sulfato de Cobre",
        cantidad: 10,
        minimo: 6
    },
    {
        nombre: "Etanol",
        cantidad: 2,
        minimo: 4
    },
    {
        nombre: "Agua Destilada",
        cantidad: 15,
        minimo: 10
    }
];

function revisarInventario(reactivos) {

    reactivos.forEach(reactivo => {

        if (reactivo.cantidad >= reactivo.minimo) {
            console.log(`${reactivo.nombre}: Stock suficiente.`);
        } else {
            console.log(`${reactivo.nombre}: Reabastecer inventario.`);
        }

    });

}

revisarInventario(reactivos);