# Reto: Detector de inconsistencias y Diagnostico de errores - Estudio de Tatuajes 

Este repositorio contiene la arquitectura logica y la solucion automatizada para el reto de diagnostico de errores y control de calidad aplicado a las ordenes de trabajo en el sectior del arte corporal. El enfoque principal de este ejercicio no radica en memorizar lineas de codigo, sino en analizar un un escenario reglamentario y restrictivo del mundo real, identificar sus vul\jnerabilidades logicas y contruir con algoritmo ordenado y auditable.

---

## Objetivo del Reto 

Crear una solucion interactiva por interfaz de linea de comando (CLI) capaz de capturar variables cualitativas y cuantitativas de un cliente, procesar las restricciones mediante el encendido de banderas logicas independientes y emitir un reporte de diagnostico verificable ante los instructores.

---

# Plantilla de solucion 

## Analisis 

- **Entrada:**
    - nombre_cliente: Cadena de texto (str) con la identidad del usuario, sanitizado mediante .strip()
    - edad_cliente: Valor numerico entero (int) que registra la edad biologica del solicitante.
    - tiene_autorizacion: Cadena de texto (str) que valida la presenccia del documento legal eximente, normalizada mediante .strip().capitalize() (Si/No).
    - tipo_tinta: Cadena de texto (str) descriptiva del insumo quimico principal a aplicar (Negra / Color/ UV).
    - alergico_metales: Cadena de texto (str) que actua como decoloracion jurada antecendentes medicos (si/no).
- **Proceso:**
    - **Aislamiento de banderas de inconsistencia:** El programa analiza los inputs cruizados en frio para encender variables booleanas de error especificas (error_minoridad_critico y error_restruccion_salud).
    - **Estructura de diagnostico jerarquica:** A traves de un bloque if-elif-else, el software evalua de forma descendente los escenarios. Prioriza el bloque total combinado por el operador de conjuncion and, y posteriormente aisla de forma atomica los fallos individuales por descarte.
- **Salida:**
    - estado_auditoria: Cadena de texto (str) que representa el estatus visual del diagnostico de la orden (Bloqueo Critico, Rechazado, Advertencia o Verificado).
    - detalles_error: Mensaje dinamico explicativo que justifica tecnicamente la decision tomada por el modtor del simulador.
    - permite_sesion: Variable booleana der control interno que dictamina de manera binaria si se puedee encender la maquina de tatuar.

    ## Reglas identificadas

    1. **Restriuccion legal de minoridad:** Si el cliente tiene menos de 18 anos y no posee un documento firmado por sus tutores ( edad_cliente < 18 and tiene_autorizacion == 18), se genera una infraccion civil critica.
    2. **Restriccion sanitaria por alergias:** Si el cliente declara ser alergico a mnetales pesados y la orden solicita pigmentacion cromatica (tipo_tinta == "Color" and alergico_metales == "Si"), se activa una alerta medica debido a los componentes quimicos de los oxidos colorantes.
    3. **Jerarquia del Filtro:** Un fallo simultaneo en ambas reglas provocca un loqueo de seguridad absoluto. Los fallos individuales se aislan de manera independiente para dar salida o reconfigurar la orden (por ejemplo, cambiar el color de la tinta si es una adventencia).

## Pruebas

### Caso normal 

- **Entrada:**
  - `nombre_cliente`: José Rodríguez
  - `edad_cliente`: 28
  - `tiene_autorizacion`: No
  - `tipo_tinta`: Negra
  - `alergico_metales`: No
- **Resultado esperado:**
  - `Estado de Auditoría: DIAGNÓSTICO: ORDEN VERIFICADA CON ÉXITO`
  - `Detalles Técnicos:   Todos los parámetros legales, sanitarios y de insumos son consistentes. El procedimiento puede iniciar.`

  ### Caso borde

- **Entrada:**
  - `nombre_cliente`: Cliente Sensible
  - `edad_cliente`: 20
  - `tiene_autorizacion`: No
  - `tipo_tinta`: Color
  - `alergico_metales`: Si
- **Resultado esperado:**
  - `Estado de Auditoría:  DIAGNÓSTICO: ADVERTENCIA MÉDICA DE MATERIALES`
  - `Detalles Técnicos:   Alerta de salud: Las tintas de color contienen trazas metálicas altas. Se sugiere cambiar el diseño a Tinta Negra pura para evitar reacciones cutáneas.`
  *(Prueba la precisión del descarte: la regla de edad es totalmente válida, pero el sistema aísla exitosamente el error sanitario sin cancelar la orden de manera definitiva, ofreciendo una alternativa técnica).*

## Explicacion final

Mi solución funciona de manera óptima porque implementa el concepto de arquitectura desacoplada mediante banderas de error (*Error Flags*). En lugar de evaluar complejas fórmulas combinadas directamente dentro del flujo principal del condicional `if`, el algoritmo calcula primero el estado lógico verdadero o falso de cada riesgo de manera independiente. Al estructurar el motor condicional de forma descendente con un bloque `if-elif-else`, el procesador intercepta primero el escenario de riesgo total mediante el conector restrictivo `and` y luego gestiona las anomalías individuales. Esto previene eficazmente el solapamiento de mensajes en consola, evita falsos positivos en el control de calidad y provee un resultado completamente verificable.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.