# Explicación del código: Clasificación de un Torneo de Esports

## 1. Entradas

La función `torneoEsports(nombre, victorias)` recibe los siguientes datos:

- **nombre:** nombre del equipo de esports.
- **victorias:** cantidad de partidas ganadas por el equipo.

---

## 2. Salidas

La función devuelve un objeto con la siguiente información:

- **equipo:** nombre del equipo.
- **victorias:** cantidad de victorias obtenidas (si el dato es válido).
- **clasificacion:** clasificación alcanzada por el equipo.
- **mensaje:** aparece únicamente cuando las victorias son negativas.

---

## 3. Caso pequeño resuelto manualmente

### Entrada

```text
Equipo: Cyber Titans
Victorias: 7
```

### Proceso

1. Verificar que las victorias no sean negativas.
2. Comparar el número de victorias.
3. Como 7 es mayor o igual que 5 y menor que 10, el equipo queda **Clasificado**.

### Salida

```text
Equipo: Cyber Titans
Victorias: 7
Clasificación: Clasificado
```

---

## 4. Pasos de la solución

1. Recibir el nombre del equipo y la cantidad de victorias.
2. Validar que las victorias no sean negativas.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar la cantidad de victorias para determinar la clasificación:
   - 15 o más → Campeón
   - 10 a 14 → Finalista
   - 5 a 9 → Clasificado
   - Menos de 5 → Eliminado
5. Devolver el resultado en un objeto.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function torneoEsports(nombre, victorias) {
```

Se crea una función que recibe el nombre del equipo y el número de victorias obtenidas durante el torneo.

---

## Bloque 2: Validación de datos

```javascript
if (victorias < 0) {
    return {
        equipo: nombre,
        clasificacion: "Dato inválido",
        mensaje: "Las victorias no pueden ser negativas."
    };
}
```

Se verifica que el número de victorias sea válido. Si es negativo, la función termina y devuelve un mensaje de error.

---

## Bloque 3: Variable de clasificación

```javascript
let clasificacion = "";
```

Se crea una variable donde se almacenará la clasificación final del equipo.

---

## Bloque 4: Clasificación del equipo

```javascript
if (victorias >= 15) {
    clasificacion = "Campeón";
} else if (victorias >= 10) {
    clasificacion = "Finalista";
} else if (victorias >= 5) {
    clasificacion = "Clasificado";
} else {
    clasificacion = "Eliminado";
}
```

Se utilizan estructuras `if` y `else if` para asignar la clasificación según la cantidad de victorias obtenidas.

| Victorias | Clasificación |
|-----------|---------------|
| 15 o más | Campeón |
| 10 a 14 | Finalista |
| 5 a 9 | Clasificado |
| Menos de 5 | Eliminado |

---

## Bloque 5: Retorno del resultado

```javascript
return {
    equipo: nombre,
    victorias: victorias,
    clasificacion: clasificacion
};
```

Se devuelve un objeto con toda la información del equipo y la clasificación obtenida.

---

## Bloque 6: Pruebas

El programa realiza dos pruebas para verificar su funcionamiento.

### Prueba normal

```javascript
const prueba1 = torneoEsports("Team Phoenix", 12);
```

**Resultado esperado**

```text
Equipo: Team Phoenix
Victorias: 12
Clasificación: Finalista
```

---

### Caso borde

```javascript
const prueba2 = torneoEsports("Shadow Wolves", 0);
```

**Resultado esperado**

```text
Equipo: Shadow Wolves
Victorias: 0
Clasificación: Eliminado
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe el nombre del equipo y las victorias.
- Valida que el dato sea correcto.
- Clasifica al equipo utilizando condiciones `if` y `else if`.
- Devuelve un objeto con el resultado final.

Esta implementación es sencilla, fácil de mantener y permite agregar nuevos niveles de clasificación si el torneo cambia sus reglas.

---

# 7. Pruebas

## Pruebas del código

| Equipo | Victorias | Clasificación |
|---------|----------:|---------------|
| Team Phoenix | 12 | Finalista |
| Shadow Wolves | 0 | Eliminado |

---

## Caso inventado

### Entrada

```text
Equipo: Dragon Force
Victorias: 17
```

### Resultado esperado

```text
Equipo: Dragon Force
Victorias: 17
Clasificación: Campeón
```

---

# Conclusión

El programa clasifica correctamente a los equipos de esports según la cantidad de victorias obtenidas. Además, valida los datos de entrada para evitar valores negativos y devuelve resultados claros mediante un objeto, facilitando su uso en otros programas.