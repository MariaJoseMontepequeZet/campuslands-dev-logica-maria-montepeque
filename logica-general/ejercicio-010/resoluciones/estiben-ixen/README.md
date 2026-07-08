# Resolución: Sistema de Verificación de Viajes

## Pensamiento Lógico
Se utilizó un enfoque de **validación de exclusión**. En lugar de intentar aprobar al usuario mediante múltiples condiciones positivas, el programa busca activamente cualquier motivo de "denegación". Si el pasajero supera todas las validaciones de seguridad sin ser rechazado, el acceso se aprueba.

## Reglas Aplicadas
1. **Pasaporte:** Obligatorio para destinos internacionales.
2. **Permisos:** Obligatorio para menores de 18 años en vuelos internacionales.
3. **Integridad:** La edad debe ser mayor a cero.

## Cómo ejecutar
Ejecutar con Node.js: `node viajes-turismo.js`

## Casos Probados
- **Brandon:** Aprobado (cumple con pasaporte y mayoría de edad).
- **Sofia:** Rechazada (menor sin permiso en vuelo internacional).
- **Carlos:** Rechazado (vuelo internacional sin pasaporte vigente).