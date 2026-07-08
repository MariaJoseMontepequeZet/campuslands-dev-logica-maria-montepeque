const comidas = [
    {
        nombre: "Hamburguesa Clásica",
        precio: 45,
        disponible: true
    },
    {
        nombre: "Perro Caliente",
        precio: 30,
        disponible: true
    },
    {
        nombre: "Tacos al Pastor",
        precio: 35,
        disponible: false
    },
    {
        nombre: "Pizza Personal",
        precio: 55,
        disponible: true
    },
    {
        nombre: "Arepa Mixta",
        precio: 40,
        disponible: true
    }
];

function seleccionarComida(comidas, presupuesto) {

    comidas.forEach(comida => {

        if (comida.disponible && comida.precio <= presupuesto) {
            console.log(`${comida.nombre}: Es una buena opción para comprar.`);
        } else if (!comida.disponible) {
            console.log(`${comida.nombre}: No está disponible.`);
        } else {
            console.log(`${comida.nombre}: Supera el presupuesto disponible.`);
        }

    });

}

seleccionarComida(comidas, 40);