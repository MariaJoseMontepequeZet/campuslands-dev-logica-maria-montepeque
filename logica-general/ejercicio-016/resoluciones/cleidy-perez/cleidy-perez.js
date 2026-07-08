const objetos3D = [
    { id: 1, nombre: "Cubo", posicion: [2, 3] },
    { id: 2, nombre: "Esfera", posicion: [5, 4] },
    { id: 3, nombre: "Pirámide", posicion: [1, 6] }
];

function mostrarPosiciones(objetos3D) {

    if (!objetos3D || objetos3D.length === 0) {
        console.log("No hay objetos para mostrar.");
        return;
    }

    let totalX = 0;
    let totalY = 0;

    for (let i = 0; i < objetos3D.length; i++) {

        totalX += objetos3D[i].posicion[0];
        totalY += objetos3D[i].posicion[1];

        if (objetos3D[i].posicion[0] >= 3) {
            console.log(`${objetos3D[i].nombre}: Está a la derecha.`);
        } else {
            console.log(`${objetos3D[i].nombre}: Está a la izquierda.`);
        }
    }

    console.log("------------------");
    console.log("Total eje X:", totalX);
    console.log("Total eje Y:", totalY);
}

mostrarPosiciones(objetos3D);