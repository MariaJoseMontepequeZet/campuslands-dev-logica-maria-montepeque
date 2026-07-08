/**
 * SISTEMA DE GESTIÓN DE LICENCIAS - ARQUITECTURA 3D
 * Determina el software permitido usando una tabla de decisión lógica.
 */

function validarLicencia(perfil, tipoProyecto) {


    if (perfil === 'estudiante') {
        return "Software permitido: Blender (Versión Educativa). Sin costo.";
    } 
    
    if (perfil === 'profesional') {
        if (tipoProyecto === 'residencial') {
            return "Software permitido: SketchUp Pro. Ideal para modelado rápido.";
        } else {
            return "Software permitido: Revit (Licencia Pro). Requiere especificaciones industriales.";
        }
    }

    if (perfil === 'empresa') {
        return "Software permitido: AutoCAD + 3ds Max Suite Completa. Uso corporativo.";
    }

    return "Error: Perfil no reconocido en la base de datos.";
}

// --- Pruebas del sistema ---

// Caso normal: Profesional residencial
console.log("Prueba 1 (Profesional):", validarLicencia('profesional', 'residencial'));

// Caso borde: Estudiante (la tabla de decisión lo simplifica)
console.log("Prueba 2 (Estudiante):", validarLicencia('estudiante', 'industrial'));