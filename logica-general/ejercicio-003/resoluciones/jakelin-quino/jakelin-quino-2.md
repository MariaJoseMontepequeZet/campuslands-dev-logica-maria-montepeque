# Analisis

- **Entrada:** `victorias` (int), `es_eliminatoria` (boolean).
- **Proceso:** Se utiliza una estructura condicional anidada. Primero definimos el tipo de fase (eliminatoria o grupos) y, dentro de cada una, aplicamos el umbral de victorias requerido.
- **Salida:** Un diccionario con el estado `avanza` (boolean) y un `motivo` explicativo.

## Reglas aplicadas

1. **Regla de Eliminatoria:** Se requiere al menos 1 victoria para avanzar.
2. **Regla de Fase de Grupos:** Se requiere un mínimo de 3 victorias para avanzar.

## Pruebas

### Caso normal
- **Entrada:** 2 victorias, False (Fase de grupos).
- **Resultado:** {"avanza": False, "motivo": "Victorias insuficientes para la fase de grupos."}

### Caso borde
- **Entrada:** 1 victoria, True (Eliminatoria).
- **Resultado:** {"avanza": True, "motivo": "Victoria en eliminatoria confirmada."}

## Explicacion final

Primero, el código segmenta el contexto (fase del torneo) y luego aplica la regla de éxito. Esta jerarquía es muy clara: si el contexto cambia, la regla interna es fácil de identificar y modificar sin afectar el resto del sistema.