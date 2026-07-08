# Plantilla de solución: Validación Ranking Fútbol Sala

## Autor:

Sergio Ajù

## Análisis
- **Entrada:** Nombre del jugador (string), partidos jugados (número), goles marcados (número).
- **Proceso:** Verificar que los partidos sean positivos y los goles no sean negativos mediante condicionales.
- **Salida:** Un objeto con el estado (Apto/No apto) y un mensaje explicativo.

## Reglas identificadas
1. **Regla de Participación:** Un jugador sin partidos jugados (0) no puede entrar al ranking.
2. **Regla de Integridad:** No se permiten valores negativos en goles (datos erróneos).
3. **Regla de Validación:** Un jugador es "Apto" solo si cumple con partidos > 0 y goles >= 0.

## Pruebas

### Caso normal
- **Entrada:** `("Juan", 10, 5)`
- **Resultado esperado:** `estado: "Apto"`

### Caso borde
- **Entrada:** `("Pedro", 0, 0)`
- **Resultado esperado:** `estado: "No apto"`, `motivo: "El jugador debe haber disputado al menos un partido."`

## Explicacion final
La solución funciona mediante una estructura de control de flujo (`if-else`) que actúa como un filtro. Primero descartamos los casos inválidos (partidos <= 0 o goles < 0) para asegurar que solo los datos correctos lleguen al estado "Apto". Esto permite que el sistema sea robusto ante errores de captura.

## Sugerencia
Primero definí las condiciones de error. Es más fácil descartar lo que "está mal" primero para que el resto del código se enfoque solo en lo que "está bien".