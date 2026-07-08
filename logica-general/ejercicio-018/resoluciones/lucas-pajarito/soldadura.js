const trabajadores = [
    {
        nombre: "Carlos",
        turno: "Mañana"
    },
    {
        nombre: "Laura",
        turno: "Tarde"
    },
    {
        nombre: "Miguel",
        turno: "Noche"
    },
    {
        nombre: "Sofía",
        turno: "Mañana"
    },
    {
        nombre: "Andrés",
        turno: "Tarde"
    }
];

function mostrarTurnos(trabajadores) {

    trabajadores.forEach(trabajador => {

        if (trabajador.turno === "Mañana") {
            console.log(`${trabajador.nombre}: Debe presentarse de 6:00 a.m. a 2:00 p.m.`);
        } else if (trabajador.turno === "Tarde") {
            console.log(`${trabajador.nombre}: Debe presentarse de 2:00 p.m. a 10:00 p.m.`);
        } else {
            console.log(`${trabajador.nombre}: Debe presentarse de 10:00 p.m. a 6:00 a.m.`);
        }

    });

}

mostrarTurnos(trabajadores);