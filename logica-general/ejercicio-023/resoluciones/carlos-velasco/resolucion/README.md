# Plantilla de solución

## Analisis

* **Entrada**: `composicion` (cadena: "agresiva" o "equilibrada"), `nivelOponente` (cadena: "alto", "medio" o "bajo") y `puntosDeVida` (número).
* **Proceso**: Evaluación jerárquica de condiciones: primero seguridad vital, luego nivel de amenaza del oponente y finalmente optimización táctica basada en la composición del equipo.
* **Salida**: Un objeto que define la `estrategia` recomendada y un `motivo` que justifica la decisión.

## Reglas identificadas

1. Si `puntosDeVida` es menor a 30, la prioridad es la "Retirada táctica".
2. Si el `nivelOponente` es "alto", la estrategia recomendada es "Defensiva precavida".
3. Si el `nivelOponente` es "medio" y la `composicion` es "agresiva", se utiliza un "Ataque rápido"; de lo contrario, se mantiene "Equilibrada".

## Pruebas

### Caso normal

* **Entrada**: `composicion: "agresiva", nivelOponente: "alto", puntosDeVida: 80`
* **Resultado esperado**: `{ estrategia: "Defensiva precavida", motivo: "Oponente de alto nivel, evitar riesgos innecesarios." }`

### Caso borde

* **Entrada**: `composicion: "agresiva", nivelOponente: "medio", puntosDeVida: 20`
* **Resultado esperado**: `{ estrategia: "Retirada táctica", motivo: "Puntos de vida bajos, prioridad a la supervivencia." }`

## Explicacion final

La solución funciona mediante una estructura de **cláusulas de guarda** que priorizan la seguridad (vida baja) sobre cualquier objetivo ofensivo. Al organizar las condiciones de la más crítica a la más específica, el código asegura que el jugador nunca tome un riesgo innecesario cuando su salud está en peligro. La lógica final utiliza una aproximación jerárquica donde, si no se cumplen condiciones de emergencia o peligro inminente, el sistema opta por la estabilidad, garantizando siempre una respuesta válida independientemente de los parámetros de entrada.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Supervivencia)**: `puntosDeVida < 30`
* **Regla 2 (Oponente alto)**: `nivelOponente === "alto"`
* **Regla 3 (Oportunidad)**: `nivelOponente === "medio" && composicion === "agresiva"`