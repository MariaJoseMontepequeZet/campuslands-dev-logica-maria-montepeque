const inventarioMotos =[
    {id: 1, marca: "honda", modelo: "CB 190R",  precio: 12000,  disponible: true},
    {id: 2, marca: "Suzuki", modelo: "200C", precio: 13000, disponible: true},
    {id: 3, marca: "Yamaha", modelo: "Wave", precio: 23990, disponible: false}
];

function filtrarInventario(motos, marcaBuscada, presupuestoMaximo){
    if(!motos || motos.lenght === 0 || !marcaBuscada || presupuestoMaximo <= 0){
        return [];
    }

    const marcaNormalizada= marcaBuscada.trim().toLowerCase();
    const motosFiltradas=[];

    for (let i= 0; i < motos.length; i++){
        const moto= motos[i];

        const estaDisponible= moto.disponible=== true;
        const coincideMarca = moto.marca.trim().toLowerCase()===marcaNormalizada;
        const estaEnPresupuesto= moto.precio<= presupuestoMaximo;

        if(estaDisponible && coincideMarca && estaEnPresupuesto){
            motosFiltradas.push(moto);
        }
    }
    return motosFiltradas;
}

console.log("--- Caso de Prueba Normal ---");
const resultadoNormal = filtrarInventario(inventarioMotos, "honda", 12000);
console.log(resultadoNormal);

console.log("\n--- Caso de Prueba Borde ---");
const resultadoBorde = filtrarInventario(inventarioMotos, "ACES", 10000);
console.log(resultadoBorde);