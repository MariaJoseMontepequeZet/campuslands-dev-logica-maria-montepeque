# Explicación del código: Clasificación del Inventario de Motos

## 1. Entradas

La función `inventarioMotos(modelo, stock)` recibe los siguientes datos:

- **modelo:** nombre o modelo de la motocicleta.
- **stock:** cantidad de unidades disponibles en el inventario.

---

## 2. Salidas

La función devuelve un objeto con la siguiente información:

- **modelo:** nombre del modelo de la moto.
- **stock:** cantidad disponible (si el dato es válido).
- **estado:** estado del inventario según el stock.
- **mensaje:** aparece únicamente cuando el stock es negativo.

---

## 3. Caso pequeño resuelto manualmente

### Entrada

```text
Modelo: Suzuki Gixxer 150
Stock: 6
```

### Proceso

1. Verificar que el stock no sea negativo.
2. Comparar la cantidad de unidades disponibles.
3. Como 6 es mayor o igual que 5 y menor que 10, el estado es **Stock Medio**.

### Salida

```text
Modelo: Suzuki Gixxer 150
Stock: 6
Estado: Stock Medio
```

---

## 4. Pasos de la solución

1. Recibir el modelo de la motocicleta y la cantidad de stock.
2. Validar que el stock no sea negativo.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar el stock para determinar el estado:
   - 10 o más → Stock Alto
   - 5 a 9 → Stock Medio
   - 1 a 4 → Stock Bajo
   - 0 → Sin Stock
5. Devolver el resultado en un objeto.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function inventarioMotos(modelo, stock) {
```

Se crea una función que recibe el modelo de la motocicleta y la cantidad de unidades disponibles.

---

## Bloque 2: Validación de datos

```javascript
if (stock < 0) {
    return {
        modelo: modelo,
        estado: "Dato inválido",
        mensaje: "El stock no puede ser negativo."
    };
}
```

Se verifica que el stock sea un valor válido. Si es negativo, la función devuelve un mensaje de error y termina su ejecución.

---

## Bloque 3: Variable de estado

```javascript
let estado = "";
```

Se crea una variable donde se almacenará el estado del inventario.

---

## Bloque 4: Clasificación del inventario

```javascript
if (stock >= 10) {
    estado = "Stock Alto";
} else if (stock >= 5) {
    estado = "Stock Medio";
} else if (stock >= 1) {
    estado = "Stock Bajo";
} else {
    estado = "Sin Stock";
}
```

Se utilizan condiciones `if` y `else if` para clasificar el inventario según la cantidad de motos disponibles.

| Stock | Estado |
|-------:|---------|
| 10 o más | Stock Alto |
| 5 a 9 | Stock Medio |
| 1 a 4 | Stock Bajo |
| 0 | Sin Stock |

---

## Bloque 5: Retorno del resultado

```javascript
return {
    modelo: modelo,
    stock: stock,
    estado: estado
};
```

Se devuelve un objeto con el modelo, la cantidad de stock y el estado del inventario.

---

## Bloque 6: Pruebas

El programa realiza dos pruebas para comprobar su funcionamiento.

### Prueba normal

```javascript
const prueba1 = inventarioMotos("Honda CB190R", 8);
```

**Resultado esperado**

```text
Modelo: Honda CB190R
Stock: 8
Estado: Stock Medio
```

---

### Caso borde

```javascript
const prueba2 = inventarioMotos("Yamaha FZ25", 0);
```

**Resultado esperado**

```text
Modelo: Yamaha FZ25
Stock: 0
Estado: Sin Stock
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe el modelo de la motocicleta y el stock disponible.
- Valida que el stock sea un valor correcto.
- Clasifica el inventario mediante estructuras `if` y `else if`.
- Devuelve un objeto con toda la información del inventario.

Esta implementación es simple, eficiente y permite modificar fácilmente los rangos de clasificación si cambian las necesidades del negocio.

---

# 7. Pruebas

## Pruebas del código

| Modelo | Stock | Estado |
|---------|------:|--------|
| Honda CB190R | 8 | Stock Medio |
| Yamaha FZ25 | 0 | Sin Stock |

---

## Caso inventado

### Entrada

```text
Modelo: KTM Duke 390
Stock: 15
```

### Resultado esperado

```text
Modelo: KTM Duke 390
Stock: 15
Estado: Stock Alto
```

---

# Conclusión

El programa clasifica correctamente el inventario de motocicletas según la cantidad de unidades disponibles. Además, valida que el stock no sea negativo y devuelve un objeto con la información necesaria para facilitar su uso en otros sistemas de gestión de inventario.