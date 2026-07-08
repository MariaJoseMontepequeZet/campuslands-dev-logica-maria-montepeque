const modelos = [
    { id: 1, nombre: "Cubo", calidad: 85 },
    { id: 2, nombre: "Esfera", calidad: 60 },
    { id: 3, nombre: "Pirámide", calidad: 95 }
];

function rankingModelos(modelos) {

    if (!modelos || modelos.length === 0) {
        console.log("No hay modelos 3D para analizar.");
        return;
    }

    let sumaCalidad = 0;
    let mejorModelo = modelos[0];

    for (let i = 0; i < modelos.length; i++) {

        sumaCalidad += modelos[i].calidad;

        if (modelos[i].calidad > mejorModelo.calidad) {
            mejorModelo = modelos[i];
        }

        if (modelos[i].calidad >= 80) {
            console.log(`${modelos[i].nombre}: Alta calidad`);
        } else {
            console.log(`${modelos[i].nombre}: Calidad media o baja`);
        }
    }

    let promedio = sumaCalidad / modelos.length;

    console.log("-------------------");
    console.log("Mejor modelo:", mejorModelo.nombre);
    console.log("Promedio de calidad:", promedio.toFixed(2));
}

rankingModelos(modelos);