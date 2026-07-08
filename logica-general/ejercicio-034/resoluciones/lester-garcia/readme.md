# Plantilla de solucion

## Analisis

- Entrada:
  - disenoAprobado: true
  - tintaDisponible: true
  - maquinaEsterilizada: false
  - clienteMayorEdad: true

- Proceso:
  - Verificar que el cliente sea mayor de edad.
  - Comprobar que la máquina esté esterilizada.
  - Revisar que exista tinta disponible.
  - Confirmar que el diseño haya sido aprobado.
  - Emitir un diagnóstico según la primera condición que falle.

- Salida:
  - diagnostico: Error de seguridad
  - motivo: La máquina de tatuar no está esterilizada.

## Reglas identificadas

1. El cliente debe ser mayor de edad.
2. La máquina de tatuar debe estar esterilizada antes de iniciar la sesión.
3. Debe existir tinta disponible para realizar el tatuaje.
4. El diseño debe estar aprobado por el cliente.
5. Si todas las condiciones se cumplen, la sesión puede comenzar sin errores.

## Pruebas

### Caso normal

Entrada:

disenoAprobado: true
tintaDisponible: true
maquinaEsterilizada: false
clienteMayorEdad: true

Resultado esperado:

diagnostico: Error de seguridad
motivo: La máquina de tatuar no está esterilizada.

### Caso borde

Entrada:

disenoAprobado: true
tintaDisponible: true
maquinaEsterilizada: true
clienteMayorEdad: true

Resultado esperado:

diagnostico: Sin errores
motivo: La sesión puede iniciar porque todos los requisitos se cumplen.

## Explicacion final

La solución funciona porque revisa los requisitos de la sesión de tatuajes en un orden de prioridad. En cuanto detecta la primera condición que no se cumple, genera un diagnóstico específico y explica el motivo. Si todas las validaciones son correctas, informa que la sesión puede realizarse sin inconvenientes.