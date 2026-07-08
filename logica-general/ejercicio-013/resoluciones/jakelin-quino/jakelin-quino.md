# Analisis

- **Entrada:** `velocidadViento` (number), `altitud` (number), `paracaidasOK` (boolean).
- **Proceso:** Se evalúan tres condiciones de seguridad críticas en orden jerárquico. Si alguna falla, el proceso se interrumpe y se emite una alerta de seguridad.
- **Salida:** Un objeto con el `permiso` (booleano) y el `motivo` de la decisión.

## Reglas identificadas

1. **Regla Meteorológica:** Velocidad de viento mayor a 30 km/h cancela el salto.
2. **Regla de Seguridad Física:** Altitud menor a 1000 metros no permite margen para abrir el paracaídas.
3. **Regla de Inspección:** El equipo debe estar verificado (`true`) antes de cualquier intento.

## Pruebas

### Caso normal

**Entrada:** Viento: 15 km/h, Altitud: 2000m, Paracaídas: OK

**Resultado esperado:** { permiso: true, motivo: "Condiciones óptimas. ¡Proceder con el salto!" }

### Caso borde

**Entrada:** Viento: 45 km/h, Altitud: 2000m, Paracaídas: OK

**Resultado esperado:** { permiso: false, motivo: "Viento demasiado fuerte para saltar." }

## Explicacion final

El sistema verifica primero el entorno (viento), luego las condiciones de vuelo (altitud) y finalmente el estado del equipo (inspección). Si alguno de estos puntos falla, el sistema bloquea el salto preventivamente, garantizando que el usuario siempre esté en condiciones controladas.