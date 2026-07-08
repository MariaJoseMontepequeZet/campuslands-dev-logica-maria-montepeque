# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `jugador` que contiene `nombre`, `edad` (número), `tieneLesion` (booleano) y `tarjetasRojas` (entero).
* **Proceso**: Evaluación de múltiples criterios de elegibilidad (salud, edad y disciplina) mediante el patrón de *Guard Clauses* para determinar la aptitud del jugador.
* **Salida**: Un objeto que muestra el `estado` (Aprobado/Rechazado) y un `motivo` que explica la decisión tomada.

## Reglas identificadas

1. Si el jugador `tieneLesion` es verdadero, es rechazado automáticamente.
2. Si el jugador es menor de 18 años (`edad < 18`), es rechazado.
3. Si el jugador acumula 3 o más `tarjetasRojas`, es rechazado por inhabilitación.

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "Juan", edad: 25, tieneLesion: false, tarjetasRojas: 1 }`
* **Resultado esperado**: `{ estado: "Aprobado", motivo: "Jugador apto para el torneo." }`

### Caso borde

* **Entrada**: `{ nombre: "Pedro", edad: 17, tieneLesion: false, tarjetasRojas: 0 }`
* **Resultado esperado**: `{ estado: "Rechazado", motivo: "Menor de edad, requiere autorización de tutor." }`

## Explicacion final

La solución funciona mediante la implementación de *Guard Clauses* (cláusulas de guarda), que priorizan las condiciones de exclusión antes de aprobar cualquier solicitud. Al evaluar las reglas de forma secuencial y retornar inmediatamente tras detectar un incumplimiento, se elimina la necesidad de estructuras condicionales anidadas. Esto no solo hace que el código sea más legible y fácil de mantener, sino que también asegura que el proceso de validación sea robusto, eficiente y escalable para futuras reglas adicionales del torneo.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Salud)**: `jugador.tieneLesion === true`
* **Regla 2 (Edad)**: `jugador.edad < 18`
* **Regla 3 (Disciplina)**: `jugador.tarjetasRojas >= 3`