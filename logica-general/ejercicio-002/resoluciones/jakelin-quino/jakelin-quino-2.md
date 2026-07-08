# Analisis

- **Entrada:** `goles_favor` (int), `goles_contra` (int).
- **Proceso:** 1. Validar que las entradas sean números enteros no negativos. 2. Comparar los valores para asignar puntos según la normativa de fútbol sala.
- **Salida:** Un diccionario con el `estado` de la validación, el `resultado` y los `puntos` obtenidos.

## Reglas aplicadas

1. **Integridad de Datos:** Los goles deben ser números naturales (>= 0).
2. **Sistema de Puntuación:** Victoria otorga 3 puntos, empate 1, derrota 0.

## Pruebas

### Caso normal
- **Entrada:** 3 goles a favor, 1 en contra.
- **Resultado:** Victoria, 3 puntos.

### Caso borde
- **Entrada:** -1 gol a favor, 2 en contra.
- **Resultado:** Estado: "Invalido", motivo: "Los goles no pueden ser negativos."

## Explicacion final

Al verificar si los datos son negativos antes de realizar cualquier cálculo, evitamos errores lógicos en el sistema de ranking. Es una práctica estándar para mantener la calidad de datos en bases de datos deportivas.