# Plantilla de solucion

## Analisis
El problema se concibió para optimizar la gestión de un inventario de motocicletas mediante la clasificación automática por rangos de cilindrada (CC) y la identificación de la unidad con el precio máximo. Esto permite segmentar el catálogo de productos de forma lógica y destacar el vehículo de gama más alta para decisiones comerciales.

- Entrada: Una lista de objetos (diccionarios), donde cada objeto representa una motocicleta con sus atributos de modelo (texto), cilindrada (entero) y precio (flotante).
- Proceso: Iterar sobre la lista de motocicletas para evaluar la cilindrada de cada una y agruparlas en categorías estandarizadas ("Urbana", "Intermedia", "Alta Cilindrada"). Simultáneamente, comparar los precios para identificar el modelo con el costo más elevado del inventario.
- Salida: Un objeto que contiene el conteo por rangos de cilindrada y el nombre del modelo más costoso.

## Reglas identificadas
1. Clasificación por Rangos de Cilindrada: Si la cilindrada es menor a 250 CC se clasifica como "Urbana"; de 250 CC hasta 599 CC como "Intermedia"; y de 600 CC en adelante como "Alta Cilindrada".
2. Selección del Máximo Absoluto: En caso de empate en el precio máximo, se mantendrá la primera motocicleta encontrada con dicho valor en el orden de la lista.
3. Control de Inventario Vacío: Si el inventario no posee registros, las categorías se inicializan en cero y el modelo máximo se reporta como una cadena vacía para evitar errores de referencia.

## Pruebas

### Caso normal
Entrada: inventarioMotos = [{ "modelo": "Scooter 125", "cilindrada": 125, "precio": 2500.0 }, { "modelo": "Sport 300", "cilindrada": 300, "precio": 5500.0 }, { "modelo": "Touring 1000", "cilindrada": 1000, "precio": 15000.0 }]
Resultado esperado: { "conteos": { "Urbana": 1, "Intermedia": 1, "AltaCilindrada": 1 }, "modeloMasCaro": "Touring 1000" }

### Caso borde
Entrada: inventarioMotos = []
Resultado esperado: { "conteos": { "Urbana": 0, "Intermedia": 0, "AltaCilindrada": 0 }, "modeloMasCaro": "" }

## Explicacion final
La solución funciona porque clasifica sistemáticamente cada vehículo según umbrales numéricos de cilindrada fijos mientras evalúa linealmente el precio para aislar el valor máximo.