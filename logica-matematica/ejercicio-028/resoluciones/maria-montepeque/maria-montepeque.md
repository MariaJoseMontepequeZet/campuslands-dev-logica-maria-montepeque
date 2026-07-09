# Patrones de Puntuación - Ciencia Ficción (Ejercicio 028)

## Análisis
- **Entrada**: Lista de puntajes base, valor de bono y valor de penalización.
- **Proceso**:
    1. Validar que la lista no esté vacía.
    2. Aplicar ajustes mediante iteración (`map`).
    3. Calcular el promedio de los resultados ajustados.
    4. Clasificar según el umbral de 20.
- **Salida**: Objeto con promedio, clasificación y descripción.

## Reglas identificadas
1. **Puntajes > 20**: Se suma el bono al valor original.
2. **Puntajes < 15**: Se resta la penalización al valor original.
3. **Puntajes entre 15 y 20**: Se mantienen sin cambios.
4. **Clasificación**: `competitivo` si el promedio es > 20, de lo contrario `estándar`.

## Pruebas
### Caso Normal
- **Entrada**: `[12, 18, 25, 30]`, Bono: `8`, Penalización: `3`
- **Resultado**: `puntaje_final: 24.50`, `clasificacion: "competitivo"`

### Caso Borde
- **Entrada**: `[]`
- **Resultado**: `"Error: No hay datos de participantes."`

## Explicación Final
La solución utiliza programación funcional (`map`, `reduce`) para garantizar la inmutabilidad de los datos originales. La lógica es lineal y robusta frente a los cambios en los umbrales de puntuación.