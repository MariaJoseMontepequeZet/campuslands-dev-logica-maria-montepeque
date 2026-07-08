# Plantilla de solucion

## Analisis
El problema se concibió para resolver la distribución equitativa del costo total de un paquete turístico internacional entre un grupo de viajeros. Debido a que las conversiones de divisas o impuestos generan fracciones centesimales infinitas, la solución aplica reglas estrictas de redondeo financiero para asegurar que el cobro por persona sea exacto y que el remanente por pérdidas de precisión se asigne de forma clara.

- Entrada: Costo total del paquete turístico (flotante) y la cantidad de viajeros que comparten el gasto (entero).
- Proceso: Comprobar la validez del número de viajeros. Dividir el costo total entre la cantidad de personas. Utilizar un método de redondeo simétrico o truncado hacia arriba a dos decimales para calcular la cuota individual y determinar si existe un excedente debido al ajuste decimal.
- Salida: Un objeto que contiene el costo individual redondeado por persona y el saldo de ajuste final del paquete.

## Reglas identificadas
1. Redondeo Financiero Estándar: La cuota individual calculada debe redondearse estrictamente a dos cifras decimales para ajustarse a los sistemas de pago monetarios reales.
2. Control de División por Cero: Si la cantidad de viajeros es menor o igual a cero, la operación se cancela de inmediato, devolviendo valores en cero para evitar excepciones.
3. Precisión de Ajuste: Cualquier diferencia milimétrica resultante de multiplicar la cuota individual redondeada por los viajeros frente al costo total original se reporta como saldo de ajuste.

## Pruebas

### Caso normal
Entrada: costoTotalPaquete = 1000.55, cantidadViajeros = 3
Resultado esperado: { "cuotaIndividual": 333.52, "saldoAjuste": 0.01 }

### Caso borde
Entrada: costoTotalPaquete = 500.00, cantidadViajeros = 0
Resultado esperado: { "cuotaIndividual": 0.0, "saldoAjuste": 0.0 }

## Explicacion final
La solución funciona porque segmenta el costo total aplicando un redondeo decimal monetario y calcula el desfase residual aritmético para cuadrar la caja.