# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `personaje` con propiedades `estado` (string) y `evento` (string).
* **Proceso**: Evaluación de condiciones jerárquicas que combinan el estado actual y el evento ambiental para determinar un nuevo estado y una razón explicativa.
* **Salida**: Un objeto que contiene el `nuevoEstado` y el `motivo` de la resolución.

## Reglas identificadas

1. Si el estado es "escondido" y el evento es "monstruo cerca", el resultado es "sobrevive".
2. Si el estado es "corriendo" y el evento es "trampa", el resultado es "herido".
3. Si el evento es "monstruo cerca" (y no se cumple la regla 1), el resultado es "eliminado".

## Pruebas

### Caso normal

* **Entrada**: `{ estado: "escondido", evento: "monstruo cerca" }`
* **Resultado esperado**: `{ nuevoEstado: "sobrevive", motivo: "Te ocultaste a tiempo." }`

### Caso borde

* **Entrada**: `{ estado: "corriendo", evento: "monstruo cerca" }`
* **Resultado esperado**: `{ nuevoEstado: "eliminado", motivo: "El monstruo te encontró." }`

## Explicacion final

La solución funciona mediante una **jerarquía de validaciones condicionales**. Al colocar las reglas más específicas al inicio (como la supervivencia mediante ocultamiento), se garantiza que el sistema tome decisiones precisas antes de aplicar reglas más generales (como la eliminación por monstruo). El uso de un retorno predeterminado al final asegura que el personaje siempre tenga una respuesta lógica, incluso ante eventos no críticos.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Victoria)**: `estado === "escondido" && evento === "monstruo cerca"`
* **Regla 2 (Daño)**: `estado === "corriendo" && evento === "trampa"`
* **Regla 3 (Derrota)**: `evento === "monstruo cerca"` (evaluado después de la Regla 1)