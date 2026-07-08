# Analisis

- **Entrada:** `cilindraje` (int), `es_nueva` (boolean).
- **Proceso:** Se aplican filtros jerárquicos basados en la potencia del motor y el estado de uso del vehículo para determinar si la moto puede ser puesta en venta de inmediato.
- **Salida:** Un diccionario con el estado `disponible` (boolean) y un `motivo`.

## Reglas aplicadas

1. **Regla de Seguridad (Alta Gama):** Si el cilindraje es >= 600 y la moto es usada, no está disponible para venta directa (requiere inspección).
2. **Regla de Disponibilidad Estándar:** Motos menores a 600cc siempre están disponibles.
3. **Regla de Gama Alta Nueva:** Motos >= 600cc nuevas están disponibles.

## Pruebas

### Caso normal
- **Entrada:** Cilindraje: 800, es_nueva: False
- **Resultado:** {"disponible": False, "motivo": "Motos de alta cilindrada usadas requieren revisión técnica."}

### Caso borde
- **Entrada:** Cilindraje: 250, es_nueva: True
- **Resultado:** {"disponible": True, "motivo": "Disponible para venta inmediata."}

## Explicacion final

Al estructurar las reglas desde la restricción más específica (alta cilindrada + usada) hacia la más general, garantizamos que el sistema de inventario sea seguro y cumpla con las políticas de venta del concesionario.