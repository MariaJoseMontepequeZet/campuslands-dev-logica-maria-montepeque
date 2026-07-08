# Ejercicio 28 - Películas de Ciencia Ficción

**Camper:** Antonio Canux

## Analisis

- **Entrada:** La función recibe un objeto `pelicula` obtenido de una base de datos o API, que contiene las propiedades `titulo`, `idGenero`, `rutaPoster` y `anio`.
- **Proceso:** Se implementa un flujo de control paso a paso (pipeline de validación). En lugar de evaluar todo a la vez, el código verifica un requisito y, si falla, detiene el proceso inmediatamente (`early return`). Primero evalúa si el género es el correcto (ID 878 para ciencia ficción). Si lo es, pasa al siguiente paso para comprobar si tiene un póster. Si ambas pruebas se superan, llega al paso final donde formatea el objeto para la vista dinámica.
- **Salida:** Un objeto estructurado con el `estado` de la evaluación y los `datos` listos para renderizar (que serán `null` si el proceso fue interrumpido).

## Reglas identificadas

1. El sistema debe descartar inmediatamente cualquier registro que no coincida con el ID de género de ciencia ficción (878).
2. Un registro de ciencia ficción no puede avanzar a la interfaz si no tiene la ruta de la imagen, para evitar componentes rotos visualmente.
3. Solo si los pasos 1 y 2 se cumplen, la información cruda se transforma en un nuevo objeto formateado listo para inyectarse en el DOM.

## Pruebas

### Caso normal

Entrada: `{ titulo: "Interstellar", idGenero: 878, rutaPoster: "/gEU2QlsUUHXjNpevd8AsuZeC8M.jpg", anio: 2014 }`

Resultado esperado: 
```text
estado: "Aprobada: Flujo completado. Película lista para renderizar."
datos: { tituloMostrado: "INTERSTELLAR", imagenUrl: "[https://image.tmdb.org/t/p/w500/gEU2QlsUUHXjNpevd8AsuZeC8M.jpg](https://image.tmdb.org/t/p/w500/gEU2QlsUUHXjNpevd8AsuZeC8M.jpg)", lanzamiento: 2014 }
```

### Caso borde
Entrada: `{ titulo: "Gladiator", idGenero: 28, rutaPoster: "/ty8TGRuvJLPUmAR1H1nRIsgwvq0.jpg", anio: 2000 }`

Resultado esperado:

```text
estado: "Rechazada en Paso 1: La película no pertenece al género de ciencia ficción."
datos: null
```

## Explicacion final
La solución funciona gracias a la implementación de un patrón de salidas tempranas (early returns). En la construcción de aplicaciones, procesar datos crudos en cadena es fundamental. Al validar paso a paso, evitamos hacer operaciones innecesarias (como concatenar URLs de imágenes o transformar textos) sobre objetos que de todos modos iban a ser descartados por no pertenecer a la categoría solicitada. Esto hace que el código sea muy eficiente y que cada condición se lea claramente como una compuerta en un flujo.