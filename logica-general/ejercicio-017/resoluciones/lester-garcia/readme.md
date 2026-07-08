# Plantilla de solucion

## Analisis

- Entrada:
  - clientePremium: true
  - presupuesto: 18000
  - renderSolicitado: true

- Proceso:
  - Evaluar si el cliente es premium.
  - Verificar si solicitó un render.
  - Revisar el presupuesto disponible.
  - Aplicar la regla correspondiente de la tabla de decisión.

- Salida:
  - servicio: render fotorrealista
  - motivo: El cliente es premium y solicitó un render de alta calidad.

## Reglas identificadas

1. Si el cliente es premium y solicita un render, se ofrece un render fotorrealista.
2. Si solicita un render pero no es premium, se ofrece un render estándar.
3. Si el presupuesto es menor a 10000, se ofrece un modelo básico.
4. En cualquier otro caso, se ofrece un modelo arquitectónico estándar.

## Pruebas

### Caso normal

Entrada:

clientePremium: true
presupuesto: 18000
renderSolicitado: true

Resultado esperado:

servicio: render fotorrealista
motivo: El cliente es premium y solicitó un render de alta calidad.

### Caso borde

Entrada:

clientePremium: false
presupuesto: 8000
renderSolicitado: false

Resultado esperado:

servicio: modelo basico
motivo: El presupuesto disponible solo permite un modelo básico.

## Explicacion final

La solución funciona porque aplica una tabla de decisión donde cada combinación de condiciones conduce a una única acción. Se evalúan las condiciones en un orden definido hasta encontrar la regla que corresponde al caso, produciendo un resultado claro, consistente y verificable.