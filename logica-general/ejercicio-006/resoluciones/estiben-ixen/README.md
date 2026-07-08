# Resolución: Catálogo de Autos Hiperdeportivos

## Pensamiento Lógico
Para resolver la búsqueda, opté por el método funcional `.filter()`. Esto permite crear un subconjunto de datos original sin modificar la base de datos (inmutabilidad). La lógica combina dos condiciones (velocidad y marca) para garantizar que los resultados sean precisos.

## Reglas Aplicadas
1. **Umbral de Velocidad:** Filtro obligatorio para separar hiperdeportivos de superdeportivos convencionales.
2. **Filtrado Opcional:** El buscador permite filtrar por marca sin romper la lógica de búsqueda por velocidad.

## Cómo ejecutar
Ejecutar con Node.js:
`node hiperdeportivos.js`

## Casos Probados
- **Búsqueda General:** Velocidad > 400 km/h. (Devuelve 3 resultados).
- **Filtro por Marca:** Koenigsegg con velocidad > 400 km/h. (Devuelve 1 resultado).
- **Caso Borde:** Velocidad > 500 km/h. (Devuelve lista vacía, mensaje de aviso).