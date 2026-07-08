# Resolución: Inventario de Motos

## Pensamiento Lógico
Se utilizó una estructura de filtrado jerárquico. Primero se descartan las unidades no disponibles para no procesar datos irrelevantes. Posteriormente, se aplican condicionales para categorizar según especificaciones técnicas (cilindraje) y valor comercial (precio).

## Reglas Aplicadas
1. **Disponibilidad:** Solo se procesan motos con `disponible: true`.
2. **Alta Gama:** Cilindraje > 500cc.
3. **Económica:** Precio < 5000.
4. **Urbana:** Clasificación por defecto para modelos estándar.

## Cómo ejecutar
Ejecutar con Node.js:
`node inventario-motos.js`

## Casos Probados
- **Yamaha R6:** Clasificada como ALTA GAMA.
- **Honda Navi:** Clasificada como ECONÓMICA.
- **Suzuki Gixxer:** Clasificada como URBANA (estándar).
- **Kawasaki Z900:** Marcada como NO DISPONIBLE (filtro de stock exitoso).