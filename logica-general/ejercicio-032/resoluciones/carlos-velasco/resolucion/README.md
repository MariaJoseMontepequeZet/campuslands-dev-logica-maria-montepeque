# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `raquetas` (objetos con `modelo`, `tipo`, `desgaste`) y un `estilo` (string: "defensivo" o "agresivo").
* **Proceso**: Filtrado de raquetas con desgaste aceptable ($\le 80$), selección según afinidad de estilo ("control" o "potencia"), y uso de un algoritmo de selección por desgaste mínimo como opción de respaldo.
* **Salida**: Un objeto con el `modelo` recomendado y la `razon` de la recomendación.

## Reglas identificadas

1. Solo se pueden recomendar raquetas con un nivel de desgaste menor o igual a 80.
2. Si el estilo es "defensivo", se debe priorizar una raqueta de tipo "control"; si es "agresivo", se debe priorizar "potencia".
3. Si no existe una raqueta del tipo preferido entre las disponibles, se selecciona la raqueta con el menor desgaste de todo el stock filtrado.

## Pruebas

### Caso normal

* **Entrada**: `raquetas: [stock], estilo: "defensivo"`
* **Resultado esperado**: `{ modelo: "ProControl", razon: "Recomendada para estilo defensivo." }`

### Caso borde

* **Entrada**: `raquetas: [stock], estilo: "agresivo"`
* **Resultado esperado**: `{ modelo: "AllRounder", razon: "Recomendada para estilo agresivo." }`

## Explicacion final

La solución es efectiva debido a su enfoque de priorización escalonada. Primero, garantiza la seguridad del jugador al descartar equipo en mal estado mediante el método `filter`. Luego, intenta satisfacer la preferencia técnica del usuario; si esto no es posible, emplea el método `reduce` para hallar la mejor alternativa funcional disponible, asegurando que el jugador nunca se quede sin equipo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Filtro)**: `raquetas.filter(r => r.desgaste <= 80)`
* **Regla 2 (Asignación)**: `estilo === "defensivo" ? "control" : "potencia"`
* **Regla 3 (Fallback)**: `current.desgaste < min.desgaste ? current : min`