# Análisis de Películas de Miedo - Ejercicio 029

## Análisis
- **Entrada**: Un arreglo de números enteros que representan el "nivel de miedo" de diferentes películas.
- **Proceso**: Aplicar una estructura condicional utilizando el operador módulo (`%`) para clasificar cada película.
- **Salida**: Un arreglo de objetos con el puntaje original y su categoría asignada.

## Reglas identificadas
1. **Terror Puro**: Puntajes divisibles por 3 (`p % 3 === 0`).
2. **Suspenso**: Puntajes pares que no cumplen la regla anterior (`p % 2 === 0`).
3. **Clásico**: Todos los demás puntajes.

## Pruebas
### Caso Normal
- **Entrada**: `[3, 4, 5, 6, 9]`
- **Resultado esperado**: 
    - 3 -> Terror Puro
    - 4 -> Suspenso
    - 5 -> Clásico
    - 6 -> Terror Puro
    - 9 -> Terror Puro

### Caso Borde
- **Entrada**: `[]`
- **Resultado esperado**: `"No hay datos."`

## Explicación Final
La solución funciona al evaluar la divisibilidad de cada número. El orden de las condiciones es vital: si evaluamos primero `p % 3`, capturamos correctamente los múltiplos de 3 antes de que la condición de paridad (`p % 2`) interfiera.