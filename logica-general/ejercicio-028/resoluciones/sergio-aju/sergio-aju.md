# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis
- **Entrada:** Un objeto `pelicula` con propiedades de año, clasificación, estado de restauración y efectos especiales.
- **Proceso:** Un flujo secuencial de 4 pasos (validación de antigüedad, clasificación, calidad técnica y aprobación final).
- **Salida:** Un objeto con el `estado` del flujo y un `motivo` detallado.

## Reglas identificadas
1. **Conservación:** Películas de más de 20 años deben estar marcadas como `restaurada` para ser aprobadas.
2. **Censura:** Las clasificaciones "R" o "NC-17" activan un flujo de restricción.
3. **Calidad:** Si falta la propiedad `tieneEfectosEspeciales`, el flujo queda en estado "Pendiente".

## Pruebas

### Caso normal
**Entrada:** `pelicula: { titulo: "Cyber Punk 2077", anio: 2025, clasificacion: "PG-13", tieneEfectosEspeciales: true }`
**Resultado esperado:** `estado: "Aprobado"`, `motivo: "Lista para estreno en salas."`

### Caso borde
**Entrada:** `pelicula: { titulo: "Retro Classic", anio: 1990, clasificacion: "PG", tieneEfectosEspeciales: true, restaurada: false }`
**Resultado esperado:** `estado: "Bloqueado"`, `motivo: "La película requiere proceso de restauración."`

## Explicacion final
He diseñado el flujo como una "tubería de validación". Cada paso actúa como un filtro; si la película no cumple una regla, el proceso se detiene y devuelve el error específico. Esto es más eficiente que evaluar todas las condiciones al mismo tiempo, ya que permite identificar rápidamente en qué parte del flujo falla la película.

## Sugerencia
Visualiza el proceso como una secuencia lógica:



| Paso | Regla | Acción si falla |
| :--- | :--- | :--- |
| 1 | `Antigüedad > 20 años` | Bloqueado (Necesita restauración) |
| 2 | `Clasificación R/NC-17` | Restringido (No apto público) |
| 3 | `Sin Efectos Especiales` | Pendiente (Añadir efectos) |