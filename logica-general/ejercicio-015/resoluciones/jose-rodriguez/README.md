# Reto: Optimizador de Rendimiento de lienzos - Dibujo digital 

Este repositoorio contiene la arquitectura logica y la solucion automatizada para el reto de validacion de reglas de negocio aplicado a la gestion de memoria en software de dibujo digital. El proposito central de este ejercicio no radica en memorizar lianeas de codigo, sino en analizar un escenario tecnico del mundo real, identificar sus restricciones metricas y estructurar un algoritmo secuencial ordenado y totalmente predecible

---

## Objetivo del Reto

Crear una solucion interactiva por interfaz de linea de comandos (CLI) que reciba las especificaciones fisicas de un archivo de ilustracion, processee l;as restricciones mediante la evalacion de bandera booleanas y entregue un reporte de carga y rendiumiento del lienzo verificable.

---

# Plantilla de solucion 

## Analisis 
- **Entradas:**
    - nombre_proyecto: Cadena de texto (str) que almacena el identificador cualitativo de la ilustracion, sanitizado con el metodo .strip()
    - resolucion_ancho: Valor numerico entero (int) que mide la dimension horizontal del lienzo en pixeles.
    - cantidad_capas: Valor numerico entero (int) que registra el volumen total de sub-lienzos de dibujo activos.
- **Proceso:**
    - **Aislamiento de atributos de carga:** El script evalua de forma atomica si el archivo quibra de manera aislada los limites tolerables de tamano y estructura, encendiendo las variables booleanas es_alta_resolucion y es_archivo_pesado.
    - **Evaluacion de reglas de negocio:** Una estructura de control jerarquica if-elif-else procesa las combinaciones de las banderas logicas. Utiliza operadores de conjuncion (and) para aislar el escenario critico y disyuncion (or) para interceptar advertencias parciales.
- **Salida:**
    - estado_lienzo: Cadena de texto (str) que declara visualmente la categoria de uso de memoria (Optimo, Optimizacion o Desbordamiento).
    - accion_software: Directiva operativa simulada que ejecutaria el motor grafico del programa.
    - dictamen_tecnico: Mensaje dinamico detallado que justifica numericamente la decision arrojada por el sistema.

## Reglas identificadas 

1. **Umbral de alta resolucion:** Un lienzo se considera de alta densidad digital si su ancho es mayor o igual a los 3000 pixeles (>= 3000).
2. **Tope de desbordamiento critico:** El archivo se categoriza como pesado si el numero de capas supera estrictamente el valor de 50 unidades (> 50).
3. **Regla de desbordamiento critico:** Si el archivo es simultaneamente de alta resolucion y pesado, el sistema entras en bloqueo de momotia preventiva.
4. **Reggla de alerta por consumo:** Si falla la primera regla, pero el archivo cumple con alta resolucion O es pesado, se le asigna un estado intermedio que exige renderizado atenuado.
5. **Regla de Fluidez:** Si no se enciende ningun factor de estres tecnico, el bloque else valida el rendimeinto optiimo del lienzo.

## Pruebas 

### Caso normal 

- **Entrada:**
  - `nombre_proyecto`: ConceptArt_Personaje
  - `resolución_ancho`: 3840
  - `cantidad_capas`: 12
- **Resultado esperado:**
  - `Estado del Archivo:  ⚠️ ESTADO: OPTIMIZACIÓN RECOMENDADA`
  - `Acción del Software: Activar el modo de renderizado en baja resolución para las capas en segundo plano.`
  *(Prueba el correcto funcionamiento del bloque `elif` al interceptar una ilustración de formato 4K pero que maneja una cantidad de capas segura para el sistema).*

### Caso borde

- **Entrada:**
  - `nombre_proyecto`: Speedpaint_Boceto
  - `resolución_ancho`: 3000
  - `cantidad_capas`: 51
- **Resultado esperado:**
  - `Estado del Archivo:  🚨 ESTADO: DESBORDAMIENTO CRÍTICO DE MEMORIA`
  - `Acción del Software: Congelar previsualización de pinceles y sugerir acoplar capas de inmediato.`
  *(Valida de forma estricta las fronteras exactas de las reglas lógicas empleando los operadores compuestos `>=` y `>` en sus puntos de quiebre numérico).*

## Explicacion final 

Mi solucion funciona de marea optima porque transforma un problema de rencimiento de hardware en un modelo lineal de logica booleana. En lughar de evaluar directamente las variables matematicas crudas dentro del condicional principal, el algoritmo procesa las entradas de forma de arriba hacia abajo, el procesador evalua primero la regla de negocio mas restrictivva (el cumplimiento simultaneo de ambas alertass mediante el conecto and), permitiendo que el sistema filtre amenazas de cuelgue un resultado auditable y consistente.

## Sugerencia 

Convierte cada regla del problema en una condicion clara antes de programar.
