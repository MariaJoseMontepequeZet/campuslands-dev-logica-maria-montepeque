# Reto: Motor de Comparacion de Opciones - Equipamiento de Ping Pong

Este repositorio continene la documentacion y la arquitectura de sofware de la solucion disenada para el reto de comparacion de opciones aplicado al registro y equipamiento de jugadores en torneos de ping-pong. El enfoque principal de este ejercicio no es la memorizacion de codigo, sino el analisis de situaciones complejas, la conversion de escenarios en reglas de negocio claras y la construccion de un algoritmo ordenado.

---

## Objetivo del Reto 

Desarrollar un componente de software interactivo por interfaz de linea de comandos (CLI) capaz de cruzar variables cualitativas de preferencia tactica con limitantes cualitativos de presupuesto y ranking, entregando un veredicto de equipamiento y estatus de juego verificable.

---

# Plantilla de solucion 

## Analisis
- **Entrada:**
    - nombre_jugador: Cadena de texto (str) con la identidad del atleta, sanitizado mediante .strip().
    - estilo_juego: Cadena de texto (str) descriptiva del rol estrategico, estandarizada con .strip().capitaliza() (Ataque / Control).
    - presupuesto: Valor numerico decimal (float) que representa los fondos disponibles en dolares para adquirir material deportivo.
    - puntos_habilidad: Valor numerico entero (int) que almacena el score de ranking actual del jugador.
- **Proceso:**
    - **Matriz de Comparacion cruzada:** El sistema utiliza operadores logicos relacionales y de conjuncion (and) para confrontar simultaneamente las opciones cualitativas (estilo) y restricciones financieras (presupuesto).
    - **Bifurcacion de Selecciuon Jerarquica:** A traves de bloques 'if-elif-else', el software evalua y asigna la paletra recomendada por descarte o descarta hacia la opcion base. Adicionalmente, una compuerta lineal evalua la elegibilidad del torneo.
- **Salida:**
    - paleta_sugerida: Cadena de texto (str) con la especificacion tecnica de la raqueta asignada segun el perfil.
    - estado_inscripcion: Cadena de texto (str) que declara de manera binaria y visual si el jugador ingressa al torneo oficial.
    - detalles_estado: Mensaje dinaminco explicativo que complementa la justificacion deportaiva de la inscripcion.

## Reglas identificadas

1. **Opcion ofensiva Premium:** Si el estilo del jugador es "Ataque" Y el presupuesto es mayor o igual a $80.0, se le asigna la raqueta Pro-Offensive.
2. **Opcion tactica de control:** Si la primera opcion falla, pero el estilo es "Control" Y el presupuesto es mayor o igual a $50.0, se le otroga la configuracion Classic-Control.
3. **Opcion por Defectoi (Iniciacion):** Cualquier combinacion que no cubra el presupuesto minimo de su estilo o posea espefcificaciones diferentes cae en el bloque 'else' asignando material balanceado basico.
4. **Umbral del Torneo** Para ingresar a la liga competitiva oficial, la propiedad de puntos de habilidad debe ser estrictamente mayor o igual a 1200 puntos.

## Pruebas

### Caso normal

- **Entrada:**
  - `nombre_jugador`: José Rodríguez
  - `estilo_juego`: ataque
  - `presupuesto`: 95.0
  - `puntos_habilidad`: 1350
- **Resultado esperado:**
  - `Sugerencia de Goma: Paleta Pro-Offensive (Goma de alta velocidad y fibra de carbono)`
  - `Estado del Registro: INSCRIPCIÓN APROBADA: Categoría Competitiva Oficial`
  - `Detalles Técnicos:  El jugador 'José Rodríguez' cumple con el umbral técnico. Clasificado en el cuadro principal.`

### Caso borde

- **Entrada:**
  - `nombre_jugador`: Aspirante Pro
  - `estilo_juego`: control
  - `presupuesto`: 50.0
  - `puntos_habilidad`: 1200
- **Resultado esperado:**
  - `Sugerencia de Goma: Paleta Classic-Control (Goma de alta adherencia y madera blanda)`
  - `Estado del Registro: INSCRIPCIÓN APROBADA: Categoría Competitiva Oficial`
  *(Valida con éxito la exactitud de las fronteras numéricas exactas en ambos módulos mediante el operador del límite inferior compuesto `>=`).*

## Explicacion final

Mi solución funciona de manera eficiente porque modela la comparación de opciones aislando el comportamiento de las variables cualitativas de las cuantitativas en fases secuenciales bien delimitadas. En lugar de procesar los datos de entrada de forma caótica, el algoritmo compara de arriba hacia abajo los perfiles de los jugadores optimizando el uso de la CPU. Al utilizar el operador lógico condicional `and`, se asegura de que ninguna opción sea recomendada por error si el presupuesto ingresado en la consola no cubre exactamente las especificaciones mínimas requeridas, eliminando falsos positivos en el sistema de inventario y garantizando un reporte perfectamente auditable.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.