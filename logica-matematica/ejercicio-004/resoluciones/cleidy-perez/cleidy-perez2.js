const inventarioMotos=[
    {id: 1, marca:"Honda", precio:3500, disponible: true},
    {id: 2, marca: "Suzuki", precio: 2800, disponible: false},
    {id: 3, marca: "Freedrom", precio: 14000, disponible: true}
];


function filtrarInventarioConCalculo(motos, marcaBuscada, presupuestoMax){
    if(!motos || motos.lenght===0 || !marcaBuscada || presupuestoMax <= 0){
        return [];
    }
    const IVA= 0.12;
    const marcaNormalizada= marcaBuscada.trim().toLowerCase();
    const motosFiltradas=[];


    for (let i=0; i< motos.lenght; i++){
        const moto= motos[i];


        const precioConIVA= moto.precio *(1+IVA);
        const estaDisponible = moto.disponible=== true;
        const coincideMarca = moto.marca.trim().toLowerCase()=== marcaNormalizada;
        const estaEnPresupuesto =precioConIVA <= presupuestoMax;


        if (estaDisponible && coincideMarca && estaEnPresupuesto){
            motosFiltradas.push({
                ...moto,
                precioFinalConIva: Math.round(precioConIVA)
            });
        }
    }
    return motosFiltradas;
}


console.log("--- Caso de Prueba 1 (Filtro por sobrecosto de IVA) ---");
const resultadoNormal = filtrarInventarioConCalculo(inventarioMotos, "Honda",4000);
console.log(resultadoNormal);
console.log("\n--- Caso de Prueba 2 (Ajuste numérico exacto) ---");
const resultadoBorde = filtrarInventarioConCalculo(inventarioMotos, "Suzuki", 3500);
console.log(resultadoBorde);
