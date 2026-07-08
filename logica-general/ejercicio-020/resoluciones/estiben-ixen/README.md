# Resolución: Optimizador de Menú Urbano

## Pensamiento Lógico
Se utilizó una **estrategia de filtrado por umbrales**. El sistema procesa cada elemento aplicando una lógica booleana (`rentable` AND `rapido`). Esta estructura permite que el dueño del carrito tome decisiones basadas en datos objetivos en lugar de intuición.

## Reglas Aplicadas
1. **Margen Mínimo:** Exigimos al menos $5 de ganancia por unidad.
2. **Límite de Tiempo:** Flujo máximo de 15 minutos de preparación.
3. **Categorización:** El sistema clasifica automáticamente entre "Estrella" (apto para venta) o "Descartar".

## Cómo ejecutar
`node menu-urbano.js`

## Casos Probados
- **Hot Dog:** Aprobado (Margen $8, Tiempo 8m).
- **Hamburguesa:** Descartada (Tiempo excedido de preparación).
- **Tacos:** Aprobado (Margen $7, Tiempo 12m).