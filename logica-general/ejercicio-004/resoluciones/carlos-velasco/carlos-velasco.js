const filtrarInventario = (inventario) => {
    return inventario.map(moto => {
        let clasificacion = "";
        
        if (moto.kilometraje > 10000) {
            clasificacion = "Mantenimiento requerido";
        } else if (moto.estado === "disponible") {
            clasificacion = "Lista para venta";
        } else {
            clasificacion = "Revisión general";
        }
        
        return { modelo: moto.modelo, clasificacion };
    });
};

const motos = [
    { modelo: "Yamaha MT-07", kilometraje: 12000, estado: "disponible" },
    { modelo: "Honda CB500", kilometraje: 5000, estado: "disponible" }
];

console.table(filtrarInventario(motos));