# Analisis

- **Entrada:** `edad` (int), `es_internacional` (bool).
- **Proceso:** Validación de requisitos legales de viaje mediante condicionales jerárquicos.
- **Salida:** Un diccionario con el estado `aprobado` (boolean) y un `motivo`.

## Reglas aplicadas

1. **Restricción Legal:** Menores de 18 años tienen prohibido viajar solos internacionalmente sin permisos (bloqueo por regla).
2. **Permisos Generales:** Los viajes nacionales no tienen restricciones de edad.
3. **Autorización Adulta:** Mayores de 18 años tienen aprobación automática para cualquier destino.

## Pruebas

### Caso normal
- **Entrada:** Edad: 25, Internacional: True
- **Resultado:** {"aprobado": True, "motivo": "Reserva aprobada."}

### Caso borde
- **Entrada:** Edad: 16, Internacional: True
- **Resultado:** {"aprobado": False, "motivo": "Los menores requieren permiso especial para viajes internacionales."}

## Explicacion final

He aplicado una **lógica de filtrado de restricciones**. Es fundamental identificar primero las condiciones que bloquean el proceso (menor de edad + internacional) para descartarlas rápidamente. Este enfoque permite que las reglas de negocio sean transparentes y fáciles de auditar por cualquier miembro del equipo.