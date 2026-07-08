# Reto: Sistema de Organización y Categorización - Kickboxing 

Este repositorio contiene la arquitectura lógica y el código de resolución para el reto de organización de listas y clasificación por atributos aplicado al registro de atletas de kickboxing. El propósito central de este ejercicio no es memorizar líneas de código, sino analizar un escenario deportivo, traducirlo en reglas lógicas de negocio y estructurar un algoritmo ordenado y predecible.

---

## Objetivo del Reto

Crear una solución interactiva por interfaz de línea de comandos (CLI) que reciba los datos físicos y de rendimiento de un peleador, aplique reglas directas de rango y peso, y devuelva una ficha técnica de inscripción completamente verificable.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `nombre_atleta`: Cadena de texto (`str`) que almacena el nombre cualitativo del peleador, sanitizado con `.strip()`.
  - `peso_kg`: Valor numérico decimal de punto flotante (`float`) que registra la masa corporal del competidor.
  - `combates_ganados`: Valor numérico entero (`int`) que representa el historial de victorias acumuladas.
- **Proceso:**
  - **Bifurcación por Rangos de Peso:** Una estructura condicional `if-elif-else` evalúa el peso en límites ascendentes cerrados para organizar al atleta en su lista correspondiente.
  - **Segmentación de Experiencia:** Un segundo bloque de control independiente analiza el volumen de victorias para determinar la jerarquía deportiva del competidor.
- **Salida:**
  - `division`: Cadena de texto (`str`) con el veredicto de la categoría de peso asignada (Pluma, Welter o Pesado).
  - `rango`: Cadena de texto (`str`) que describe el nivel de competencia técnica (Rookie, Contendiente o Élite).

## Reglas identificadas

1. **División Peso Pluma:** Todo atleta con un peso menor o igual a los 65.0 kg (`<= 65.0`).
2. **División Peso Welter:** Atletas que superen el límite pluma pero pesen menos o igual a 75.0 kg (`<= 75.0`).
3. **División Peso Pesado:** Cualquier pesaje que exceda estrictamente los 75.0 kg (`else`).
4. **Clasificación por Récord:**
   - Menos de 5 victorias (`< 5`): Rango **Rookie**.
   - De 5 a 15 victorias (`<= 15`): Rango **Contendiente**.
   - Más de 15 victorias (`else`): Rango **Élite**.

## Pruebas

### Caso normal

- **Entrada:**
  - `nombre_atleta`: José Rodríguez
  - `peso_kg`: 72.5
  - `combates_ganados`: 12
- **Resultado esperado:**
  - `División de Peso:  Peso Welter (72.5 kg)`
  - `Rango del Atleta:  Contendiente (12 victorias)`

### Caso borde

- **Entrada:**
  - `nombre_atleta`: Peleador Élite
  - `peso_kg`: 65.0
  - `combates_ganados`: 5
- **Resultado esperado:**
  - `División de Peso:  Peso Pluma (65.0 kg)`
  - `Rango del Atleta:  Contendiente (5 victorias)`
  *(Prueba la precisión de los comparadores lógicos en sus límites exactos: 65.0 kg queda contenido en Pluma debido al `<=`, y 5 victorias activa de forma correcta el rango de Contendiente).*

## Explicacion final

Mi solución funciona de manera eficiente porque desglosa el problema en dos procesos de evaluación paralelos pero desacoplados. En lugar de generar una matriz compleja de condicionales anidados (que complicaría el mantenimiento del software), el algoritmo resuelve primero la propiedad física (`division`) y posteriormente la propiedad de experiencia (`rango`). Al utilizar estructuras secuenciales descendentes `if-elif-else`, el procesador descarta los rangos inferiores rápidamente en la CPU, garantizando una salida limpia, libre de errores lógicos y completamente verificable para el instructor.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.