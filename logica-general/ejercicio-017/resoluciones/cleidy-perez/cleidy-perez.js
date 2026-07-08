const objetos3D = [
    { id: 1, nombre: "Cubo", vertices: 8, textura: true },
    { id: 2, nombre: "Esfera", vertices: 0, textura: false },
    { id: 3, nombre: "Pirámide", vertices: 5, textura: true }
];

function evaluarModelos(objetos) {

    if (!objetos || objetos.length === 0) {
        console.log("No hay modelos 3D.");
        return;
    }

    let aprobados = 0;

    for (let i = 0; i < objetos.length; i++) {

        let cumpleVertices = objetos[i].vertices > 0;
        let cumpleTextura = objetos[i].textura === true;

        if (cumpleVertices && cumpleTextura) {
            console.log(`${objetos[i].nombre}: Aprobado`);
            aprobados++;
        } else {
            console.log(`${objetos[i].nombre}: Rechazado`);
        }
    }

    console.log("-------------------");
    console.log("Total aprobados:", aprobados);
}

evaluarModelos(objetos3D);