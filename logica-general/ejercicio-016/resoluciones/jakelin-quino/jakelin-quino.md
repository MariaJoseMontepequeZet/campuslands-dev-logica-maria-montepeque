# Analisis

- **Entrada:** `coordenadas` (array [x, y, z]), `limiteMax` (number).
- **Proceso:** Se recorre el array de coordenadas utilizando un ciclo `for`. Se compara cada valor individualmente contra los límites permitidos (0 y limiteMax).
- **Salida:** Un objeto con el estado `dentro` (boolean) y un `mensaje` descriptivo.

## Reglas identificadas

1. **Regla de Positividad:** Las coordenadas no pueden ser negativas (fuera del volumen de renderizado).
2. **Regla de Alcance:** Ninguna coordenada puede superar el `limiteMax` definido por la configuración de la escena.
3. **Regla de Validación:** Si un solo valor incumple, el objeto completo se marca como fuera de límites.

## Pruebas

### Caso normal

**Entrada:** coordenadas: [10, 5, 20], limiteMax: 50

**Resultado esperado:** { dentro: true, mensaje: "Objeto dentro del área de renderizado." }

### Caso borde

**Entrada:** coordenadas: [60, 5, 20], limiteMax: 50

**Resultado esperado:** { dentro: false, mensaje: "Error: Objeto fuera de límites en eje 0" }

## Explicacion final

Al usar un ciclo para recorrer la matriz (el array de coordenadas), podemos validar cualquier dimensión (2D, 3D o incluso más) sin tener que escribir código repetitivo. Si se encuentra un error en cualquier eje, la función retorna inmediatamente.