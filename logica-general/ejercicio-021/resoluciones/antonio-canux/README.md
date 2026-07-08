# Ejercicio 021 - Clasificación por reglas

**Camper:** Antonio Canux

## Analisis

- Entrada: En la entrada recibimos un objeto qu representa a un jugador, el cual incluye sus propiedades: estado (string), ping (número) y copas (número).
- Proceso: Evaluamos de manera secuencial los datos utilizando nuestras estructuras condicionales (if, else), procesando según el orden de prioridad.
- Salida: Y por último, sale un objeto con dos textos: acción (qué debe hacer el sistema respecto al jugador) y motivo (la justificación de l por qué esta acción).

## Reglas identificadas

1. Restricción de seguridad: A esta la consideramos de crítica, ya que si el jugador se encuentra en estado de baneado, se le bloquea de la partida inmediatamente, sin importar sus estadísticas.
2. Restricción de rendimiento: Dde importancia media, si la latencia supera los 120ms, se pausa las búsqueda para asegurar la calidad de la partida.
3. Clasificación: De baja importancia, si la cuenta está limpia  y la conexión es estable, se le asigna un rango correspondiente a sus copas: Mítico (>= 2000), Leyenda (>= 1000) o Guerrero (< 1000).

## Pruebas

### Caso normal

```JavaScript 
//Entrada:
{ nombre: "GamerPro", estado: "activo", ping: 45, copas: 2100 }
```

```JavaScript
//Resultado esperado:
{ 
  accion: "emparejar en rango Mítico", 
  motivo: "el jugador cumple las condiciones de seguridad y tiene conexión estable." 
}
```

### Caso borde

```JavaScript
//Entrada:
{ nombre: "Toxic", estado: "baneado", ping: 20, copas: 5000 }
```

```JavaScript
//Resultado esperado:
{ nombre: "Toxic", estado: "baneado", ping: 20, copas: 5000 }
```

## Explicacion final

La solución funciona porque utiliza un modelo de validación de "salida anticipada" (early return). En lugar de evaluar todos los datos a la vez y crear condicionales complejos o anidados, el código verifica primero los escenarios negativos o excluyentes (estar baneado o tener mucho lag). Si una de estas reglas críticas se cumple, el algoritmo se detiene y devuelve el resultado. Esto asegura que el sistema jamás intente emparejar a un jugador problemático, manteniendo la lógica limpia, ordenada y fácil de mantener.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
