# Resolución: Inventario Lógico de Fórmulas Químicas

## Pensamiento Lógico
Se utilizó una **lógica de validación de estados**. Cada estante es un objeto que contiene una lista de sustancias. Antes de realizar el `push` (añadir), el sistema consulta el estado actual del estante para prevenir mezclas peligrosas según una matriz de compatibilidad química simple.

## Reglas Aplicadas
1. **Seguridad Térmica:** Bloqueo estricto de mezcla Ácido/Base.
2. **Seguridad Atmosférica:** Restricción de inflamables al "Estante V".
3. **Integridad:** El inventario solo permite añadir elementos si el estado actual es seguro.

## Cómo ejecutar
`node inventario-quimico.js`

## Casos Probados
- **Mezcla Peligrosa:** Intentar poner Base en un estante con Ácido -> Bloqueado.
- **Inflamable en Estante A:** -> Bloqueado (requiere Estante V).