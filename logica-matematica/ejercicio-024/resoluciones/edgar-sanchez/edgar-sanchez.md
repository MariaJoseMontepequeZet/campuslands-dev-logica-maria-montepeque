# Plantilla de solucion

## Analisis
El problema se diseñó para gestionar el inventario de una concesionaria de motocicletas, controlando que las existencias de diferentes modelos se mantengan dentro de un rango operativo óptimo (mínimo y máximo permitidos). En la administración de cadenas de suministro, verificar que el inventario no supere la capacidad física de almacenamiento (sobrestock) ni caiga por debajo del stock de seguridad (desabastecimiento) permite automatizar alertas de reabastecimiento o detención de pedidos.

- Entrada: Cantidad actual de motocicletas en stock (entero), límite mínimo de seguridad (entero) y límite máximo de capacidad de la bodega (entero).
- Proceso: 
  1. Validar la consistencia de los rangos de control proporcionados.
  2. Evaluar si el stock actual es menor al límite mínimo para activar una alerta de compra.
  3. Evaluar si el stock actual supera el límite máximo para activar una alerta de sobrestock.
  4. Si se encuentra dentro del rango inclusivo, calcular cuántas unidades faltan para alcanzar la capacidad máxima.
- Salida: Un objeto que contiene el estado del inventario ("Desabastecido", "Óptimo", "Sobrestock" o "Error") y las unidades disponibles antes de saturar el almacén.

## Reglas identificadas
1. Validación de Consistencia de Rango: El límite máximo debe ser estrictamente mayor que el límite mínimo, y ambos valores deben ser mayores o iguales a cero. De lo contrario, se reporta un estado de "Error".
2. Determinación de Estados de Control: 
   - Si $stock < minimo$, el estado es "Desabastecido".
   - Si $stock > maximo$, el estado es "Sobrestock".
   - Si $minimo \leq stock \leq maximo$, el estado es "Óptimo".
3. Cálculo de Margen de Almacenamiento: El espacio disponible para recibir nuevas motocicletas se calcula como $maximo - stock$. Si el stock actual ya supera el máximo, el espacio disponible es estrictamente 0.

## Pruebas

### Caso normal (Stock óptimo)
Entrada: stockActual = 15, limiteMinimo = 5, limiteMaximo = 25
Resultado esperado: { "estado": "Óptimo", "unidadesDisponibles": 10 }

### Caso desabastecido
Entrada: stockActual = 3, limiteMinimo = 5, limiteMaximo = 25
Resultado esperado: { "estado": "Desabastecido", "unidadesDisponibles": 22 }

### Caso borde (Inconsistencia de límites)
Entrada: stockActual = 10, limiteMinimo = 30, limiteMaximo = 20
Resultado esperado: { "estado": "Error", "unidadesDisponibles": 0 }

## Explicacion final
La solución funciona porque establece primero una barrera de control para validar las reglas de negocio de los rangos numéricos y posteriormente clasifica el inventario mediante condicionales mutuamente excluyentes.