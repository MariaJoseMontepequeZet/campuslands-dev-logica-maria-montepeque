## Justificación de la Entrega - Logica general 004

Para cumplir con este cuarto ejercicio basado en filtros por condiciones para un inventario de motos, segui aplicando una estructura avanzada pero super corta con funciones flecha y operadores ternarios para no meter lineas por gusto.

Estableci variables booleanas claras (`esBloqueado` y `esPendienteUrgente`) que me sirven para filtrar directo las motos que tienen retenes o alertas criticas. Esto lo ise haci porque en un inventario real lo primero que hay que apartar son los productos dañados o trabados antes de mandar a despachar todo lo demas de forma normal.

Le deje puesto el seguro de `!items?.length` al inicio para asegurarme de que si la base de datos o el formulario manda un dato en blanco, el script no reviente en la consola y devuelva una accion controlada de error. No dependo de ninguna libreria externa de node asi que corre directo y limpio como pide la plataforma de Campuslands.

### Como ejecutar la solucion
1. Abrir la consola en la ruta de este ejercicio.
2. Ejecutar el archivo usando el comando `node joseph-ramirez.js`.
3. En la terminal saldran impresas las tres pruebas automatizadas: la de la guia con el resultado esperado, el caso borde de control y mi prueba propia con el stock liberado.