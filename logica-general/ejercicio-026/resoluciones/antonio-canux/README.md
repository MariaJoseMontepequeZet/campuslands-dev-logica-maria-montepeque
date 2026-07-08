# Ejercicio 26 - Autos Hiperdeportivos

**Camper:** Antonio Canux

## Analisis

- **Entrada:** La función recibe un `inventario` (un arreglo que contiene objetos con los datos de los vehículos: modelo, velocidad máxima y tipo de motor) y un número `velocidadMinimaRequerida` (el criterio de búsqueda).
- **Proceso:** Se utiliza un ciclo `for` para iterar sobre cada vehículo del inventario. Dentro del ciclo, un condicional `if` evalúa si la `velocidadMaxima` del vehículo actual es mayor o igual a la solicitada. Si se cumple, se guarda el vehículo y se utiliza `break` para detener el ciclo y optimizar el proceso.
- **Salida:** Un objeto con el `resultado` (los datos del auto encontrado o `null` si no hay coincidencias) y un `reporte` en texto con la descripción de la acción resultante.

## Reglas identificadas

1. El sistema debe revisar los autos uno por uno en el orden en que están almacenados en el inventario.
2. Al encontrar el primer auto que iguale o supere la velocidad mínima requerida, la búsqueda debe detenerse inmediatamente.
3. Si se termina de revisar todo el inventario y ningún auto cumple el requisito, el sistema debe notificar claramente que no hay vehículos aptos.

## Pruebas

### Caso normal

Entrada: `inventarioGarage`, `velocidadMinimaRequerida: 400`

Resultado esperado: 
```text
resultado: { modelo: "Bugatti Chiron Super Sport", velocidadMaxima: 490, motor: "W16 Quad-Turbo" }
reporte: "Vehículo apto encontrado: Bugatti Chiron Super Sport equipado con motor W16 Quad-Turbo."
```

### Caso borde
Entrada: `inventarioGarage`, `velocidadMinimaRequerida: 600`

Resultado esperado:

```text
resultado: null
reporte: "Ningún vehículo en el garaje alcanza el requerimiento de 600 km/h."
```

## Explicacion final
La solución funciona porque implementa un algoritmo de búsqueda lineal simple y eficiente para encontrar elementos en colecciones de datos. El uso de la instrucción break es crucial en la toma de decisiones para este tipo de lógica, ya que evita que el programa siga consumiendo recursos buscando en el resto del arreglo cuando ya ha encontrado un elemento que cumple con las reglas de negocio establecidas. Además, se protege la respuesta contemplando el caso donde la búsqueda falla, devolviendo un estado nulo controlado.