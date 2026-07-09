# Redondeo y Precisión - Viajes y Turismo (Ejercicio 030)

## Análisis
- **Entrada**: Un arreglo de números (`tarifas`) que representan el costo base de servicios turísticos.
- **Proceso**: 
    1. Aplicar un factor de incremento (impuesto).
    2. Asegurar la precisión decimal en cada item.
    3. Sumar los valores ya redondeados para obtener el total.
- **Salida**: Un reporte con el detalle de costos individuales y el total general.

## Reglas identificadas
1. **Validación**: Retornar error si la lista de tarifas está vacía.
2. **Precisión**: Cada costo debe redondearse estrictamente a 2 posiciones decimales.
3. **Consistencia**: El total general es la suma de los valores ya redondeados.

## Pruebas
### Caso Normal
- **Entrada**: `[100.50, 250.75]`
- **Cálculo**:
    - 100.50 * 1.16 = 116.58
    - 250.75 * 1.16 = 290.87
- **Resultado esperado**: `{ detalles: [116.58, 290.87], totalGeneral: "407.45" }`

### Caso Borde
- **Entrada**: `[]`
- **Resultado esperado**: `"No hay tarifas registradas."`

## Explicación Final
La solución garantiza que no haya "pérdida de centavos" al aplicar el redondeo en cada etapa. Se utiliza `parseFloat` junto con `toFixed(2)` para convertir el resultado (que `toFixed` devuelve como string) de vuelta a un formato numérico manejable para la suma final.