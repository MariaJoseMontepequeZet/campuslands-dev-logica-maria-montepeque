# Plantilla de solucion

## Autor:

Sergio Ajú

## Analisis

- **Entrada:** Un arreglo de números (`precios`) que representa el costo de diferentes modelos de motos.
- **Proceso:** Utilizamos funciones nativas para identificar el valor más alto (`Math.max`) y el más bajo (`Math.min`). Luego, restamos el mínimo al máximo para obtener el rango.
- **Salida:** Un objeto con el valor máximo, el mínimo y el rango total de precios.

## Reglas identificadas

1. **Identificación de Máximos:** El valor más alto determina el modelo premium o más caro del inventario.
2. **Identificación de Mínimos:** El valor más bajo determina el modelo de entrada o más económico.
3. **Cálculo de Rango:** La dispersión de precios ($R = V_{max} - V_{min}$) nos indica qué tan amplio es el espectro de precios del concesionario.

## Pruebas

### Caso normal

**Entrada:** `[1500, 3200, 4500, 2100]`

**Resultado esperado:**
```json
{
  "maximo": 4500,
  "minimo": 1500,
  "rango": 3000
}