# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`Array<Object>`) con el estado físico y operativo de las estaciones de trabajo. Cada objeto contiene la clave numérica `idEstacion`, la técnica aplicada `tipo` (String), la `temperaturaActual` en grados Celsius (Number) y las `piezasCompletadas` en el turno (Number).
- **Proceso:** - Inicializar un acumulador entero secuencial para cuantificar el volumen de producción total del lote o turno.
  - Recorrer mediante un ciclo for la estructura de datos para evaluar las propiedades de calor de cada estación industrial frente a una tabla de condiciones críticas.
  - Almacenar en una estructura de lista los identificadores de los equipos comprometidos térmicamente y computar el estado final mediante lógica booleana cruzada.
- **Salida:** Un objeto estructurado con las claves `accion` y `motivo` que define la continuidad operativa del taller o la activación inmediata de un protocolo de mantenimiento preventivo.

## Reglas identificadas

1. **Umbral de Seguridad Térmica (Cota Crítica):** Ninguna máquina de soldadura (MIG/TIG) puede operar por encima de los 200°C ($T \le 200$). Si supera este límite, se clasifica automáticamente en estado de riesgo de fundición o daño estructural.
2. **Cuota Mínima de Producción del Turno:** Para que un turno de manufactura se considere comercialmente eficiente, la sumatoria agregada de todas las piezas soldadas debe ser igual o superior a 10 unidades ($\sum P \ge 10$).
3. **Condición de Turno Limpio:** Un turno se aprueba de forma óptima sin novedades si y solo si se alcanza la cuota de producción AND el conjunto de estaciones sobrecalentadas tiene una cardinalidad exactamente igual a cero.

## Pruebas

### Caso normal

Entrada:
``` js
const estacionesSoldadura = [
    { idEstacion: 1, tipo: "MIG", temperaturaActual: 180, piezasCompletadas: 6 },
    { idEstacion: 2, tipo: "TIG", temperaturaActual: 195, piezasCompletadas: 5 }
  ];
  ```

Resultado esperado:
accion: "Turno Exitoso -> Producción Total: 11 piezas. Proceder con el cierre estándar."

motivo: "Todas las máquinas operan en rangos térmicos seguros"

### Caso borde

Entrada:
``` js
const estacionesSoldadura = [
    { idEstacion: 1, tipo: "MIG", temperaturaActual: 180, piezasCompletadas: 4 },
    { idEstacion: 2, tipo: "TIG", temperaturaActual: 240, piezasCompletadas: 5 },
    { idEstacion: 3, tipo: "MIG", temperaturaActual: 150, piezasCompletadas: 3 }
  ];
  ```

Resultado esperado:
accion: "Turno con Novedades -> Producción Total: 12 piezas. Aplicar protocolo de contingencia."

motivo: "Parada técnica obligatoria: Producción alcanzada, pero se detectaron estaciones sobrecalentadas. Estaciones sobrecalentadas: [Estación 2 (TIG)]."

## Explicacion final
Este desarrollo plantea la lógica de control para un sistema SCADA o de gestión de manufactura integrada por computadora (CIM) adaptada a un taller de soldadura industrial. Se utiliza para poder saber si las metas de producción se alcanzaron dentro de los parámetros físicos de seguridad que garantizan la vida útil del equipo.