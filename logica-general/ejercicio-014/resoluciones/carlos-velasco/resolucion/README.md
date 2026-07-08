# Plantilla de solución

## Analisis

* **Entrada**: Dos objetos: `cliente` (contiene estado de salud y experiencia) y `diseño` (contiene requerimientos técnicos).
* **Proceso**: Evaluación de condiciones de seguridad y compatibilidad mediante una serie de cláusulas de guardia que validan riesgos contra la salud y requisitos del diseño.
* **Salida**: Un objeto que indica la `accion` (Aprobada, Cancelada, o Consulta requerida) y un `motivo` que explica la decisión.

## Reglas identificadas

1. Si el cliente tiene alergias o piel irritada, la sesión se cancela inmediatamente por riesgo de salud.
2. Si el diseño requiere color y el cliente es alérgico a los pigmentos, la sesión se cancela por contraindicación.
3. Si el diseño es complejo y el cliente es primerizo, se requiere una consulta previa antes de proceder.

## Pruebas

### Caso normal

* **Entrada**: `cliente: { tieneAlergias: false, pielIrritada: false, esPrimerizo: false }, diseño: { requiereColor: true, esComplejo: false }`
* **Resultado esperado**: `{ accion: "Aprobada", motivo: "Diagnóstico favorable para iniciar la sesión." }`

### Caso borde

* **Entrada**: `cliente: { tieneAlergias: true, pielIrritada: false }, diseño: { requiereColor: false }`
* **Resultado esperado**: `{ accion: "Cancelada", motivo: "Riesgo de salud detectado (alergias o piel irritada)." }`

## Explicacion final

La solución funciona mediante una **evaluación jerárquica de riesgos**. Al utilizar cláusulas de guardia, el código prioriza los problemas de salud más críticos (alergias/irritación) antes de analizar la viabilidad técnica del diseño. Esto asegura que no se pierda tiempo evaluando un diseño si la seguridad física del cliente ya ha sido comprometida, devolviendo una respuesta clara y estructurada para cada escenario posible.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Salud)**: `cliente.tieneAlergias || cliente.pielIrritada`
* **Regla 2 (Pigmentos)**: `diseño.requiereColor && cliente.alergiaPigmentos`
* **Regla 3 (Complejidad)**: `diseño.esComplejo && cliente.esPrimerizo`