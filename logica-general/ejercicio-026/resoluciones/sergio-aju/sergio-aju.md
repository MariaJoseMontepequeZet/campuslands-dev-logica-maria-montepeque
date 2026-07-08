# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis
- **Entrada:** `catalogo` (arreglo de objetos), `marcaBusqueda` (string).
- **Proceso:** Se utiliza el método `find` para localizar el objeto correspondiente a la marca. Luego, se aplican condicionales para validar su existencia y su potencia (HP).
- **Salida:** Un objeto con la `accion` (resultado de la búsqueda y validación) y un `motivo` explicativo.

## Reglas identificadas
1. **Búsqueda sensible:** La comparación debe ignorar mayúsculas/minúsculas.
2. **Existencia:** Si no se encuentra la marca, el sistema debe notificarlo.
3. **Criterio de rendimiento:** Para ser clasificado como "hiperdeportivo" en este sistema, el vehículo debe tener 1000 HP o más.

## Pruebas

### Caso normal
**Entrada:** `marca: "Bugatti"`
**Resultado esperado:** `accion: "Verificado"`, `motivo: "El modelo Chiron cumple con los estándares hiperdeportivos."`

### Caso borde
**Entrada:** `marca: "Ferrari"`
**Resultado esperado:** `accion: "Descartado"`, `motivo: "El vehículo no alcanza los 1000 HP necesarios."`

## Explicacion final
He implementado una búsqueda lineal sobre un arreglo de objetos. Al separar la lógica de "búsqueda" de la de "validación de potencia", el código se vuelve modular. Esto permite que si en el futuro el criterio de potencia cambia, solo debamos modificar una línea de código sin afectar la búsqueda.

## Sugerencia
Antes de programar, mapea tus datos para entender la estructura:

| Marca | Modelo | HP | Categoría |
| :--- | :--- | :--- | :--- |
| Bugatti | Chiron | 1500 | Hiperdeportivo |
| Ferrari | SF90 | 986 | Deportivo |