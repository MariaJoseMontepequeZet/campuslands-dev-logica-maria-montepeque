# Evaluador de Tablas de Decisión - Arquitectura 3D (Python)

Este proyecto implementa un script en Python diseñado para automatizar la toma de decisiones operativas y la asignación de recursos en proyectos de arquitectura 3D, utilizando una estructura lógica basada en Tablas de Decisión.

## Características

* **Automatización de Reglas:** Transforma matrices de decisión complejas en código limpio mediante condicionales anidados y lógicos (`and`).
* **Asignación Eficiente:** Evalúa simultáneamente el área de desarrollo (Estructuras, Paisajismo, etc.) junto con el puntaje de complejidad técnica del modelo 3D.
* **Acciones Deterministas:** Asegura que cada combinación de variables ejecute un plan de acción único y estandarizado.

## Tabla de Decisión Implementada

| Regla | Equipo (Condición) | Puntos / Complejidad (Condición) | Acción Asignada |
| :--- | :--- | :--- | :--- |
| **R1** | Estructuras | $\ge 70$ | Ingeniero Senior + Revisión Sísmica |
| **R2** | Estructuras | $< 70$ | Ingeniero Junior + Revisión Estándar |
| **R3** | Paisajismo | $\ge 50$ | Coordinación Ambiental + Render 3D |
| **Cualquier otra** | Cualquiera | Cualquiera | Planificación Estándar + Validar Proveedores |

## Estructura de Datos de los Objetos

Cada propuesta arquitectónica se representa como un diccionario con la siguiente sintaxis estricta:

```python
{
  "nombre": "Torre_Residencial",
  "equipo": "Estructuras",
  "puntos": 85,
}