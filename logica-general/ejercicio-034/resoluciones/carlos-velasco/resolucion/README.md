# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `kit` con las propiedades `agujasEsteriles` (booleano), `tintaSellada` (booleano), `maquinaOperativa` (booleano) y `guantesDisponibles` (número).
* **Proceso**: Validación jerárquica de seguridad sanitaria, operativa y disponibilidad de insumos mediante retornos anticipados.
* **Salida**: Un objeto que define el `estado` (Inutilizable, Alerta o Aprobado) y un `motivo` explicativo.

## Reglas identificadas

1. Si no hay agujas estériles o tinta sellada, el kit es "Inutilizable" por riesgo biológico.
2. Si la máquina no está operativa, el kit es "Inutilizable" por fallo técnico.
3. Si la cantidad de guantes es menor a 2, el kit queda en estado de "Alerta" por stock insuficiente.

## Pruebas

### Caso normal

* **Entrada**: `{ agujasEsteriles: true, tintaSellada: true, maquinaOperativa: true, guantesDisponibles: 5 }`
* **Resultado esperado**: `{ estado: "Aprobado", motivo: "Kit listo para sesión." }`

### Caso borde

* **Entrada**: `{ agujasEsteriles: true, tintaSellada: true, maquinaOperativa: true, guantesDisponibles: 1 }`
* **Resultado esperado**: `{ estado: "Alerta", motivo: "Stock insuficiente de guantes." }`

## Explicacion final

La solución funciona mediante una estrategia de **"Fail-Fast" (fallo rápido)**. Al estructurar las condiciones de mayor a menor criticidad (sanidad > técnica > logística), el sistema asegura que, ante cualquier peligro, el proceso se detenga inmediatamente. Esto evita que una sesión se inicie en condiciones inseguras, garantizando tanto el cumplimiento de normas de salud como la operatividad del trabajo.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Riesgo)**: `!kit.agujasEsteriles || !kit.tintaSellada`
* **Regla 2 (Técnico)**: `!kit.maquinaOperativa`
* **Regla 3 (Stock)**: `kit.guantesDisponibles < 2`