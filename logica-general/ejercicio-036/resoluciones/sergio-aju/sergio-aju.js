function verificarCoordenada(x, y) {
    const tamanoMatriz = 3; 

    if (x >= 0 && x < tamanoMatriz && y >= 0 && y < tamanoMatriz) {
        return { visible: true, mensaje: "El objeto está dentro del frame." };
    } else {
        return { visible: false, mensaje: "Objeto fuera de cámara." };
    }
}
console.log(verificarCoordenada(1, 1)); 
console.log(verificarCoordenada(5, 0)); 