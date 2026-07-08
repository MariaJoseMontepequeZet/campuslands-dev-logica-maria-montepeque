    const taller_mecanico = [
    { cliente: "Juan",
        vehiculo: "Moto",
        prioridad: "Alta"
    },
    { cliente: "Marta",
        vehiculo: "Carro",
        prioridad: "Media"
    },
    { cliente: "Maria",
        vehiculo: "Bus",
        prioridad: "Alta"
    },
    ];


    function orden_prioridad (lista_clientes){
    
    let altaPrioridad = [];
    let mediaPrioridad = [];
    let bajaPrioridad = [];
    
    lista_clientes.forEach((vehiculo) => {
        if (vehiculo.prioridad === "Alta") {
        altaPrioridad.push(vehiculo.cliente);
        } else if (vehiculo.prioridad === "Media") {
        mediaPrioridad.push(vehiculo.cliente);
        } else if (vehiculo.prioridad === "Baja") {
        bajaPrioridad.push(vehiculo.cliente);
        } else {
        console.log("No hay cliente en el taller")
        }
    });
    
    console.log(`Clientes de mayor prioridad: ${altaPrioridad.join(", ")}`);
    console.log(`Clientes de media prioridad: ${mediaPrioridad.join(", ")}`);
    console.log(`Clientes de baja prioridad: ${bajaPrioridad.join(", ")}`);

    }


    orden_prioridad(taller_mecanico)