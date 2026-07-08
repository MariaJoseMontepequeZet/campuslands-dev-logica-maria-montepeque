<<<<<<< HEAD
const entrada = { items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta" };

function clasificacionDePrioridades(datos) {
    // 1. Validación de caso borde (si datos es undefined o no tiene items)
    if (!datos?.items?.length) {
        return { accion: "Ninguna", motivo: "No hay items para clasificar" };
    }

    const { items, prioridad } = datos;

    // 2. Aplicación de reglas de negocio
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return { accion: "Revisar", motivo: "Hay items bloqueados con prioridad alta" };
    }
    
    // Corregido: "pendiente" en lugar de "pendientes" para que coincida con el array
    if (items.includes("pendiente")) {
        return { accion: "Revisar pendientes", motivo: "Hay items pendientes" };
    }

    return { accion: "Revisar aprobados", motivo: "Hay items aprobados" };
}

// Pruebas
console.log(clasificacionDePrioridades(entrada)); // Caso Normal
console.log(clasificacionDePrioridades());        // Caso Borde (Vacío)
=======
const entrada={
    items:["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta"
};

const salida={
    items:["aprobado", "pendiente"],
    prioridad:"alta"
}


function clasificacionDePrioridades(datos){
    const {items, prioridad}=datos;

    if (items || items.length === 0){
        return {
            accion: "Ninguna",
            motivo: "No hay items para clasificar"
        };
    }
    if (prioridad === "alta" && items.includes("bloqueado")){
        return{
            accion: "Revisar",
            motivo: "Hay items bloqueados con prioridad alta"
        };
    }
    if (items.includes("pendientes")){
        return{
            accion: "Revisar pendientes",
            motivo: "Hay items pendientes"
        };
    }
    return{
        accion: "revisar aprobados",
        motivo: "Hay items aprobados"
    };
}

console.log(clasificacionDePrioridades(entrada));
console.log(calisificacionDePrioridades())
>>>>>>> 6c900159c9c60e968af1a5f0b4d8739ef7b1c5f1
