# Plantilla de solucion

## Autor

Sergio Ajù

## Analisis

- **Entrada:** Un arreglo de objetos, donde cada objeto contiene el `nombre` y el `peso` (número) del peleador.
- **Proceso:** Clasificación mediante un ciclo de iteración y comparaciones lógicas para distribuir a los peleadores en categorías de peso predefinidas.
- **Salida:** Un objeto que agrupa los nombres de los peleadores en sus respectivas categorías (pluma, welter, pesado).

## Reglas identificadas

1. **Pluma:** Peso < 60 kg.
2. **Welter:** Peso entre 60 kg y 79 kg.
3. **Pesado:** Peso >= 80 kg.

## Pruebas

### Caso normal

**Entrada:** `[{nombre: "Alex", peso: 55}, {nombre: "Bruno", peso: 70}]`

**Resultado esperado:** `{pluma: ["Alex"], welter: ["Bruno"], pesado: []}`

### Caso borde

**Entrada:** `[{nombre: "Dany", peso: 80}]`

**Resultado esperado:** `{pluma: [], welter: [], pesado: ["Dany"]}`

## Explicacion final

El problema fue resuelto mediante un ciclo `for` que permite recorrer la lista completa de peleadores. La lógica de clasificación se basa en rangos numéricos, lo que asegura que cada peleador sea asignado a su categoría correcta de forma automática. La estructura de un objeto `catalogo` facilita la consulta posterior de los resultados.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para una mejor escalabilidad, considera definir los límites de peso como constantes externas, facilitando cambios en las reglas del torneo sin necesidad de modificar la lógica del ciclo principal.