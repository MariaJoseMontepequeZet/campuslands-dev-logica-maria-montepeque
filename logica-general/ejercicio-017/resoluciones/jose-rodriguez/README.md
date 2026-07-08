# Reto: Optimizador de configuracion por tablas de desicion 

Este repositorio contiene la arquitectura logica y la solucion estructurada para el reto de tablas de decision aplicado a la optimizacion de motores de renderizado en arquitectura 3D. El nucleo de este ejercicio no radica en memo rizar codigo, sin o en mapear una matriz de decisiones cruzadas del mundo real, traduciendola en reglas condicionales ordenadaes y predecibles para el sistema.

---

## Objetivo del Reto 

Construir una solucion interactiva por interfaz de linea de comandos (CLI) capaz de recibir variables cualitativas de diseno, cruuzarlas simultaneamente contra una tabvla de condiciones tecnicas predefinidas y retornar sun dictamen de hardware y viabilidad totalmente verificable.

---

# Plantilla de solucion 

## Analisis 

- **Entrada:**
    - nombre_proyecto: Cadena de texto (str) que identifica el archivo de dise;o, sanitizado con .strip()
    - tipo_render: Cadena de texto (str) que define la naturaleza espacial del modelado, normalizada con .strip().capitalize()(Interiores / Exteriores).
    - motor_grafico: Cadena de texto (str) que representa el software de calculo luminico, estandarizada mediante .strip().capitalize() (Vray / Lumion).
- **Proceso:**
    - **Mapeo de la tabla de desicion:** El sistema intercepta las combinaciones posibles de una matriz de $2 \times 2$ mediante el uso estricto del oprador logico de conjuncion and.
    - **Estructura de Descarte en cascada:** A traves de un bloque if-elif-else, el procesador lee los perfiles de arriba haccia abajo para emparejar los datos ingresados con una fila exacta de la tabla de decision, reservando el bloque else para el control defensivo de errores.
- **Salida:**
    - viabilidad: Cadena de texto (str) con el veredicto de compatibilidad cualitativa del proyecto.
    - configuracion_hardware: Directiva tecnica detallada sobnre el impacto del motor grafico en el pipeline de renderizado.
    - tiempo_estimado_por_frame: Indicador cualitativo sobre el consumo de recursos de computo (CPU / GPU).

## Reglas identificadas

La solucion se basa en la siguiente tabla de decision logica 

| Caso (Regla) | Tipo de Render | Motor Gráfico | Viabilidad / Hardware Asignado |
| :--- | :--- | :--- | :--- |
| **1 (if)** | Interiores | Vray | Óptimo (Raytracing de alta precisión por CPU) |
| **2 (elif)** | Interiores | Lumion | Adaptado (Tiempo real por GPU / Pérdida de rebotes exactos) |
| **3 (elif)** | Exteriores | Lumion | Óptimo (Instanciación masiva de entornos por GPU) |
| **4 (elif)** | Exteriores | Vray | Adaptado (Alto detalle, pero coste crítico por CPU) |
| **Cualquiera**| No identificado| No identificado| Rechazado (Error de consistencia en la configuración) |

## Pruebas 
### Caso normal

- **Entrada:**
  - `nombre_proyecto`: Oficinas_Zona10
  - `tipo_render`: interiores
  - `motor_grafico`: vray
- **Resultado esperado:**
  - `Viabilidad Técnica:  Aprobado para entrega fotorrealista`
  - `Hardware Asignado:   PERFIL ÓPTIMO: Iluminación global basada en trazado de rayos (Raytracing alta precisión).`
  - `Costo de Cómputo:    Alto (Uso intensivo de CPU Multi-core)`

### Caso borde

- **Entrada:**
  - `nombre_proyecto`: Fachada_Residencial
  - `tipo_render`: exteriores
  - `motor_grafico`: blender
- **Resultado esperado:**
  - `Viabilidad Técnica:  Rechazado por inconsistencia de configuración`
  - `Hardware Asignado:   ERROR: Combinación técnica no indexada en la tabla de decisión.`
  *(Prueba la robustez del sistema ante datos válidos en su sintaxis pero inexistentes dentro de las reglas de negocio de nuestra tabla de decisión, interceptándolos de forma segura en la salida por defecto).*

## Explicacion final 

Mi solucion funciona de manera optima porque modela fielmente una matriz bidimensional de decisiones usando logica condicional acoplada con el conector inclusivo estricto and. En lugar de dejar que el programa tome decisiones basadas en una sola variable, el algoritmo exige que tanto la tipologia del espacio como el software de renderizado coincidan exactamente con un cuadrante de nuestra tabla de negocio. Al estructrurar las sentencias de control mediante un bloque if-elif-else cerrado y sanitizar las entradas de consola con .capitalize(), garantizo que el software guie al usuario hacia una asignacion precisa de hardwaare en la PC, eliminando salidas ambiguas y protegiendo al procesador de fallos de interpretacion.