const recomendarRaqueta = (raquetas, estilo) => {
    const disponibles = raquetas.filter(r => r.desgaste <= 80);
    if (disponibles.length === 0) return "Sin raquetas disponibles.";

    const tipoPreferido = estilo === "defensivo" ? "control" : "potencia";

    let opcion = disponibles.find(r => r.tipo === tipoPreferido);
    if (!opcion) {
        opcion = disponibles.reduce((min, current) => 
            current.desgaste < min.desgaste ? current : min
        );
    }

    return { modelo: opcion.modelo, razon: `Recomendada para estilo ${estilo}.` };
};

const stock = [
    { modelo: "ProControl", tipo: "control", desgaste: 10 },
    { modelo: "PowerStrike", tipo: "potencia", desgaste: 90 },
    { modelo: "AllRounder", tipo: "velocidad", desgaste: 5 }
];

console.log(recomendarRaqueta(stock, "defensivo")); 
console.log(recomendarRaqueta(stock, "agresivo"));  