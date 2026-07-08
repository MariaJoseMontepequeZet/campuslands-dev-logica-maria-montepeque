const torneoDeportivo = [
    { nombre: "Los Tigres", puntos: 12 },
    { nombre: "Los Leones", puntos: 8 },
    { nombre: "Real Mixco", puntos: 15 },
    { nombre: "Atléticos", puntos: 10 },
    { nombre: "Guerreros", puntos: 5 }
];

function promedioYMediana(equipos) {

    if (!equipos || equipos.length === 0) {
        console.log("No hay equipos registrados.");
        return;
    }

    let sumaPuntos = 0;

    for (let i = 0; i < equipos.length; i++) {
        sumaPuntos += equipos[i].puntos;
    }

    let promedio = sumaPuntos / equipos.length;

    let puntos = [];

    for (let i = 0; i < equipos.length; i++) {
        puntos.push(equipos[i].puntos);
    }

    puntos.sort((a, b) => a - b);

    let mediana;

    if (puntos.length % 2 === 0) {
        let mitad = puntos.length / 2;
        mediana = (puntos[mitad - 1] + puntos[mitad]) / 2;
    } else {
        let mitad = Math.floor(puntos.length / 2);
        mediana = puntos[mitad];
    }

    console.log("Promedio de puntos:", promedio.toFixed(2));
    console.log("Mediana de puntos:", mediana);

}

promedioYMediana(torneoDeportivo);