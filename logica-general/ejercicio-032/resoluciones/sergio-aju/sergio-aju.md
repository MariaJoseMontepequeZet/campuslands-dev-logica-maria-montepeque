# Plantilla de solucion

## Autor: 

Sergio Ajú

## Analisis

- **Entrada:** Dos objetos que representan raquetas, cada uno con `nombre`, `control` (nivel de precisión) y `velocidad`.
- **Proceso:** Se aplica una jerarquía de condiciones: primero comparamos el `control`. Si los valores son iguales, pasamos a comparar la `velocidad` como factor de desempate.
- **Salida:** Un objeto con el nombre de la raqueta ganadora y el motivo lógico de la elección.

## Reglas identificadas

1. **Prioridad de Control:** El control es el atributo más importante en el juego.
2. **Desempate:** En caso de empate técnico en control, la raqueta más rápida gana la comparativa.
3. **Igualdad:** Si ambos atributos son idénticos, el sistema reporta que no hay una mejor opción.

## Pruebas

### Caso normal

**Entrada:** 
- Raqueta A: `{ nombre: "Butterfly", control: 8, velocidad: 7 }`
- Raqueta B: `{ nombre: "Stiga", control: 8, velocidad: 9 }`

**Resultado esperado:**
```json
{
  "mejor": "Stiga",
  "motivo": "Empate en control, mayor velocidad."
}