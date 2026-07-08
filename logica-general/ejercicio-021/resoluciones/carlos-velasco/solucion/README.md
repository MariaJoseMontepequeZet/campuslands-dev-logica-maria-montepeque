# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `jugador` que contiene `mmr` (número), `reportes` (entero) y `esVeterano` (booleano).
* **Proceso**: Evaluación prioritaria de conducta (suspensión), clasificación base por rango de MMR, y aplicación de una regla especial de promoción para veteranos.
* **Salida**: Un objeto que define el `rango` final y un `motivo` explicativo detallando la clasificación.

## Reglas identificadas

1. Si los `reportes` son mayores a 5, el jugador es inmediatamente "Suspendido".
2. La clasificación base depende del MMR: >= 3000 (Élite), >= 1500 (Avanzado), de lo contrario (Principiante).
3. Si un jugador es "Veterano" y su nivel base es "Avanzado", se le promueve a "Nivel Élite (Veterano Promovido)".

## Pruebas

### Caso normal

* **Entrada**: `{ mmr: 2000, reportes: 2, esVeterano: true }`
* **Resultado esperado**: `{ rango: "Nivel Élite (Veterano Promovido)", motivo: "Clasificado por MMR 2000 con estatus de veterano." }`

### Caso borde

* **Entrada**: `{ mmr: 1000, reportes: 10, esVeterano: false }`
* **Resultado esperado**: `{ rango: "Suspendido", motivo: "Exceso de reportes por conducta antideportiva." }`

## Explicacion final

La solución funciona utilizando el patrón de *Guard Clause* (cláusula de guarda) al inicio, lo cual garantiza que las cuentas con mal historial sean procesadas instantáneamente, evitando cálculos innecesarios. La jerarquía de los condicionales `if-else` permite una clasificación clara, mientras que la última condición actúa como un "modificador de estado" que premia la lealtad (veteranía), logrando así un sistema de rangos flexible que responde correctamente a múltiples variables del perfil del usuario.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Conducta)**: `jugador.reportes > 5`
* **Regla 2 (Clasificación base)**: `mmr >= 3000` (Élite), `mmr >= 1500` (Avanzado), `else` (Principiante).
* **Regla 3 (Promoción)**: `jugador.esVeterano && nivel === "Nivel Avanzado"`