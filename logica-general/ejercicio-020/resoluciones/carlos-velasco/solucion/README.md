# Plantilla de solución

## Analisis

* **Entrada**: `presupuesto` (cantidad numérica) y `hambre` (nivel de hambre del 1 al 10).
* **Proceso**: Evaluación de condiciones jerárquicas que cruzan el nivel de `hambre` y el `presupuesto` para determinar la opción de menú más adecuada.
* **Salida**: Un objeto que define la `seleccion` del menú y un `motivo` explicativo para el usuario.

## Reglas identificadas

1. Si el hambre es > 8 y el presupuesto es >= 15, se selecciona el "Combo especial".
2. Si el hambre es <= 8 y el presupuesto es >= 10, se selecciona el "Menú básico".
3. Si el presupuesto es < 10 (pero > 0), se selecciona la "Opción económica"; si el presupuesto es 0 o negativo, no hay opciones.

## Pruebas

### Caso normal

* **Entrada**: `presupuesto: 20, hambre: 9`
* **Resultado esperado**: `{ seleccion: "Combo especial", motivo: "Nivel de hambre alto y presupuesto suficiente para el combo premium." }`

### Caso borde

* **Entrada**: `presupuesto: 5, hambre: 5`
* **Resultado esperado**: `{ seleccion: "Opción económica", motivo: "Presupuesto limitado, sugerencia de plato del día." }`

## Explicacion final

La solución funciona mediante una **estructura de decisión secuencial** que prioriza los perfiles de usuario según su capacidad de pago y necesidades nutricionales. Al evaluar primero el escenario premium, garantizamos que el sistema siempre intente ofrecer la mejor opción posible si el presupuesto lo permite. Las validaciones posteriores actúan como filtros decrecientes, asegurando que, incluso en situaciones de recursos limitados, el usuario reciba una sugerencia válida o una notificación clara si el presupuesto es insuficiente, evitando así errores de lógica.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1**: `hambre > 8 && presupuesto >= 15`
* **Regla 2**: `hambre <= 8 && presupuesto >= 10`
* **Regla 3**: `presupuesto < 10 && presupuesto > 0`