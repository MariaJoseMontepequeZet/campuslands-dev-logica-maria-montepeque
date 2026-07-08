## Justificación de la Entrega - Logica general 006

Para este sexto ejercicio basado en la busqueda de elementos para un lote de autos hiperdeportivos, implemente una solucion avanzada pero super corta con funciones flecha para mantener impecable mi carpeta de entregas de Campuslands.

Estableci un par de constantes booleanas (`esBloqueado` y `esPendienteUrgente`) combinadas con el metodo nativo `.includes()` de java scrips para escanear y buscar de inmediato si algun componente o vehiculo del lote tiene una alerta critica. Esto lo diseñe haci porque en el control de calidad de autos hiperdeportivos lo primero que se debe interceptar son las fallas mecanicas o bloqueos de telemetria antes de liberar el coche para pruebas de pista.

Le deje puesto el filtro de seguridad `!items?.length` al inicio para asegurar de una ves que si el sistema manda parametros vacios o dañados, el script responda de forma controlada con un mensaje limpio en ves de crashear feo en la consola. No uso ninguna libreria de afuera por lo que corre de forma totalmente independiente.

### Como ejecutar la solucion
1. Abrir la consola de comandos adentro de la carpeta de este ejercicio.
2. Ejecutar el archivo usando el comando `node joseph-ramirez.js`.
3. En la terminal saldran impresas las tres pruebas: la de la guia para validar el resultado, el caso borde con entradas nulas y mi caso propio para un escaneo de hypercars completamente limpio