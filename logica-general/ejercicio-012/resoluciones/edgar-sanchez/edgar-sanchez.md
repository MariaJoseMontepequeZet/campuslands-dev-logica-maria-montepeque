# Resolución: Lógica General 012 - Comparación de Opciones

Este archivo detalla la estrategia analítica y las reglas lógicas aplicadas para comparar alternativas de equipamiento y seleccionar la opción óptima en un torneo de ping-pong.

---

## 1. Cómo se pensó el problema (Análisis)

El núcleo de este reto radica en la toma de decisiones basada en la optimización de variables. Un jugador de ping-pong no escoge una pala de forma aleatoria, sino alineada a su modo de juego. El algoritmo debe recibir las opciones, identificar dinámicamente cuál es el parámetro crítico a evaluar (Velocidad o Control) según el perfil del usuario, y realizar una búsqueda de máximo valor matemático a lo largo de la colección.

### Tabla de Estructura de Comparación

| Entrada | Proceso (Reglas de Comparación) | Salida |
| :--- | :--- | :--- |
| **opciones_palas** (Lista de Diccionarios).<br>**estilo_jugador** (Texto: Ataque / Control). | Definir la estadística clave, iterar la colección comparando los atributos y retener el modelo con el puntaje más alto. | **pala_elegida** (Diccionario de la opción óptima).<br>**motivo** (Texto argumentativo). |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución del problema se estructuró bajo principios de abstracción y código limpio:

* **Abstracción Dinámica de Propiedades:** En lugar de escribir dos ciclos independientes (uno para ataque y otro para control), el sistema define una variable intermedia llamada `caracteristica_clave`. Esto permite usar una única estructura de comparación lineal para cualquier estilo, reduciendo a la mitad las líneas de código y simplificando el mantenimiento.
* **Algoritmo de Búsqueda de Máximos:** Se implementó un acumulador comparativo tradicional (`if valor_actual > max_valor`). Al evaluar secuencialmente cada pala, el programa descarta opciones inferiores en tiempo de ejecución, asegurando eficiencia y velocidad.
* **Saneamiento Defensivo:** Se integraron funciones de limpieza de cadenas (`.strip().capitalize()`) para garantizar que variaciones en la escritura del usuario (como `"control "`, `"CONTROL"` o `"Ataque"`) se procesen correctamente sin alterar el resultado del negocio.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Enfoque Ofensivo):** Se evaluó un perfil de "Ataque". El sistema ignoró el alto control de los modelos clásicos y seleccionó la pala *Carbon Strike* por su contundente velocidad de `9/10`.
2. **Caso Normal (Enfoque Defensivo):** Se evaluó un perfil de "Control". El algoritmo cambió su criterio de búsqueda a la propiedad de precisión, recomendando con éxito el modelo *Classic Wood* (`9/10` en control).
3. **Caso Borde (Colección Vacía):** Al ingresar una lista sin elementos `[]`, el escudo de validación inicial interceptó el flujo devolviendo un estado nulo controlado, evitando rupturas del sistema por consultas vacías.
