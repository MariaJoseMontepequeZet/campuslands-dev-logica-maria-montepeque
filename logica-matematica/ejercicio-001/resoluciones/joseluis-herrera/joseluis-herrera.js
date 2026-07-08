const puntuaje_base = 22;
const bono = 8;
const penalizacion = 3;

const puntuaje_final = puntuaje_base + bono - penalizacion; 

let clasificacion = ""; 

if (puntuaje_final >= 25 ){
  clasificacion = "competitivo";
}else {
  clasificacion = "principiante";
}

console.log("Puntaje Final:", puntuaje_final);
console.log("Clasificación:", clasificacion);
