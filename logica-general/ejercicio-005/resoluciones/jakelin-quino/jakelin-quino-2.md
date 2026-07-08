# Analisis

- **Entrada:** `falla` (string), `es_emergencia` (boolean).
- **Proceso:** Se evalúa primero el booleano de emergencia, luego el tipo de falla, para determinar el nivel de urgencia y la acción a tomar.
- **Salida:** Un diccionario con el nivel de `prioridad` y la `accion` requerida.

## Reglas aplicadas

1. **Emergencia:** Si es emergencia, la prioridad es alta sin importar el tipo de falla.
2. **Falla Crítica:** Problemas de "motor" sin ser emergencia reciben prioridad media-alta.
3. **Mantenimiento:** Cualquier otra situación se considera baja prioridad.

## Pruebas

### Caso normal
- **Entrada:** falla: "frenos", es_emergencia: True
- **Resultado:** {"prioridad": "Alta", "accion": "Ingreso inmediato a elevador."}

### Caso borde
- **Entrada:** falla: "aceite", es_emergencia: False
- **Resultado:** {"prioridad": "Baja", "accion": "Programar según agenda disponible."}

## Explicacion final

Al evaluar la condición más crítica (emergencia) primero, simplificamos el árbol de decisiones. Si no es una emergencia, el sistema puede proceder a analizar la naturaleza específica de la falla, optimizando el flujo de trabajo del taller mecánico.