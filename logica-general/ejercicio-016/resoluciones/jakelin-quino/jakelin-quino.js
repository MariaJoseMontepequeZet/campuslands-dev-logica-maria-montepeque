function verificarLimites(coordenadas, limiteMax) {
    for (let i = 0; i < coordenadas.length; i++) {
        if (coordenadas[i] < 0 || coordenadas[i] > limiteMax) {
            return { dentro: false, mensaje: `Error: Objeto fuera de límites en eje ${i}` };
        }
    }
    return { dentro: true, mensaje: "Objeto dentro del área de renderizado." };
}

const posicionObjeto = [10, 5, 20];
console.log(verificarLimites(posicionObjeto, 50));
console.log(verificarLimites([60, 5, 20], 50));