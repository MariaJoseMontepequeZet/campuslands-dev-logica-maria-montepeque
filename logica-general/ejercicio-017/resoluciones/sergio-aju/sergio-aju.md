# Plantilla de solucion

## Analisis

- **Entrada:** Variables de perfil de usuario y tipo de proyecto arquitectónico.
- **Proceso:** Evaluación basada en una tabla de decisión lógica que cruza los permisos según el perfil y la naturaleza del trabajo.
- **Salida:** Licencia de software recomendada para el usuario.

## Reglas identificadas

1. **Estudiante:** Acceso universal a software educativo gratuito.
2. **Profesional:** Acceso especializado (SketchUp para residencial, Revit para industrial).
3. **Empresa:** Acceso total a la suite corporativa (AutoCAD + 3ds Max).

## Pruebas

### Caso normal

**Entrada:** `perfil = 'profesional', tipoProyecto = 'residencial'`

**Resultado esperado:** `Software permitido: SketchUp Pro. Ideal para modelado rápido.`

### Caso borde

**Entrada:** `perfil = 'estudiante', tipoProyecto = 'industrial'`

**Resultado esperado:** `Software permitido: Blender (Versión Educativa). Sin costo.`

## Explicacion final

La solución emplea una estructura jerárquica de decisión. Al priorizar el perfil del usuario, reducimos la complejidad del algoritmo y garantizamos que las reglas de negocio sean fáciles de interpretar y auditar. Este enfoque asegura que el sistema sea robusto ante nuevas reglas comerciales.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para una futura escalabilidad, sugiero implementar un sistema de búsqueda en un objeto o Map, eliminando por completo la dependencia de los condicionales anidados.