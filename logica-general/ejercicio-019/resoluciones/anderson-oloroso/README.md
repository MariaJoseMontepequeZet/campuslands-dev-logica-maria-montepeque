# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`Array<Object>`) que representa el inventario lógico de elementos químicos en el laboratorio. Cada objeto mapea la propiedad string `elemento` (símbolo químico) y la propiedad numérica entera `cantidadAtomos`.
- **Proceso:** - Iterar secuencialmente a través del inventario usando un ciclo para aislar y guardar las existencias de los átomos requeridos (Hidrógeno y Oxígeno).
  - Aplicar la ley de proporciones definidas mediante divisiones enteras truncadas para determinar cuántas unidades moleculares máximas puede aportar cada elemento de manera independiente.
  - Utilizar una función condicional de mínimo absoluto para definir el reactivo limitante que restringe la ecuación estequiométrica de síntesis.
- **Salida:** Un objeto con los campos `accion` y `motivo` detallando el éxito de la operación química en lote y los residuos sobrantes que permanecen en el inventario de stock.

## Reglas identificadas

1. **Proporción Estequiométrica Fija (Ley de Proust):** La generación de una molécula de agua requiere estrictamente una relación matemática fija de dos átomos de Hidrógeno por cada átomo de Oxígeno ($2\text{H} : 1\text{O}$).
2. **Principio del Reactivo Limitante:** La cantidad máxima de moléculas finales a sintetizar está estrictamente acotada por el elemento que se agote primero según la relación estequiométrica: $\min\left(\lfloor\frac{\text{H}}{2}\rfloor, \lfloor\frac{\text{O}}{1}\rfloor\right)$.
3. **Control de Desperdicios:** Los átomos sobrantes que no completen la proporción mínima requerida no se destruyen; se calculan matemáticamente y se conservan en memoria como remanentes de inventario.

## Pruebas

### Caso normal

Entrada:
``` js
const reactivosDisponibles = [
    { elemento: "H", cantidadAtomos: 4 },
    { elemento: "O", cantidadAtomos: 3 }
  ];
  ```

Resultado esperado:
accion: "Sintetizar -> 2 molécula(s) de Agua (H2O)"

motivo: "Reactivo limitante procesado con éxito. Sobrantes en almacén: [H: 0, O: 1]."

### Caso borde

Entrada:
``` js
const reactivosDisponibles = [
    { elemento: "H", cantidadAtomos: 1 },
    { elemento: "O", cantidadAtomos: 5 }
  ];
```

Resultado esperado:
accion: "Rechazar síntesis -> Elementos insuficientes"

motivo: "No se cuenta con el ratio estricto de estequiometría (2:1). Átomos actuales: [H: 1, O: 5]."

## Explicacion final
Este programa traduce las leyes de la estequiometría química a reglas informáticas lógicas de inventariado y asignación de recursos. Se utiliza para poder saber con precisión matemática si un sistema automatizado de control de laboratorio cuenta con los suministros atómicos suficientes para iniciar una reacción química controlada sin generar pérdidas críticas de reactivos caros
