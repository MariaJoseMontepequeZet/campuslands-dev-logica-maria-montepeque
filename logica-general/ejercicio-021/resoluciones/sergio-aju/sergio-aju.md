# Plantilla de solución

## Analisis
- **Entrada:** Un número entero `victorias` (rango 0-5) y un número decimal `kda`.
- **Proceso:** Evaluación secuencial mediante condicionales (if/else if) comparando las victorias y el KDA contra umbrales predefinidos.
- **Salida:** Un objeto con el `rango` asignado y el `motivo` basado en la regla aplicada.

## Reglas identificadas
1. **Rango Oro:** Requiere al menos 4 victorias y un KDA igual o mayor a 3.0.
2. **Rango Plata:** Requiere al menos 2 victorias y un KDA igual o mayor a 1.5.
3. **Rango Bronce:** Por defecto, si no se cumplen las condiciones anteriores (incluyendo casos de 0 victorias).

## Pruebas

### Caso normal
**Entrada:** `victorias: 3`, `kda: 2.0`
**Resultado esperado:** `rango: "Plata"`, `motivo: "Desempeño estándar: cumple con el mínimo de victorias y KDA aceptable."`

### Caso borde
**Entrada:** `victorias: 0`, `kda: 0.5`
**Resultado esperado:** `rango: "Bronce"`, `motivo: "Desempeño inicial: requiere mayor práctica en partidas competitivas."`

## Explicacion final
La solución funciona mediante una estructura de control jerárquica. Al evaluar primero el escenario más exigente (Oro), aseguramos que los jugadores con mejores estadísticas se clasifiquen correctamente antes de pasar a evaluar si cumplen los requisitos mínimos para Plata. Cualquier entrada que no alcance estos umbrales cae automáticamente en Bronce, lo que cubre tanto jugadores con bajo rendimiento como casos de 0 victorias.

## Sugerencia
Antes de programar, definí las reglas en una tabla lógica para asegurar que no existan huecos en la toma de decisiones.