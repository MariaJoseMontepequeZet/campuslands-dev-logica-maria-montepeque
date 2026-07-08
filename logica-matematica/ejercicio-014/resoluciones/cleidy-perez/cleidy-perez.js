const tatuajes = [
    { id: 1, diseño: "Dragón", lado: 10 },
    { id: 2, diseño: "Rosa", lado: 8 },
    { id: 3, diseño: "Lobo", lado: 12 }
];

function calcularTatuajes(tatuajes) {

    if (!tatuajes || tatuajes.length === 0) {
        console.log("No hay tatuajes registrados.");
        return;
    }

    let areaTotal = 0;
    let perimetroTotal = 0;

    for (let i = 0; i < tatuajes.length; i++) {

        let area = tatuajes[i].lado * tatuajes[i].lado;
        let perimetro = tatuajes[i].lado * 4;

        areaTotal += area;
        perimetroTotal += perimetro;

        console.log(`${tatuajes[i].diseño}`);
        console.log("Área:", area);
        console.log("Perímetro:", perimetro);

        if (area >= 100) {
            console.log("Tatuaje grande");
        } else {
            console.log("Tatuaje pequeño");
        }

        console.log("----------------");
    }

    console.log("Área total:", areaTotal);
    console.log("Perímetro total:", perimetroTotal);
}

calcularTatuajes(tatuajes);