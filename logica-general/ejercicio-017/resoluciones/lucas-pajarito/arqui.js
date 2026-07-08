const proyectos = [
    {
        nombre: "Casa Moderna",
        presupuesto: true,
        terrenoDisponible: true
    },
    {
        nombre: "Edificio Empresarial",
        presupuesto: true,
        terrenoDisponible: false
    },
    {
        nombre: "Centro Comercial",
        presupuesto: false,
        terrenoDisponible: true
    },
    {
        nombre: "Hotel Boutique",
        presupuesto: false,
        terrenoDisponible: false
    },
    {
        nombre: "Villa Campestre",
        presupuesto: true,
        terrenoDisponible: true
    }
];

function evaluarProyecto(proyectos) {

    proyectos.forEach(proyecto => {

        if (proyecto.presupuesto && proyecto.terrenoDisponible) {
            console.log(`${proyecto.nombre}: Proyecto aprobado para iniciar la construcción.`);
        } else if (proyecto.presupuesto && !proyecto.terrenoDisponible) {
            console.log(`${proyecto.nombre}: Esperando disponibilidad del terreno.`);
        } else if (!proyecto.presupuesto && proyecto.terrenoDisponible) {
            console.log(`${proyecto.nombre}: Se necesita aprobar el presupuesto.`);
        } else {
            console.log(`${proyecto.nombre}: Proyecto rechazado. No cumple con los requisitos.`);
        }

    });

}

evaluarProyecto(proyectos);