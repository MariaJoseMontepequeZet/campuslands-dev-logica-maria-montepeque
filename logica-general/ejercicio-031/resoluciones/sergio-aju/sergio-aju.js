
function organizarEvento(listaTareas) {
    if (!listaTareas || listaTareas.length === 0) {
        return "No hay tareas por procesar.";
    }
    if (listaTareas.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    } 
    else if (listaTareas.includes("pendiente")) {
        return {
            accion: "revisar pendiente",
            motivo: "los pendientes son el siguiente paso administrativo."
        };
    } 
    else if (listaTareas.every(t => t === "aprobado")) {
        return {
            accion: "iniciar combate",
            motivo: "todos los estados están aprobados."
        };
    }
}

console.log(organizarEvento(["aprobado", "pendiente", "bloqueado"])); 
console.log(organizarEvento(["aprobado", "aprobado"]));