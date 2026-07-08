const dibujos = [
    {
        autor: "Carlos",
        proyecto: "Logo Empresarial",
        formato: "PNG",
        resolucion: 300
    },
    {
        autor: "Laura",
        proyecto: "Ilustración",
        formato: "JPG",
        resolucion: 150
    },
    {
        autor: "Miguel",
        proyecto: "Banner Publicitario",
        formato: "PNG",
        resolucion: 300
    },
    {
        autor: "Sofía",
        proyecto: "Portada de Revista",
        formato: "PDF",
        resolucion: 300
    },
    {
        autor: "Andrés",
        proyecto: "Tarjeta de Presentación",
        formato: "JPG",
        resolucion: 300
    }
];

function validarProyecto(dibujos) {

    dibujos.forEach(dibujo => {

        if ((dibujo.formato === "PNG" || dibujo.formato === "PDF") && dibujo.resolucion >= 300) {
            console.log(`${dibujo.proyecto}: Cumple con las reglas de publicación.`);
        } else {
            console.log(`${dibujo.proyecto}: No cumple con las reglas de publicación.`);
        }

    });

}

validarProyecto(dibujos);