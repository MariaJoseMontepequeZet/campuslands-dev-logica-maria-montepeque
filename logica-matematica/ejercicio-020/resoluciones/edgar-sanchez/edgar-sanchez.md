# Plantilla de solucion

## Analisis
El problema se diseñó para simular la proyección de ventas estimadas y el cálculo de la merma económica en un puesto de comida urbana (como un carrito de hot dogs o hamburguesas). Mediante una fórmula predictiva basada en el tráfico peatonal promedio y una tasa de conversión histórica, el sistema estima cuántas porciones se venderán y calcula cuántos ingredientes se desperdiciarán si se prepara comida en exceso.

- Entrada: Clientes potenciales que pasan frente al puesto (entero), porciones de comida preparadas en el día (entero) y la tasa de conversión estimada (flotante entre 0.0 y 1.0).
- Proceso: Multiplicar los clientes potenciales por la tasa de conversión para obtener la demanda proyectada de porciones (redondeada al entero inferior). Si las porciones preparadas son mayores que la demanda proyectada, restar la demanda de las porciones preparadas para calcular la merma (porciones sobrantes). Si la demanda supera lo preparado, la merma es cero.
- Salida: Un objeto que contiene las porciones estimadas a vender y la cantidad de porciones perdidas como merma.

## Reglas identificadas
1. Proyección de Ventas: Las porciones estimadas a vender se calculan como $\lfloor clientes \times tasaConversion \rfloor$, truncando el valor ya que no se pueden vender fracciones de porciones. El límite superior de ventas está topado por las porciones realmente preparadas.
2. Cálculo de Merma Absoluta: La merma de comida urbana ocurre únicamente si las porciones preparadas exceden las porciones estimadas a vender ($porcionesPreparadas - porcionesVendidas$).
3. Control de Datos Inconsistentes: Si el tráfico de clientes o las porciones preparadas son menores o iguales a cero, el simulador inicializa todos los valores en cero de manera segura.

## Pruebas

### Caso normal (Con merma)
Entrada: clientesPeatonales = 500, porcionesPreparadas = 60, tasaConversion = 0.10
Resultado esperado: { "porcionesVendidas": 50, "porcionesMerma": 10 }

### Caso borde (Sin clientes ni preparación)
Entrada: clientesPeatonales = 0, porcionesPreparadas = 0, tasaConversion = 0.10
Resultado esperado: { "porcionesVendidas": 0, "porcionesMerma": 0 }

## Explicacion final
La solución funciona porque modela matemáticamente el comportamiento del negocio aplicando factores de conversión realistas y previene errores lógicos controlando los inventarios mediante condiciones de mínimos y truncamiento entero.