## Justificación de la Entrega - Logica matematica 001

Para este ejercicio de logica matematica quise irme por una solucion que fuera corta pero bastante eficiente usando funciones nativas de java scrips. En ves de ponerme a armar un ciclo "for" gigante para sumar los puntajes de los participantes, use el metodo `.reduce()` que me hace la operacion de la suma en una sola linea de codigo bien limpia.

Saque el promedio de los participantes dividiendo la suma total entre la cantidad de elementos, y a eso le aplique directamente las operaciones del bono y la penalizacion. Use `Math.round` para que el puntaje final quedara como un numero entero redondeado por si las moscas daban decimales, evitando que se mirara feo en la salida.

Tambien me asegure de meter la validacion con "optional chaining" al principio por que si mandan el array de participantes vacio o si los bonos no son numeros, el programa retorna un error controlado y no se cae a mitad de la ejecucion. Clasifique el resultado usando un ternario directo para que el codigo demuestre un buen manejo de la sintaxis moderna de Campuslands sin perder nada de logica.

### Como ejecutar la solucion
1. Entrar a la terminal en mi carpeta personal.
2. Correr el comando `node joseph-ramirez.js`.
3. Ahi se van a desplegar las tres pruebas: la del ejemplo que da 27 competitivo, la de control de errores y mi prueba propia con puntajes mas bajos.