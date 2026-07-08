# Plantilla de solución

## Analisis

* **Entrada**: `altura` (número), `material` (string) y `esEstructural` (booleano).
* **Proceso**: Evaluación condicional de seguridad para determinar si la estructura es estable, apta para carga o requiere refuerzo adicional.
* **Salida**: Un objeto que define el `estado` del muro (Rechazado, Requerimiento o Aprobado) y un `motivo` explicativo.

## Reglas identificadas

1. Muros de madera con altura mayor a 3 metros son inestables.
2. Materiales de vidrio no están permitidos en estructuras con carga (`esEstructural: true`).
3. Muros de concreto con altura superior a 10 metros requieren refuerzo extra.

## Pruebas

### Caso normal

* **Entrada**: `altura: 12, material: "concreto", esEstructural: false`
* **Resultado esperado**: `{ estado: "Requerimiento", motivo: "Requiere refuerzo extra" }`

### Caso borde

* **Entrada**: `altura: 4, material: "madera", esEstructural: false`
* **Resultado esperado**: `{ estado: "Rechazado", motivo: "Inestable" }`

## Explicacion final

La solución funciona mediante una jerarquía de validaciones que filtra los riesgos antes de validar la conformidad del muro. Al utilizar retornos anticipados, el algoritmo detiene la ejecución ante cualquier condición insegura, asegurando que solo los muros que cumplen estrictamente con las normas de seguridad pasen a la etapa de aprobación.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1**: `material === "madera" && altura > 3`.
* **Regla 2**: `esEstructural && material === "vidrio"`.
* **Regla 3**: `material === "concreto" && altura > 10`.