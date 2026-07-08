# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`Array<Object>`) que simula la comanda de un puesto de comida urbana en una app de delivery. Cada objeto contiene el nombre del `plato` (String), la `categoria` (String), el `precio` neto (Number) y la `distanciaKM` (Number) al destino.
- **Proceso:** - Utilizar un ciclo iterativo para sumar el costo total de los platillos solicitados en el lote del pedido.
  - Evaluar la distancia máxima registrada entre todos los elementos de la orden urbana mediante una estructura de comparación consecutiva.
  - Implementar una estructura condicional anidada de árbol de decisión para mapear el costo del envío y el medio de transporte correspondiente según el perfil financiero y geográfico.
- **Salida:** Un objeto con los campos descriptivos de resolución `accion` y `motivo`, indicando el vehículo seleccionado, los cobros detallados y la justificación de la ruta de entrega.

## Reglas identificadas

1. **Corte por Distancia Crítica (Prioridad Mecánica):** Si la distancia de un solo elemento del despacho supera estrictamente los 4 kilómetros ($D_{max} > 4$), la orden exige motocicleta express obligatoriamente y se anula cualquier promoción de envío gratis, cobrando una tarifa plana de $5.
2. **Umbral de Incentivo por Volumen (Envío Gratis):** Si el costo de los alimentos es igual o superior a los $20 ($\sum P \ge 20$) AND el pedido se mantiene dentro del radio de seguridad ($\le 4\text{KM}$), el costo del envío se reduce lógicamente a $0 y se asigna un repartidor en bicicleta.
3. **Tarifa Base Convencional:** Si el pedido no califica para envío gratuito por bajo consumo y está dentro del rango geográfico seguro, se aplica un recargo logístico base de $2 en transporte ecológico.

## Pruebas

### Caso normal

Entrada:
``` js
const carritoPedidos = [
    { plato: "Tacos de Asada", categoria: "Tradicional", precio: 6, distanciaKM: 1.5 },
    { plato: "Gringas de Pollo", categoria: "Tradicional", precio: 7, distanciaKM: 2.0 }
  ];
  ```

Resultado esperado:
accion: "Despachar Pedido -> Logística: Enviar en Bicicleta (Standard)"

motivo: "Consumo estándar ($13). Envío base de $2 dentro del radio seguro. Total a cobrar: $15."

### Caso borde

Entrada:
``` js
const carritoPedidos = [
    { plato: "Hamburguesa Callejera", categoria: "Comida Rápida", precio: 8, distanciaKM: 2 },
    { plato: "Tacos de Asada", categoria: "Tradicional", precio: 6, distanciaKM: 1.5 },
    { plato: "Hot Dog Gigante", categoria: "Comida Rápida", precio: 5, distanciaKM: 4.5 },
    { plato: "Gringas de Pollo", categoria: "Tradicional", precio: 7, distanciaKM: 3.2 }
  ];
```
Resultado esperado:
accion: "Despachar Pedido -> Logística: Enviar en Motocicleta (Express)"

motivo: "Distancia crítica detectada (4.5KM > 4KM). Tarifa fija de envío aplicada: $5. Total a cobrar: $31."

## Explicacion final
Este algoritmo resuelve el problema de la asignación y tarificación en la logística de última milla para negocios locales de comida rápida y urbana. Se utiliza para poder saber instantáneamente de qué forma despachar un pedido sin perder margen de ganancia por la distancia recorrida ni retrasar los tiempos de entrega.
