let partidosJugados = 20;
let partidosGanados = 15;

let porcentajeVictorias = (partidosGanados / partidosJugados) * 100;

let categoria = "";

if (porcentajeVictorias >= 70) {
    categoria = "alto rendimiento";
} else {
    categoria = "en desarrollo";
}

let explicacion = "se calculo el porcentaje de victorias respecto a los partidos jugados.";

console.log("porcentaje_victorias:", porcentajeVictorias);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);