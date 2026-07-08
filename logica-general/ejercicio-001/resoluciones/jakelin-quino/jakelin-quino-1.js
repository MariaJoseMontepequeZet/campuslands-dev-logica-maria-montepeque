let items = ["aprobado", "pendiente", "bloqueado"];
let prioridad = "alta";
let regla = "revisar bloqueados primero";

if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
    console.log("accion: revisar bloqueado");
    console.log("motivo: la regla prioriza riesgos antes de tareas normales.");
} else {
    console.log("accion: revisar pendiente o flujo normal");
    console.log("motivo: no se cumple la regla de prioridad de bloqueados.");
}