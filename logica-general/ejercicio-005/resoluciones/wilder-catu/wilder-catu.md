# Explicación del código: Clasificación de Prioridad en un Taller Mecánico

## 1. Entradas

La función `tallerMecanico(placa, diasEspera)` recibe los siguientes datos:

- **placa:** placa del vehículo.
- **diasEspera:** cantidad de días que el vehículo ha permanecido en espera dentro del taller.

---

## 2. Salidas

La función devuelve un objeto con la siguiente información:

- **placa:** placa del vehículo.
- **diasEspera:** número de días en espera (si el dato es válido).
- **prioridad:** nivel de prioridad asignado.
- **mensaje:** aparece únicamente cuando los días de espera son negativos.

---

## 3. Caso pequeño resuelto manualmente

### Entrada

```text
Placa: P789DEF
Días de espera: 3
```

### Proceso

1. Verificar que los días de espera no sean negativos.
2. Comparar la cantidad de días.
3. Como 3 es mayor o igual que 1 y menor que 5, la prioridad es **Normal**.

### Salida

```text
Placa: P789DEF
Días de espera: 3
Prioridad: Normal
```

---

## 4. Pasos de la solución

1. Recibir la placa del vehículo y los días de espera.
2. Validar que los días de espera no sean negativos.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar los días de espera para determinar la prioridad:
   - 10 o más → Urgente
   - 5 a 9 → Alta
   - 1 a 4 → Normal
   - 0 → Recién ingresado
5. Devolver el resultado en un objeto.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function tallerMecanico(placa, diasEspera) {
```

Se crea una función que recibe la placa del vehículo y los días que ha permanecido en espera.

---

## Bloque 2: Validación de datos

```javascript
if (diasEspera < 0) {
    return {
        placa: placa,
        prioridad: "Dato inválido",
        mensaje: "Los días de espera no pueden ser negativos."
    };
}
```

Se verifica que los días de espera sean válidos. Si el valor es negativo, la función devuelve un mensaje de error y finaliza su ejecución.

---

## Bloque 3: Variable de prioridad

```javascript
let prioridad = "";
```

Se crea una variable donde se almacenará la prioridad asignada al vehículo.

---

## Bloque 4: Clasificación de la prioridad

```javascript
if (diasEspera >= 10) {
    prioridad = "Urgente";
} else if (diasEspera >= 5) {
    prioridad = "Alta";
} else if (diasEspera >= 1) {
    prioridad = "Normal";
} else {
    prioridad = "Recién ingresado";
}
```

Se utilizan estructuras `if` y `else if` para asignar la prioridad según los días de espera.

| Días de espera | Prioridad |
|---------------:|-----------|
| 10 o más | Urgente |
| 5 a 9 | Alta |
| 1 a 4 | Normal |
| 0 | Recién ingresado |

---

## Bloque 5: Retorno del resultado

```javascript
return {
    placa: placa,
    diasEspera: diasEspera,
    prioridad: prioridad
};
```

Se devuelve un objeto con la placa del vehículo, los días de espera y la prioridad asignada.

---

## Bloque 6: Pruebas

El programa realiza dos pruebas para comprobar su funcionamiento.

### Prueba normal

```javascript
const prueba1 = tallerMecanico("P123ABC", 6);
```

**Resultado esperado**

```text
Placa: P123ABC
Días de espera: 6
Prioridad: Alta
```

---

### Caso borde

```javascript
const prueba2 = tallerMecanico("P456XYZ", 0);
```

**Resultado esperado**

```text
Placa: P456XYZ
Días de espera: 0
Prioridad: Recién ingresado
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe la placa del vehículo y los días de espera.
- Valida que el número de días sea un dato correcto.
- Clasifica la prioridad mediante condiciones `if` y `else if`.
- Devuelve un objeto con toda la información del vehículo.

Esta implementación es sencilla, eficiente y facilita la organización de los vehículos según el tiempo que llevan esperando en el taller.

---

# 7. Pruebas

## Pruebas del código

| Placa | Días de espera | Prioridad |
|--------|---------------:|-----------|
| P123ABC | 6 | Alta |
| P456XYZ | 0 | Recién ingresado |

---

## Caso inventado

### Entrada

```text
Placa: P987JKL
Días de espera: 12
```

### Resultado esperado

```text
Placa: P987JKL
Días de espera: 12
Prioridad: Urgente
```

---

# Conclusión

El programa clasifica correctamente la prioridad de atención de los vehículos en un taller mecánico según los días que llevan en espera. Además, valida que los datos sean correctos y devuelve un objeto con la información necesaria para facilitar la gestión y organización del taller.