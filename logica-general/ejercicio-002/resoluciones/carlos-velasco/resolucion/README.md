# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `partido` que contiene los atributos `golesFavor` (number), `golesContra` (number) y `tarjetasRojas` (number).
* **Proceso**: Evaluación de reglas de negocio mediante validaciones iniciales, seguida de un cálculo de resultado deportivo (Victoria, Empate o Derrota) utilizando operadores ternarios.
* **Salida**: Un *string* que confirma la aceptación del registro (incluyendo el resultado) o indica el motivo del rechazo.

## Reglas identificadas

1. El registro es rechazado si los `golesFavor` o `golesContra` son números negativos.
2. El registro es rechazado si el número de `tarjetasRojas` es estrictamente mayor a 3.
3. Si es aceptado, se define como "Victoria" si los goles a favor son mayores, "Empate" si son iguales, o "Derrota" si son menores.

## Pruebas

### Caso normal

* **Entrada**: `{ golesFavor: 3, golesContra: 1, tarjetasRojas: 0 }`
* **Resultado esperado**: `"Registro aceptado: Victoria con 3-1."`

### Caso borde

* **Entrada**: `{ golesFavor: -1, golesContra: 2, tarjetasRojas: 0 }`
* **Resultado esperado**: `"Registro rechazado: Los goles no pueden ser negativos."`

## Explicacion final

La solución funciona mediante el uso de **guardas de validación**, que permiten filtrar datos inválidos antes de realizar cualquier cálculo. Al validar los casos de error primero, el código se vuelve más robusto y eficiente. Posteriormente, la lógica de comparación de resultados se simplifica utilizando una estructura ternaria anidada, lo que permite categorizar el desempeño del equipo de manera concisa.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Goles negativos)**: `golesFavor < 0 || golesContra < 0`
* **Regla 2 (Exceso de rojas)**: `tarjetasRojas > 3`
* **Regla 3 (Victoria)**: `golesFavor > golesContra`
* **Regla 4 (Empate)**: `golesFavor === golesContra`
* **Regla 5 (Derrota)**: `golesFavor < golesContra`