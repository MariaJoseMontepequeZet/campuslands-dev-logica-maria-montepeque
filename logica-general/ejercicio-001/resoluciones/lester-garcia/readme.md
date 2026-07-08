# Plantilla de solucion

## Analisis

- Entrada: Una lista de jugadores reportados (`jugadores`) y una directriz de prioridad (`regla`).
- Proceso: El sistema evalúa si la regla recibida coincide con la prioridad de seguridad. Si coincide, busca mediante una condición si el valor "hacker" está presente en la lista para tomar una acción inmediata; en caso contrario, deriva el flujo a los reportes comunes.
- Salida: Un objeto con la acción definitiva a ejecutar y el motivo lógico de la decisión.

## Reglas identificadas

1. Si la regla es "banear hackers primero" y se detecta un "hacker" en la lista, se prioriza su baneo inmediato y se cierra la partida para proteger el entorno competitivo.
2. Si la regla es "banear hackers primero" pero no existe ningún "hacker" en la lista de reportados, el sistema debe continuar con la revisión de las faltas menores (como "toxico" o "afk").
3. Si la regla ingresada no coincide con ninguna instrucción del sistema, la solicitud se omite por falta de parámetros válidos.

## Pruebas

### Caso normal

Entrada:
- jugadores: ["toxico", "afk", "hacker"]
- regla: "banear hackers primero"

Resultado esperado:
- accion: "banear jugador y cerrar partida"
- motivo: "la regla prioriza la integridad competitiva ante reportes menores."

### Caso borde

Entrada:
- jugadores: ["toxico", "afk", "toxico"]
- regla: "banear hackers primero"

Resultado esperado:
- accion: "revisar reportes de comportamiento"
- motivo: "no hay hackers en la partida, se procede con la lista normal."

## Explicacion final

La solución funciona porque utiliza condicionales anidados que separan el control del negocio en dos capas: primero verifica que la regla solicitada exista en el sistema, y segundo, comprueba la existencia real del elemento crítico ("hacker") dentro de los datos de entrada. Esto evita que el sistema tome acciones erróneas o se detenga cuando la condición principal de la regla no se cumple en la partida, garantizando estabilidad y un orden jerárquico automatizado.