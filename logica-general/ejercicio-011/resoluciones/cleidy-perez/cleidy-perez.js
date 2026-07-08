const peleadoresDeKickboxing=["Juan", "Ana", "Angel", "Norma"];
peleadoresDeKickboxing.sort();

let total=0;

console.log("Lista organizada:");
peleadoresDeKickboxing.forEach((nombre, i)=>{
    console.log(`${i+1}.${nombre}`);
    total++; 
});

//prueba normal
console.log("Total de peleadores:", total)
console.log("\nCaso Normal: ", ["Juan", "Ana", "Angel", "Norma"].sort());

// caso borde

const listaVacia =[];
if (listaVacia.lenght===0){
    console.log("\nCaso de borde: no hay plealeadores en la lista")
}