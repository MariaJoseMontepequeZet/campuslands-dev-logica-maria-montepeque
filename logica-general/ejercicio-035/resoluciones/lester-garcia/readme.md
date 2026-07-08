# Plantilla de solucion

## Analisis

- Entrada:
  - tipoCuenta: "premium"
  - formato: "PSD"
  - capas: 15
  - almacenamientoDisponible: 500

- Proceso:
  - Verificar que el usuario tenga una cuenta premium.
  - Comprobar que el formato solicitado sea PSD.
  - Revisar que el número de capas no supere el límite permitido.
  - Validar que exista suficiente espacio de almacenamiento.
  - Aplicar las reglas de negocio para aprobar o rechazar la exportación.

- Salida:
  - resultado: Exportación aprobada
  - motivo: El proyecto cumple todas las reglas de negocio.

## Reglas identificadas

1. Solo las cuentas premium pueden exportar archivos PSD.
2. El formato solicitado debe ser PSD.
3. El proyecto no puede superar las 20 capas.
4. Debe existir al menos 100 MB de almacenamiento disponible.
5. Si todas las condiciones se cumplen, la exportación es aprobada.

## Pruebas

### Caso normal

Entrada:

tipoCuenta: "premium"
formato: "PSD"
capas: 15
almacenamientoDisponible: 500

Resultado esperado:

resultado: Exportación aprobada
motivo: El proyecto cumple todas las reglas de negocio.

### Caso borde

Entrada:

tipoCuenta: "premium"
formato: "PSD"
capas: 25
almacenamientoDisponible: 500

Resultado esperado:

resultado: Exportación rechazada
motivo: El proyecto supera el límite de capas permitido.

## Explicacion final

La solución funciona porque valida cada regla de negocio en un orden lógico. Primero comprueba los permisos del usuario, luego verifica el formato, el límite de capas y el espacio de almacenamiento. Si alguna condición falla, la exportación se rechaza; de lo contrario, se aprueba. Esto produce un resultado consistente, claro y verificable.