# Plantilla de solucion

## Analisis

- **Entrada:** Un string `uso` que define el destino del dibujo digital ("impresion" o "web").
- **Proceso:** Se utiliza una estructura de control para evaluar el destino y asignar automáticamente las especificaciones técnicas (formato y DPI) correctas según estándares de diseño.
- **Salida:** Un objeto con las configuraciones recomendadas (formato, dpi) o un mensaje de error si el destino no es válido.

## Reglas identificadas

1. **Regla de Impresión:** Requiere alta resolución (300 DPI) para evitar pixelación en papel, usando formato PDF.
2. **Regla Web:** Requiere baja resolución (72 DPI) para carga rápida en navegadores, usando formato PNG.
3. **Validación de Datos:** Si el destino no coincide con las opciones permitidas, el sistema debe informar el error.

## Pruebas

### Caso normal

**Entrada:** `uso: "impresion"`

**Resultado esperado:**
```json
{
  "formato": "PDF",
  "dpi": 300,
  "motivo": "Alta calidad para medios físicos."
}