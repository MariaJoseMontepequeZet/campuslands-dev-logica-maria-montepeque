## Justificación de la Entrega - Logica matematica 005

Para finalizar este quinto ejercicio de logica matematica sobre minimos y limites en el taller mecanico, decidi estructurar una solucion que fuera super directa y compacta con funciones flecha, demostrando un uso avanzado de java scrips sin dar tantas vueltas.

Use el metodo de arreglos `.reduce()` para resolver de un solo viaje la sumatoria de los datos de control, y dividi ese total por la cantidad de elementos para sacar la media aritmetica de los limites. A este calculo le sume el bono y le reste la penalizacion de las reglas del negocio, aplicandole un `Math.round` al final por si daban decimales, garantizando haci que devuelva el numero entero exacto que pide el ejemplo de la guia.

El programa viene protegido desde la primera linea con un "early return" usando `!participantes?.length` por si la base de datos o el formulario manda un dato corrupto o vacio, evitando de esta forma que el script reviente feo en la consola de comandos. Funciona de manera nativa sin librerias externas de node.

### Como ejecutar la solucion
1. Abrir la terminal de comandos adentro de la carpeta de mi resolucion.
2. Ejecutar el archivo usando el comando `node joseph-ramirez.js`.
3. En la consola se desplegaran limpiamente los tres casos de prueba: el caso de la guia que da 27 competitivo, el control del caso borde con datos nulos y mi caso propio para limites minimos de stock