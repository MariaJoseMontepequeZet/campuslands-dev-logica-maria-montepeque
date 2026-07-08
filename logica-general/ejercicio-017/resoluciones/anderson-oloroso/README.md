# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`Array<Object>`) que representa el listado de espacios arquitectónicos proyectados. Cada objeto contiene el identificador `nombre` (String), el `area` en metros cuadrados (Number) y la cantidad de `ventanas` instaladas (Number).
- **Proceso:** - Iniciar acumuladores lineales numéricos para calcular de forma iterativa el área total del inmueble y el total de aberturas de ventilación.
  - Ejecutar un ciclo estructurado para inspeccionar cada espacio individualmente y calcular mediante una tabla de decisión su比 de iluminación (ventanas divididas entre metros cuadrados).
  - Evaluar las variables del sistema usando condicionales booleanos cruzados para contrastar los totales calculados frente a las restricciones del código de edificación.
- **Salida:** Un objeto con las propiedades estructurales `accion` y `motivo` determinando la viabilidad o el descarte inmediato del plano arquitectónico digitalizado.

## Reglas identificadas

1. **Restricción de Superficie Máxima (Cota Espacial):** El acumulado final de la suma de todas las áreas de las habitaciones del plano no debe sobrepasar bajo ninguna condición el límite estricto de 60 metros cuadrados ($A_{total} \le 60$).
2. **Norma Estricta de Iluminación Sostenible (Ratio Mínimo):** Cada habitación requiere obligatoriamente una superficie lumínica equivalente a por lo menos el 10% de su área total. Lógicamente expresado: $\frac{\text{ventanas}}{\text{area}} \ge 0.1$.
3. **Validación de Integridad:** Si una sola habitación falla en su ratio de iluminación, o si el espacio global excede el metraje, el plano cambia su estado lógico a inválido de forma irreversible (Operador lógico AND de condiciones de aprobación).

## Pruebas

### Caso normal

Entrada:
``` js
const habitacionesPropuestas = [
    { nombre: "Estudio", area: 20, ventanas: 2 },
    { nombre: "Habitación Single", area: 15, ventanas: 2 }
  ];
  ```

Resultado esperado:
accion: "Aprobar Plano Técnico -> Área Total: 35m², Ventanas Totales: 4"

motivo: "Todas las estancias cumplen iluminación"

### Caso borde

Entrada:
``` js
const habitacionesPropuestas = [
    { nombre: "Sala Principal", area: 25, ventanas: 3 },
    { nombre: "Dormitorio A", area: 12, ventanas: 1 },
    { nombre: "Cocina", area: 15, ventanas: 2 },
    { nombre: "Baño", area: 5, ventanas: 0 }
  ];
  ```

Resultado esperado:
accion: "Rechazar Plano Técnico -> Área Total: 57m², Ventanas Totales: 6"

motivo: "Fallo de diseño: No se cumple la norma de iluminación natural (mínimo 10% del área en ventanas). Habitaciones sin luz suficiente: [Dormitorio A, Baño]."

## Explicacion final

Este programa implementa el núcleo lógico de un sistema de validación automatizada para software de arquitectura y diseño paramétrico 3D (similar a las reglas de chequeo internas de programas como Revit o el ecosistema BIM).
