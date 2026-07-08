# Plantilla de solucion

## Analisis
El problema se diseñó para automatizar el cálculo del espacio físico requerido para un tatuaje de forma rectangular (área) y la longitud total de su delineado exterior (perímetro). Esto permite al artista del estudio de tatuajes presupuestar de manera exacta la cantidad de tinta base necesaria para el relleno y el coste del tiempo de trazado lineal sobre la piel.

- Entrada: El ancho del tatuaje en centímetros (flotante) y el alto del tatuaje en centímetros (flotante).
- Proceso: Multiplicar el ancho por el alto para obtener el área de cobertura en centímetros cuadrados ($Área = ancho \times alto$). Sumar el doble del ancho y el doble del alto para calcular el perímetro total de las líneas externas ($Perímetro = 2 \times (ancho + alto)$).
- Salida: Un objeto que contiene el área calculada y el perímetro total de delineado.

## Reglas identificadas
1. Cálculo Espacial Estándar: El área se rige por la geometría bidimensional del rectángulo y el perímetro por la suma de sus cuatro contornos lineales.
2. Validación de Dimensiones Reales: Si el ancho o el alto son menores o iguales a cero, el diseño se considera inválido y se retornan valores de 0.0 para evitar cálculos físicos imposibles.
3. Consistencia Decimal: Ambos resultados numéricos deben redondearse estrictamente a dos posiciones decimales para mantener la precisión en las hojas de cotización del estudio.

## Pruebas

### Caso normal
Entrada: anchoCentimetros = 8.5, altoCentimetros = 12.0
Resultado esperado: { "areaCuadrada": 102.0, "perimetroLineal": 41.0 }

### Caso borde
Entrada: anchoCentimetros = 0.0, altoCentimetros = 15.0
Resultado esperado: { "areaCuadrada": 0.0, "perimetroLineal": 0.0 }

## Explicacion final
La solución funciona porque aplica las fórmulas geométricas clásicas de rectángulos y restringe lógicamente la ejecución ante cualquier dimensión física inexistente o nula.