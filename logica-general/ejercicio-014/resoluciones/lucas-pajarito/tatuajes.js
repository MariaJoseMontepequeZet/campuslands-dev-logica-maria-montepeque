const tatuajes = [
    {
        cliente: "Carlos",
        diseño: "Dragón",
        tintaDisponible: true,
        maquinaFuncionando: true
    },
    {
        cliente: "Laura",
        diseño: "Rosa",
        tintaDisponible: false,
        maquinaFuncionando: true
    },
    {
        cliente: "Miguel",
        diseño: "Lobo",
        tintaDisponible: true,
        maquinaFuncionando: false
    },
    {
        cliente: "Sofía",
        diseño: "Mariposa",
        tintaDisponible: true,
        maquinaFuncionando: true
    },
    {
        cliente: "Andrés",
        diseño: "Calavera",
        tintaDisponible: false,
        maquinaFuncionando: false
    }
];

function diagnosticarTatuajes(tatuajes) {

    tatuajes.forEach(tatuaje => {

        if (!tatuaje.tintaDisponible) {
            console.log(`${tatuaje.cliente}: Error - No hay tinta disponible.`);
        } else if (!tatuaje.maquinaFuncionando) {
            console.log(`${tatuaje.cliente}: Error - La máquina de tatuar presenta una falla.`);
        } else {
            console.log(`${tatuaje.cliente}: Todo listo para realizar el tatuaje.`);
        }

    });

}

diagnosticarTatuajes(tatuajes);