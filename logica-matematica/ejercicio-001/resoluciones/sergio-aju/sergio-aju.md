# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de números (participantes), un valor numérico para el bono y uno para la penalización.
- **Proceso:** Sumamos todos los elementos del arreglo, añadimos el bono y restamos la penalización. Finalmente, clasificamos el resultado como "competitivo" si supera los 20 puntos, de lo contrario es "basico".
- **Salida:** Un objeto con el `puntaje_final` y la `clasificacion` obtenida.

## Reglas identificadas

1. **Cálculo Base:** El puntaje inicial es la sumatoria de todos los grupos de participantes.
2. **Ajuste:** El bono aumenta el puntaje, mientras que la penalización lo disminuye.
3. **Umbral de Competitividad:** Si el puntaje resultante es estrictamente mayor a 20, se etiqueta como "competitivo".

## Pruebas

### Caso normal

**Entrada:** 
- Participantes: `[12, 18, 25, 30]`
- Bono: `8`
- Penalización: `3`

**Resultado esperado:**
```json
{
  "puntaje_final": 90,
  "clasificacion": "competitivo"
}