let participantes = [12, 18, 25, 30];
let bono = 8;
let penalizacion = 3;

let mayor = participantes[0];

for (let i = 1; i < participantes.length; i++) {
    if (participantes[i] > mayor) {
        mayor = participantes[i];
    }
}

let puntaje_final = mayor + bono - penalizacion;

let clasificacion = "";

if (puntaje_final >= 25) {
    clasificacion = "competitivo";
} else {
    clasificacion = "basico";
}

let explicacion = "se sumo el bono y se resto la penalizacion segun las reglas.";

console.log("puntaje_final:", puntaje_final);
console.log("clasificacion:", clasificacion);
console.log("explicacion:", explicacion);