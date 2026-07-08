const autos_hiperdeportivos = [
    { "marca": "Ferrari", "modelo": "F8 Tributo", "año": 2020, "potencia": 710, "precio": 276000 },
    { "marca": "Lamborghini", "modelo": "Huracán EVO", "año": 2021, "potencia": 640, "precio": 261274 },
    { "marca": "Porsche", "modelo": "911 Turbo S", "año": 2020, "potencia": 640, "precio": 203500 },
    { "marca": "McLaren", "modelo": "720S", "año": 2021, "potencia": 710, "precio": 299000 },
    { "marca": "Aston Martin", "modelo": "DB11", "año": 2020, "potencia": 630, "precio": 205600 }
];

let continuar = "si";

while (continuar === "si") {
    let modelo_buscar = prompt("Ingrese el modelo del auto que desea buscar:").toLowerCase();
    let encontrado = false;

    for (let vehiculo of autos_hiperdeportivos) {
        if (vehiculo.marca.toLowerCase() === modelo_buscar) {
            if (!encontrado) {
                console.log("Los autos de la marca ingresada son:");
                console.log(`Marca: ${vehiculo.marca}`);
                console.log(`Modelo: ${vehiculo.modelo}`);
                console.log(`Año: ${vehiculo.año}`);
                console.log(`Caballos de fuerza: ${vehiculo.potencia}`);
                console.log(`Precio: ${vehiculo.precio}`);
            }
            encontrado = true;
        }
    }

    if (encontrado === false) {
        console.log("No se encontraron autos de la marca ingresada.");
    }

    continuar = prompt("¿Desea buscar otro auto? (si/no):").toLowerCase();
}

console.log("Gracias por preferirnos. Bye");