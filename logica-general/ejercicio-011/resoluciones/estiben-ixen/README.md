# Resolución: Ranking de Kickboxing

## Pensamiento Lógico

Para resolver este problema, utilicé una estrategia de **"Bucket Sort" (clasificación por cubetas)**. Primero, distribuí a los atletas en categorías según su peso. Luego, apliqué un ordenamiento interno (`sort`) basado en su experiencia. Esto garantiza un reporte organizado por pesos, facilitando la creación de combates equilibrados.

## Reglas Aplicadas
1. **Peso:** Dividido en Pluma (<65), Medio (65-80) y Pesado (>80).
2. **Experiencia:** Dentro de cada peso, el peleador con más años de práctica tiene prioridad.

## Cómo ejecutar
Ejecutar con Node.js: `node kickboxing-ranking.js`

## Casos Probados
- **Dani vs Alex (Peso Medio):** Dani aparece primero porque tiene 10 años de experiencia frente a los 5 de Alex.
- **Bruno (Peso Pluma):** Clasificado correctamente debido a sus 60kg.