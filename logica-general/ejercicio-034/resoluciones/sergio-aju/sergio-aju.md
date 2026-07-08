# Plantilla de solucion

## Autor

Sergio Ajú

## Analisis

- **Entrada:** Un objeto `insumos` que contiene tres propiedades booleanas: `agujasVencidas`, `tieneTinta`, y `tieneGuantes`.
- **Proceso:** Se evalúa la integridad de la estación bajo una jerarquía de seguridad. Se prioriza el riesgo biológico (agujas) y luego la disponibilidad de materiales (tinta/guantes).
- **Salida:** Un objeto con el `estado` (APROBADO o DETENIDO) y el `error` específico en caso de que la estación no sea apta.

## Reglas identificadas

1. **Prioridad de Seguridad:** Cualquier indicio de agujas vencidas detiene inmediatamente el proceso.
2. **Prioridad de Insumos:** Si no hay materiales básicos (tinta o guantes), la estación no puede operar.
3. **Validación de Éxito:** Solo si todas las condiciones de seguridad y materiales se cumplen, se marca como APROBADO.

## Pruebas

### Caso normal

**Entrada:** `insumos: { agujasVencidas: false, tieneTinta: true, tieneGuantes: true }`

**Resultado esperado:**
```json
{
  "estado": "APROBADO",
  "error": "Ninguno"
}