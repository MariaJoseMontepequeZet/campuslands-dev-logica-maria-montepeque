# Solución del Reto: Taller Mecánico (Lógica General 005)

## 1. Leer instrucciones e Identificar Entradas
El reto consiste en simular el sistema de asignación de turnos de un taller mecánico automotriz basado en la gravedad de la falla y la optimización del tiempo.
* **Entradas:** * `vehiculos` (Arreglo de objetos): Lista de vehículos ingresados con las propiedades `placa`, `falla`, `prioridad` (texto) y `tiempoEstimadoHoras` (número).

## 2. Definir Salidas
* **Salida:** Un nuevo arreglo ordenado por orden estricto de atención física (`posicionAtencion`), detallando la acción y el motivo logístico de su posición.

## 3. Reglas de Negocio Aplicadas
1. **Regla de Riesgo Alto:** Los vehículos categorizados como `"critico"` o `"alta"` deben ser atendidos antes que los mantenimientos de rutina (`"baja"`).
2. **Regla de Desempate Cuantitativo (Eficiencia):** Si dos vehículos tienen exactamente la misma prioridad de falla, ingresará primero al taller el vehículo que requiera **menos horas** de trabajo estimado para liberar la bahía rápido.

## 4. Cálculo Numérico y Razonamiento Lógico
Para evitar estructuras complejas de condicionales anidados (`if/else` masivos), transformamos los niveles cualitativos en valores cuantitativos discretos:

$$\text{"critico"} \rightarrow 3,\quad \text{"alta"} \rightarrow 2,\quad \text{"media"} \rightarrow 1,\quad \text{"baja"} \rightarrow 0$$

Esto nos permite utilizar el método matemático de ordenamiento `.sort((a, b) => pesoB - pesoA)`. En caso de que la resta sea $0$ (empate), el algoritmo ejecuta el segundo criterio cuantitativo restando los tiempos estimados de reparación (`vehiculoA.tiempoEstimadoHoras - vehiculoB.tiempoEstimadoHoras`).

## 5. Casos Probados
* **Caso Normal:** El vehículo `MNO-789` toma el puesto #1 por ser crítico. Los vehículos `JKL-012` y `XYZ-123` empatan en prioridad alta, pero `JKL-012` toma el puesto #2 porque se repara en 2 horas frente a las 4 horas del otro.
* **Caso Borde:** Al enviar un arreglo vacío, la validación inicial reacciona inmediatamente retornando `[]`, impidiendo que el método de ordenamiento falle o arroje un error en producción.

## 6. Cómo ejecutar la solución
1. Ubícate en tu carpeta personalizada: `resoluciones/cleidy-perez/`.
2. Ejecuta el archivo desde la consola con:
   ```bash
   node cleidy-perez.js