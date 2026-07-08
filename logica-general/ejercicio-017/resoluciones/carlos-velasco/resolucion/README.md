# Plantilla de solución

## Analisis

* **Entrada**: Dos cadenas: `usuario` (rol del cliente) y `proyecto` (tipo de alcance).
* **Proceso**: Evaluación condicional para clasificar el `usuario` y, en casos específicos, sub-clasificar según la complejidad del `proyecto` utilizando operadores ternarios.
* **Salida**: Un objeto que define la `licencia` asignada y un `motivo` explicativo.

## Reglas identificadas

1. Si el usuario es "Empresa", se asigna la licencia "Enterprise" sin restricciones.
2. Si el usuario es "Estudiante" o "Profesional", la licencia depende de si el proyecto es "Básico" o "Avanzado".
3. Si el usuario no coincide con las categorías predefinidas, se devuelve un estado de "Denegada".

## Pruebas

### Caso normal

* **Entrada**: `usuario: "Empresa", proyecto: "Básico"`
* **Resultado esperado**: `{ licencia: "Licencia Enterprise", motivo: "Acceso corporativo ilimitado." }`

### Caso borde

* **Entrada**: `usuario: "Estudiante", proyecto: "Avanzado"`
* **Resultado esperado**: `{ licencia: "Licencia Limitada", motivo: "Uso avanzado con restricciones." }`

## Explicacion final

La solución funciona mediante una **jerarquía de condicionales** que permite una asignación precisa de recursos. Al filtrar primero por el perfil del usuario, reducimos la complejidad del problema. Luego, dentro de los grupos que permiten una diferenciación por alcance ("Estudiante" y "Profesional"), el uso de **operadores ternarios** permite realizar una validación compacta del tipo de proyecto, asegurando que cada combinación de usuario-proyecto reciba la licencia correcta o, en su defecto, una respuesta de denegación segura.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Corporativo)**: `usuario === "Empresa"`
* **Regla 2 (Estudiante)**: `usuario === "Estudiante" && proyecto === "Básico"`
* **Regla 3 (Profesional)**: `usuario === "Profesional" && proyecto === "Avanzado"`