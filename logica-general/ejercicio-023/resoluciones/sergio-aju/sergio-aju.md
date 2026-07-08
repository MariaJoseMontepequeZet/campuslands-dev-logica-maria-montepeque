# Plantilla de solución

## Autor:

Sergio Ajù

## Analisis
- **Entrada:** `puntos` (int), `penalizaciones` (int), `tieneFaltasGraves` (boolean).
- **Proceso:** Evaluación de condiciones jerárquicas: primero se descartan los casos disciplinarios graves, luego el rendimiento deportivo y finalmente se aplican advertencias por mal comportamiento.
- **Salida:** Un objeto con la `accion` a tomar y el `motivo` de la decisión.

## Reglas identificadas
1. **Descalificación inmediata:** Si `tieneFaltasGraves` es verdadero.
2. **Corte deportivo:** Si `puntos` es menor a 50.
3. **Revisión disciplinaria:** Si el equipo avanza pero tiene más de 5 `penalizaciones`.
4. **Estado estándar:** Si no aplica ninguna de las anteriores.

## Pruebas

### Caso normal
**Entrada:** `puntos: 70`, `penalizaciones: 2`, `tieneFaltasGraves: false`
**Resultado esperado:** `accion: "Avanza"`, `motivo: "Cumple con todos los requisitos deportivos."`

### Caso borde
**Entrada:** `puntos: 55`, `penalizaciones: 6`, `tieneFaltasGraves: false`
**Resultado esperado:** `accion: "Avanza con advertencia"`, `motivo: "Avanza por puntos, pero bajo revisión disciplinaria."`

## Explicacion final
He utilizado una estructura de condiciones en cascada. Es fundamental evaluar las reglas de descalificación antes que las de rendimiento, ya que un equipo puede tener muchos puntos pero haber cometido una falta grave que los excluya del torneo. Esto asegura que la integridad de la competencia se mantenga antes de valorar los números.

## Sugerencia
Antes de programar, visualiza el flujo de decisión para asegurar que no existan contradicciones:

| Condición | Resultado |
| :--- | :--- |
| `FaltasGraves == true` | Eliminado |
| `Puntos < 50` | Eliminado |
| `Puntos >= 50 && Pen > 5` | Avanza con advertencia |
| `Resto de casos` | Avanza |