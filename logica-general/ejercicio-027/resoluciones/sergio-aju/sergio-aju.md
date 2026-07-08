# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis
- **Entrada:** Un arreglo de objetos `playlist`, donde cada objeto contiene `titulo` (string) y `duracion` (int en segundos).
- **Proceso:** Se recorre la lista para identificar duplicados mediante un `Set` y verificar reglas de negocio sobre la duración mínima.
- **Salida:** Un objeto indicando si la lista es válida ("OK") o reportando una lista de inconsistencias detectadas.

## Reglas identificadas
1. **Unicidad:** No se permiten canciones repetidas (mismo título).
2. **Duración mínima:** Las canciones deben durar al menos 30 segundos para ser consideradas válidas.

## Pruebas

### Caso normal
**Entrada:** `[{ titulo: "Song A", duracion: 200 }, { titulo: "Song B", duracion: 300 }]`
**Resultado esperado:** `estado: "OK"`, `mensaje: "Playlist válida."`

### Caso borde
**Entrada:** `[{ titulo: "Intro", duracion: 10 }, { titulo: "Intro", duracion: 10 }]`
**Resultado esperado:** `estado: "Error"`, `detalles: ["Posición 1: La canción 'Intro' está duplicada.", "Posición 0: La canción 'Intro' es demasiado corta."]`

## Explicacion final
He utilizado un objeto `Set` para rastrear las canciones ya vistas, lo cual permite detectar duplicados con una complejidad temporal de O(n). La verificación de la duración es una regla de filtrado simple que permite asegurar la calidad de la playlist. Este enfoque permite escalar a miles de canciones sin perder rendimiento.

## Sugerencia
Antes de programar, clasifica los tipos de errores que quieres atrapar:

| Error | Regla |
| :--- | :--- |
| Duplicado | `nombre en Set previamente` |
| Duración | `duracion < 30` |
| Formato | `typeof duracion !== 'number'` |