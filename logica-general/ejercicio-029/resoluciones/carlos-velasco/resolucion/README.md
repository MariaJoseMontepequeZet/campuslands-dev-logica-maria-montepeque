# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `personaje` con las propiedades: `energia` (número), `tieneArma` (booleano), `estaEscondido` (booleano) y `monstruoCerca` (booleano).
* **Proceso**: Evaluación jerárquica mediante lógica condicional anidada para determinar el estado actual y la acción más adecuada para asegurar la supervivencia.
* **Salida**: Un objeto que define el `estado` del personaje y la `accion` sugerida para el turno actual.

## Reglas identificadas

1. Si `estaEscondido` es verdadero, el personaje está "A salvo" independientemente de otras variables.
2. Si `monstruoCerca` es verdadero:
* Con arma: "Defensa exitosa".
* Sin arma y baja energía (< 20): "Atrapado".
* Sin arma y energía suficiente: "Huida desesperada".


3. Si no hay peligro, el estado por defecto es "Explorando".

## Pruebas

### Caso normal

* **Entrada**: `{ energia: 50, tieneArma: true, estaEscondido: false, monstruoCerca: true }`
* **Resultado esperado**: `{ estado: "Defensa exitosa", accion: "El monstruo retrocede." }`

### Caso borde

* **Entrada**: `{ energia: 10, tieneArma: false, estaEscondido: false, monstruoCerca: true }`
* **Resultado esperado**: `{ estado: "Atrapado", accion: "Demasiado cansado para correr." }`

## Explicacion final

La solución funciona mediante una lógica de cascada o jerarquía de prioridades. Al evaluar primero el estado de sigilo (`estaEscondido`), filtramos inmediatamente los casos donde el peligro es irrelevante. Posteriormente, el bloque anidado bajo `monstruoCerca` desglosa los recursos del personaje (arma y energía), asegurando que la IA siempre tome la decisión óptima basada en el inventario y capacidades físicas actuales, emulando un comportamiento de supervivencia realista.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Sigilo)**: `if (personaje.estaEscondido)`
* **Regla 2a (Defensa)**: `if (personaje.monstruoCerca && personaje.tieneArma)`
* **Regla 2b (Fatiga)**: `else if (personaje.energia < 20)`