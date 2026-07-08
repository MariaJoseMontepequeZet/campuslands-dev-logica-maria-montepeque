# Resolución: Lógica General 015 - Reglas de Negocio

Este archivo detalla las directrices lógicas y la automatización de flujos de validación aplicados al motor de exportación de un software de dibujo digital.

---

## 1. Cómo se pensó el problema (Análisis)

El núcleo del ejercicio radica en implementar restricciones técnicas del mundo real (reglas de negocio) dentro del código. En el diseño y dibujo digital, exportar un lienzo de forma errónea arruina el producto final (píxeles borrosos en imprenta o archivos pesados en la web). La solución debe interceptar los parámetros del lienzo, evaluar su destino final (pantalla o papel) y forzar o corregir los estándares requeridos.

### Tabla de Estructura de Reglas de Negocio

| Entrada | Proceso (Reglas de Negocio del Sistema) | Salida |
| :--- | :--- | :--- |
| **formato_archivo** (Texto)<br>**resolucion_dpi** (Entero)<br>**es_para_impresion** (Booleano) | 1. Filtrar resoluciones destructivas (< 72 DPI).<br>2. Si va a imprenta, exigir perfiles CMYK, formatos TIFF/PDF y forzar densidades superiores a 300 DPI.<br>3. Si va a web, procesar formatos sRGB livianos. | **estado_exportacion** (Texto)<br>**perfil_color** (Texto)<br>**observacion** (Texto descriptivo) |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución técnica se implementó bajo la premisa de la prevención automática de errores de usuario:

* **Corrección Proactiva Frente a Fallos:** En lugar de simplemente arrojar un error y rechazar la solicitud si un artista intenta imprimir a menos de 300 DPI, el algoritmo reescribe de manera inteligente el valor asignándolo al mínimo seguro e informando el ajuste mediante el estado `"Ajustado"`.
* **Seguridad de Formatos Estrictos:** Se estandarizan los textos a mayúsculas limpias con `.upper()`. Esto impide que extensiones guardadas como `".tiff"`, `".Tiff"` o `".TIFF "` provoquen fugas lógicas o falsos rechazos en la base del software.
* **Uso Eficiente de Condiciones Anidadas:** Al segmentar el flujo en la bandera booleana `es_para_impresion`, la computadora procesa únicamente la matriz de restricciones correspondiente al canal de destino del archivo, optimizando el rendimiento.

---

## 3. Casos de Prueba Evaluados

1. **Caso de Ajuste Automatizado:** Un usuario intenta exportar una ilustración para imprimir a 150 DPI. La regla de negocio detecta el peligro de pixelación, eleva automáticamente el valor a 300 DPI y reconfigura el lienzo al espacio de color industrial CMYK.
2. **Caso Normal Web:** Se solicita una salida estándar para pantallas a 72 DPI en formato JPEG. El sistema aprueba la orden asignando el perfil sRGB de manera exitosa.
3. **Caso Borde (Calidad Crítica):** Un lienzo configurado a un valor inferior a 72 DPI es rechazado inmediatamente por el software, protegiendo al usuario de generar un archivo corrupto o ilegible.
