# Plantilla de solucion

## Autor:

Sergio Ajú

## Analisis

- **Entrada:** `material` (string: "aluminio" o "acero") y `esEspecializado` (booleano: true para experto, false para general).
- **Proceso:** Se utiliza una estructura condicional que actúa como filtro de seguridad. Se valida primero el material crítico (aluminio) y se cruza con el nivel del operario.
- **Salida:** Un objeto con el estado de la asignación (`asignado`) y una explicación del motivo.

## Reglas identificadas

1. **Restricción de Material:** El aluminio es un material que exige alta especialización por seguridad técnica.
2. **Flexibilidad:** El acero no requiere certificación especial, siendo apto para todo el personal.
3. **Validación:** Cualquier material no definido en el sistema debe ser rechazado por precaución.

## Pruebas

### Caso normal

**Entrada:** `material: "aluminio", esEspecializado: true`

**Resultado esperado:**
```json
{
  "asignado": true,
  "razon": "Turno asignado correctamente a operario habilitado."
}