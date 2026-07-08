# Analisis

- **Entrada:** `titulo` (string), `duracion` (int), `volumen` (int).
- **Proceso:** Se aplican filtros de validación secuenciales para verificar que los datos numéricos estén dentro de los límites lógicos de una pista musical.
- **Salida:** Un diccionario que indica si la canción es `valida` y un `motivo` de la decisión.

## Reglas aplicadas

1. **Regla de Tiempo:** Una canción debe tener una duración estrictamente positiva.
2. **Regla de Nivel de Sonido:** El volumen debe estar normalizado entre 0 y 100.

## Pruebas

### Caso normal
- **Entrada:** "Bohemian Rhapsody", 354, 80
- **Resultado:** {"valido": True, "motivo": "Canción 'Bohemian Rhapsody' correcta."}

### Caso borde
- **Entrada:** "Canción Silenciosa", -10, 50
- **Resultado:** {"valido": False, "motivo": "Duración inválida: debe ser mayor a 0."}

## Explicacion final

He utilizado **validaciones de guardia (Guard Clauses)**. Si detectamos un error, retornamos inmediatamente el problema, lo que evita que el programa siga procesando datos corruptos o inválidos.