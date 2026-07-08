const tatuajes = [
    { id: 1, cliente: "Juan", cicatrizacion: "Buena" },
    { id: 2, cliente: "María", cicatrizacion: "Mala" },
    { id: 3, cliente: "Carlos", cicatrizacion: "Buena" }
];

function diagnosticarTatuajes(tatuajes) {

    if (!tatuajes || tatuajes.length === 0) {
        console.log("No hay tatuajes para revisar.");
        return;
    }

    let errores = 0;

    for (let i = 0; i < tatuajes.length; i++) {

        if (tatuajes[i].cicatrizacion === "Mala") {
            console.log(`${tatuajes[i].cliente}: Requiere revisión.`);
            errores++;
        } else {
            console.log(`${tatuajes[i].cliente}: Tatuaje en buen estado.`);
        }
    }

    console.log("---------------------");
    console.log("Total de tatuajes con problemas:", errores);
}

diagnosticarTatuajes(tatuajes);