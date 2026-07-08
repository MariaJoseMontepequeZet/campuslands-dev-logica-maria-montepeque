# Analisis

- **Entrada:** `titulo` (string), `esEstreno` (boolean), `edadUsuario` (number).
- **Proceso:** Se implementa un flujo secuencial: primero se filtra por edad básica, luego se valida la condición de estreno (exclusividad) y finalmente se permite el acceso al catálogo.
- **Salida:** Un objeto con el `permiso` (booleano) y el `motivo` de la decisión.

## Reglas identificadas

1. **Regla de Seguridad:** Ningún usuario menor de 13 años puede acceder al catálogo.
2. **Regla de Estreno:** Las películas en estreno tienen una restricción de edad superior (18 años).
3. **Regla de Acceso:** Los usuarios mayores de 13 años que cumplen las condiciones de edad acceden a las películas según su tipo.

## Pruebas

### Caso normal

**Entrada:** - Título: "Interstellar", esEstreno: false, edadUsuario: 20

**Resultado esperado:** - permiso: true
- motivo: "Acceso concedido a la película Interstellar."

### Caso borde

**Entrada:** - Título: "Dune: Parte 2", esEstreno: true, edadUsuario: 16

**Resultado esperado:** - permiso: false
- motivo: "Acceso denegado: Se requiere ser mayor de 18 para estrenos."

## Explicacion final

Estructuré el código de modo que las condiciones más restrictivas se evalúen primero. Esto evita errores donde un usuario joven podría acceder a un estreno accidentalmente. El flujo asegura que, tras cada paso de validación, solo los usuarios autorizados avancen al siguiente estado.