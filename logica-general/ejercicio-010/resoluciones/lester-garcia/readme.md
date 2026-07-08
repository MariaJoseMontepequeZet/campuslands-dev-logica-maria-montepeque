# Plantilla de solucion

## Analisis

- Entrada:
  - Nombre del pasajero.
  - Estado del pasaporte.
  - Estado del boleto.

- Proceso:
  - Leer los datos del pasajero.
  - Verificar si posee un pasaporte válido.
  - Si el pasaporte es válido, verificar si posee un boleto.
  - Si ambos requisitos se cumplen, permitir abordar el viaje.
  - En caso contrario, indicar cuál requisito falta.

- Salida:
  - Un mensaje indicando si el pasajero puede abordar o el motivo por el cual no puede hacerlo.

## Reglas identificadas

1. El pasajero debe tener un pasaporte válido.
2. El pasajero debe tener un boleto de viaje.
3. Solo si ambos requisitos se cumplen, el pasajero puede abordar.

## Pruebas

### Caso normal

Entrada:

Nombre: Laura

Pasaporte: true

Boleto: true

Resultado esperado:

Verificando documentos del pasajero...

✓ Pasaporte verificado.

✓ Boleto verificado.

Laura puede abordar el viaje.

Proceso de verificación finalizado.

### Caso borde

Entrada:

Nombre: Pedro

Pasaporte: true

Boleto: false

Resultado esperado:

Verificando documentos del pasajero...

✓ Pasaporte verificado.

✗ No puede abordar: falta el boleto.

Proceso de verificación finalizado.

## Explicacion final

La solución funciona porque sigue las instrucciones en el orden establecido. Primero verifica si el pasajero tiene un pasaporte válido y, únicamente si cumple esa condición, verifica si dispone de un boleto. Con base en estas comprobaciones, informa si el pasajero puede abordar o cuál requisito falta, garantizando un proceso lógico, claro y verificable.