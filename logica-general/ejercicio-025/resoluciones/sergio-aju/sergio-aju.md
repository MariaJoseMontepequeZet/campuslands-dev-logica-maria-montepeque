# Plantilla de solucion

## Autor

Sergio Ajù

## Analisis
- **Entrada:** `servicios` (array de strings), `urgencia` (string: "alta", "media", "baja").
- **Proceso:** Evaluación de prioridad basada tanto en la etiqueta de urgencia como en el contenido específico de los servicios solicitados (búsqueda de "emergencia").
- **Salida:** Un objeto con la `atencion` definida y el `motivo` técnico.

## Reglas identificadas
1. **Prioridad Crítica:** Si la urgencia es "alta" o existe un servicio de "emergencia", el motor es la prioridad absoluta.
2. **Prioridad Media:** Si la urgencia es "media", se prioriza el sistema eléctrico.
3. **Prioridad Estándar:** Cualquier otro caso se gestiona como mantenimiento preventivo.

## Pruebas

### Caso normal
**Entrada:** `servicios: ["cambio-aceite"]`, `urgencia: "baja"`
**Resultado esperado:** `atencion: "Mantenimiento Preventivo"`, `motivo: "Atención programada por orden de llegada."`

### Caso borde
**Entrada:** `servicios: ["frenos", "emergencia"]`, `urgencia: "baja"`
**Resultado esperado:** `atencion: "Motor / Emergencia"`, `motivo: "Se priorizan reparaciones críticas para evitar daños mayores."`

## Explicacion final
La lógica utiliza una validación combinada: no solo confía en el parámetro de `urgencia`, sino que inspecciona el arreglo de `servicios` en busca de palabras clave como "emergencia". Esto evita que un vehículo con una falla crítica sea relegado a mantenimiento preventivo solo porque el usuario seleccionó una urgencia "baja" por error.

## Sugerencia
Antes de programar, establece el orden de ejecución:

| Condición | Acción |
| :--- | :--- |
| `Urgencia == "alta" || Servicios.includes("emergencia")` | Motor / Emergencia |
| `Urgencia == "media"` | Sistema Eléctrico |
| `Else` | Mantenimiento Preventivo |