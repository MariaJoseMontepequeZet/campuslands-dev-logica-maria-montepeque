# Lógica general - tabla de decisiones

## Análisis

**Entrada:**

* Un arreglo de modelos 3D con nombre, número de vértices y si tiene textura.

**Proceso:**

* Recorrer los modelos 3D.
* Evaluar cada modelo según reglas de negocio.
* Verificar si cumple las condiciones de la tabla de decisión.
* Contar cuántos modelos son aprobados.

**Salida:**

* Mostrar si cada modelo es aprobado o rechazado.
* Mostrar el total de modelos aprobados.

---

## Reglas identificadas (Tabla de decisión)

* Si el modelo tiene **vértices > 0** → válido.
* Si el modelo tiene **textura = true** → válido.
* Si cumple ambas condiciones → **Aprobado**.
* Si falla una o ambas → **Rechazado**.

---

## Pruebas

### Caso normal

**Entrada:**

* Cubo: 8 vértices, textura true
* Esfera: 0 vértices, textura false
* Pirámide: 5 vértices, textura true

**Resultado esperado:**

* Cubo: Aprobado
* Esfera: Rechazado
* Pirámide: Aprobado
* Total aprobados: 2

---

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`)

**Resultado esperado:**

* Mostrar mensaje: "No hay modelos 3D."

---

## Explicación final

La solución funciona porque convierte una tabla de decisión en reglas claras de programación. Recorre cada modelo 3D, evalúa condiciones de vértices y textura, y determina si el modelo es aprobado o rechazado según la lógica definida.
