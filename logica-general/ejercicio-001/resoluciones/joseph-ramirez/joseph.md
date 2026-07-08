## Justificación de la Entrega - Logica general 001

Volví a revisar el codigo porque sentí que la primera versión estaba muy larga y con mucho "if" repetido que se podia simplificar bastante. Al final decidi refactorizarlo para hacerlo mas corto pero manteniendo exactamente la misma logica de negocio competitiva y sin quitarle las validaciones importantes.

Para lograr esto use operadores ternarios encadenados adentro del "return". Se que a veces eso confunde pero para este ejercicio que son reglas directas queda super elegante y reduce un monton de lineas de codigo. Tambien aplique "optional chaining" con el `items?.length` al principio por que haci con una sola linea controlo si el arreglo viene vacio, nulo o dañado, evitando que el programa tire un error fatal.

Deje la lógica precalculada en un par de variables booleanas (`esBloqueado` y `esUrgente`) para que el ternario final no se volviera un dolor de cabeza al leerlo. Siento que de esta manera el codigo demuestra un nivel mas avanzado en java scrips pero sigue cumpliendo al cien por ciento con los requerimientos de la plataforma de Campuslands.

### Como probar la solucion
1. Abrir la terminal en la carpeta de la resolucion.
2. Ejecutar el comando `node joseph-ramirez.js`.
3. Veras los resultados de las 3 pruebas impresos de forma directa y limpia en la consola.