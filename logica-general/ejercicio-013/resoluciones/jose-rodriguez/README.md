# Reto: Sistema de Resolucion de Casos de Seguridad - Paracaidismo 

Este repositorio contiene la arquitectura logica y la solucion automatizada para el reto de resoluciojn de casos especificos aplicado a los protocolos de seguridad en paracaidismo. El enfoque principal de este ejercicio no radica en memorizar lineas de codigo, sino en analizar un escenario critico de toma de decisiones, identificar sus limites fisicos y estructurar un algoritmo secuencial ordenado y auditable.

---

## Objetivo del Reto 

Desarrollar un componente de software interactivo por interfaz de linea de comandos (CLI) capaz de capturar metricass de altitud y clima, procesar los escenarios posibles mediante reglas directas de descarte y devolver un dictamen de vuelo completamente verificable.

---

# Plantilla de solucion 

## Analisis

- **Entrada:**
    - nombre_paracaidista: Cadena de texto (str) con la identificacion del atleta, sanitizada mediante .strip().
    - altitud_apertura_pies: Valor numerico entero (int) que captura la distancia vertical minima planificada para abrir el paracaidas.
    - velocidad_viento_nudos: Valor numerico decimal (float) que mide la fuerza de las corrientes de aire en la zona de soltar.
- **Procceso:**
    - **Aislamiento de banderas Tecnicas:** El sistema traduce los datos de entrada a parametros logicos binarios (es_altitud_segura, es_viento_permitido) para evaluar los umbrales de riesgo.
    - **Estructura de descarte Jerarquico:** Un bloque condicional if-elif-else analiza las variables descendiendo desde el caso de exito absoluto hasta las excepciones de piligro tecnico o climatico.
- **Salida:**
    - estado_salto: Cadena de texto (str) que actua como el indicador categorico de viablidad (autorizado, critico o rechazado).
    - instrucciones_vuelo: Directiva tecnica dinamica que jusfica el plan de accion determinado por la torre de control.

    ## Reglas identificadas

    1. **Altitud de Seguridad Vital:** El punto de apertura de la campana debe ser estrictamente mayor o igual a los 300 pies de altura para garantizar el tiempo de frenado.
    2. **Tolerancia Aerodinamica (Viento):** La velociodad de las corrientes de aiire no puede exceder el limite superior cerrado de los 20.0 nudos.
    3. **Caso de exito inclusivo:** Para autorizar el salto se deben cumplir simultaneamente las dos directivasa anteriores mediante el operaddor restrictivo and/
    4. **Aislamiento de emergencia Altitud:** Si el viento es optimo pero la altitud falla, el sistema detecta de forma especifica el error critico de altura para frenar el plan de vuelo.

    ## Pruebas 

    ### Caso normal

- **Entrada:**
  - `nombre_paracaidista`: José Rodríguez
  - `altitud_apertura_pies`: 3500
  - `velocidad_viento_nudos`: 14.5
- **Resultado esperado:**
  - `Estado del Salto:    🟢 SALTO AUTORIZADO: CONDICIONES ÓPTIMAS`
  - `Directiva Operativa: El salto para 'José Rodríguez' es viable. Proceder con el plan de vuelo estándar y apertura a los 3500 pies.`

### Caso borde

- **Entrada:**
  - `nombre_paracaidista`: Salto de Prueba
  - `altitud_apertura_pies`: 3000
  - `velocidad_viento_nudos`: 20.0
- **Resultado esperado:**
  - `Estado del Salto:    🟢 SALTO AUTORIZADO: CONDICIONES ÓPTIMAS`
  - `Directiva Operativa: El salto para 'Salto de Prueba' es viable. Proceder con el plan de vuelo estándar y apertura a los 3000 pies.`
  *(Comprueba la exactitud matemática de las fronteras operativas usando los operadores compuestos en sus límites exactos de cumplimiento).*

## Explicacion final

Mi solución funciona de manera robusta porque transforma la resolución de casos en un flujo de control completamente lineal y predecible. Al desacoplar la captura de datos de las sentencias lógicas de decisión mediante variables booleanas independientes, evito la necesidad de anidar código de forma compleja. La jerarquía descendente del bloque condicional funciona como un filtro de seguridad de arriba hacia abajo: primero convalida que el escenario cumpla con el 100% de los estándares y luego aísla de manera específica las causas de denegación, previniendo falsos positivos y garantizando un resultado auditable para el instructor.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.