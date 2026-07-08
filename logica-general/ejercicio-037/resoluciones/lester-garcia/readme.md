# Plantilla de solucion

## Analisis

- Entrada:
  - clientePremium: false
  - presupuesto: 30000
  - render4K: true
  - entregaUrgente: true

- Proceso:
  - Evaluar si el cliente es premium.
  - Verificar si solicita un render en 4K.
  - Revisar el presupuesto disponible.
  - Comprobar si la entrega es urgente.
  - Aplicar la regla correspondiente de la tabla de decisión.

- Salida:
  - servicio: Render 4K estándar
  - motivo: El presupuesto permite realizar un render en 4K.

## Reglas identificadas

1. Si el cliente es premium, solicita render 4K y requiere entrega urgente, se asigna un render 4K prioritario.
2. Si solicita un render 4K y el presupuesto es de al menos 25000, se asigna un render 4K estándar.
3. Si el presupuesto es de al menos 15000, se realiza un modelo arquitectónico.
4. En cualquier otro caso, se ofrece un diseño conceptual.

## Pruebas

### Caso normal

Entrada:

clientePremium: false
presupuesto: 30000
render4K: true
entregaUrgente: true

Resultado esperado:

servicio: Render 4K estándar
motivo: El presupuesto permite realizar un render en 4K.

### Caso borde

Entrada:

clientePremium: false
presupuesto: 10000
render4K: false
entregaUrgente: false

Resultado esperado:

servicio: Diseño conceptual
motivo: El presupuesto solo permite un diseño conceptual.

## Explicacion final

La solución funciona porque utiliza una tabla de decisión para evaluar varias condiciones en un orden definido. Dependiendo de la combinación de cliente premium, presupuesto, solicitud de render 4K y urgencia de entrega, el algoritmo asigna el servicio más adecuado. Esto garantiza una decisión consistente, clara y verificable.