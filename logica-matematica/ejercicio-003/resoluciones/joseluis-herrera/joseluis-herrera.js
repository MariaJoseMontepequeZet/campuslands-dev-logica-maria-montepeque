const torneo_esports = [
  { equipo: "Vipers", puntos: 45 },
  { equipo: "Kraken Gaming", puntos: 12 },
  { equipo: "Phoenix Force", puntos: 28 },
  { equipo: "Cyber Dogs", puntos: 35 },
  { equipo: "Arctic Foxes", puntos: 50 }
]

function calcularPromedio(listaEquipos){
    let sumaTotal = 0;
    for (let i = 0; i < listaEquipos.length; i++){
        sumaTotal += listaEquipos[i].puntos;
    } 

    const promedio = sumaTotal / listaEquipos.length;
    return promedio;
}

function calcularMediana(listaEquipos){
    const puntos = listaEquipos.map(e => e.puntos);
    puntos.sort((a,b) => a - b);

    const cantidad = puntos.length;
    const mitad = Math.floor(cantidad / 2);

    if (cantidad % 2 !== 0){
        return puntos [mitad];
    }else { 
        return (puntos[mitad - 1] + puntos[mitad]) / 2;
    }
}



const promedioFinal = calcularPromedio(torneoEsports);
const medianaFinal = calcularMediana(torneoEsports);

console.log("=========================================");
console.log("RESULTADOS DEL TORNEO DE ESPORTS ");
console.log("=========================================");
console.log(`Promedio de puntos del torneo: ${promedioFinal}`);
console.log(`Mediana de puntos del torneo: ${medianaFinal}`);
console.log("-----------------------------------------");
