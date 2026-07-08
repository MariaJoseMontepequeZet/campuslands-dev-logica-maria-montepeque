# Plantilla de solucion

## Autor

Sergio Ajù

## Analisis
- **Entrada:** `modelo` (string), `cilindrada` (int), `estado` (string).
- **Proceso:** Primero se verifica si la moto está disponible; si no, se descarta. Si está disponible, se clasifica en segmentos según su potencia (cilindrada).
- **Salida:** Un objeto con la `accion` (mostrar/ocultar y segmento) y el `motivo`.

## Reglas identificadas
1. **Disponibilidad:** Solo las motos con estado "disponible" pueden ser mostradas.
2. **Segmentación Alto Rendimiento:** Cilindrada >= 600cc.
3. **Segmentación Urbano/Deportivo:** Cilindrada entre 250cc y 599cc.
4. **Segmentación Económico:** Cilindrada menor a 250cc.

## Pruebas

### Caso normal
**Entrada:** `modelo: "Honda CB500"`, `cilindrada: 500`, `estado: "disponible"`
**Resultado esperado:** `accion: "Mostrar en segmento: Urbano/Deportivo"`, `motivo: "Moto de cilindrada media."`

### Caso borde
**Entrada:** `modelo: "Yamaha R1"`, `cilindrada: 1000`, `estado: "vendida"`
**Resultado esperado:** `accion: "Ocultar"`, `motivo: "La moto ya no está en inventario."`

## Explicacion final
La solución aplica primero un "filtro de exclusión" (validar si está vendida). Una vez garantizado que la moto es apta para el catálogo, el sistema utiliza una estructura de rangos para clasificarla. Esto permite que, si el inventario crece, solo sea necesario ajustar los límites de los rangos de cilindrada en la lógica.

## Sugerencia
Utiliza una tabla para definir los segmentos antes de programar:

| Cilindrada | Segmento |
| :--- | :--- |
| < 250 | Económico |
| 250 - 599 | Urbano/Deportivo |
| >= 600 | Alto Rendimiento |