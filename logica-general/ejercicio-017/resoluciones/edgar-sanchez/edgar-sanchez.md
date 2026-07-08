# Resolución: Lógica General 017 - Tablas de Decisión

Este archivo detalla el mapeo condicional y las reglas de negocio en forma de matrices lógicas utilizadas para automatizar la asignación de materiales en un entorno de arquitectura 3D.

---

## 1. Cómo se pensó el problema (Análisis)

El propósito de este reto es resolver problemas de negocio mediante **Tablas de Decisión**, una herramienta de diseño lógico indispensable cuando el resultado final depende de la combinación simultánea de múltiples variables independientes de entrada (en este caso: tipo de elemento, ubicación y presupuesto). Mapear esto de forma ordenada evita que el software caiga en ambigüedades o contradicciones constructivas.

### Tabla de Decisión Formalizada

| Regla | Tipo Estructura | Es Exterior? | Presupuesto Premium? | Material Asignado | Motor Render |
| :---: | :--- | :---: | :---: | :--- | :--- |
| **R1** | Cimiento | * (Cualquiera) | * (Cualquiera) | Concreto Armado | Dinámico |
| **R2** | Muro | Sí | Sí | Piedra Natural con Aislamiento | PBR_Alta |
| **R3** | Muro | Sí | No | Ladrillo Visto Tratado | PBR_Estandar |
| **R4** | Muro | No | Sí | Paneles de Madera Noble | PBR_Alta |
| **R5** | Muro | No | No | Placa de Yeso con Pintura | PBR_Estandar |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución técnica se implementó bajo criterios de consistencia arquitectónica y optimización condicional:

* **Abstracción del Motor Gráfico:** En lugar de duplicar la asignación del tipo de render en cada bloque `if`, la variable `motor` se calcula al inicio de la función evaluando la bandera `presupuesto_premium`. Esto respeta la filosofía DRY (*Don't Repeat Yourself*).
* **Cortocircuito por Relevancia (Cimientos):** La regla de cimientos se colocó como la primera jerarquía condicional. Si la estructura es un `"Cimiento"`, las variables de ubicación y costo se vuelven irrelevantes para la integridad de la base, saliendo del flujo inmediatamente y ahorrando procesamiento.
* **Control de Excepciones del Modelo:** Si el diseñador introduce un elemento no soportado por el motor (por ejemplo, `"Techo_Curvo"`), el sistema activa un bloque de contingencia que asigna una textura gris genérica por defecto, impidiendo que el motor 3D falle o lance excepciones fatales en pantalla.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal Premium:** Al procesar un `"Muro"` diseñado para el `"Exterior"` bajo un presupuesto `"Premium"`, la tabla de decisión intersecta las condiciones devolviendo de forma exacta el material de Piedra Natural y configurando el texturizado físico avanzado (`PBR_Alta`).
2. **Caso Normal Estándar:** Un muro interno económico evalúa con precisión la matriz lógica asignando tablaroca/placa de yeso convencional.
3. **Caso Borde (Inundación de Datos):** Un componente desconocido ingresa al motor; el sistema captura el error pacíficamente y asigna el material de contingencia básico.