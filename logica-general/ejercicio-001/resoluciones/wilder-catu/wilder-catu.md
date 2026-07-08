# Explicación del código: Clasificación de jugadores

## 1. Entradas
La función `clasificarJugador(nombre, puntos)` recibe:
- **nombre**: nombre del jugador.
- **puntos**: cantidad de puntos obtenidos.

## 2. Salidas
La función devuelve un objeto con:
- `jugador`
- `puntos` (si el dato es válido)
- `rango`
- `mensaje` (solo cuando los puntos son inválidos)

---

## 3. Caso pequeño resuelto manualmente

**Entrada**
```text
Nombre: Carlos
Puntos: 1200
```

**Proceso**
1. Los puntos no son negativos.
2. 1200 es mayor o igual que 1000.
3. El rango es **Plata**.

**Salida**
```text
Jugador: Carlos
Puntos: 1200
Rango: Plata
```

---

## 4. Pasos de la solución

1. Recibir el nombre y los puntos.
2. Verificar si los puntos son negativos.
3. Si son negativos, devolver un mensaje de error.
4. Si son válidos, comparar los puntos con cada rango:
   - 3000 o más → Diamante
   - 2000 a 2999 → Oro
   - 1000 a 1999 → Plata
   - Menos de 1000 → Bronce
5. Devolver el resultado.

---

## 5. Explicación por bloques

### Bloque 1: Definición de la función
```js
function clasificarJugador(nombre, puntos) {
```
Se crea una función que recibe el nombre del jugador y sus puntos.

### Bloque 2: Validación
```js
if (puntos < 0) {
    return {
        jugador: nombre,
        rango: "Dato inválido",
        mensaje: "Los puntos no pueden ser negativos."
    };
}
```
Comprueba que los puntos sean válidos. Si son negativos, finaliza la función devolviendo un mensaje de error.

### Bloque 3: Variable del rango
```js
let rango = "";
```
Se crea una variable donde se guardará el rango del jugador.

### Bloque 4: Clasificación
```js
if (puntos >= 3000) {
    rango = "Diamante";
} else if (puntos >= 2000) {
    rango = "Oro";
} else if (puntos >= 1000) {
    rango = "Plata";
} else {
    rango = "Bronce";
}
```
Se compara la cantidad de puntos para asignar el rango correspondiente.

### Bloque 5: Resultado
```js
return {
    jugador: nombre,
    puntos: puntos,
    rango: rango
};
```
Devuelve un objeto con la información del jugador y el rango obtenido.

### Bloque 6: Pruebas
El código realiza tres pruebas:
- **Prueba normal:** Fernando con 2350 puntos → Oro.
- **Caso borde:** Ana con 0 puntos → Bronce.
- **Caso inválido:** Luis con -50 puntos → Dato inválido.

---

## 6. Implementación
La implementación consiste en una función que valida los datos, asigna un rango mediante condiciones `if/else` y devuelve un objeto con el resultado.

---

## 7. Pruebas

### Prueba del código
| Jugador | Puntos | Resultado |
|---------|--------|-----------|
| Fernando | 2350 | Oro |
| Ana | 0 | Bronce |
| Luis | -50 | Dato inválido |

### Caso inventado
**Entrada**
```text
Nombre: Sofía
Puntos: 3200
```

**Resultado esperado**
```text
Jugador: Sofía
Puntos: 3200
Rango: Diamante
```
