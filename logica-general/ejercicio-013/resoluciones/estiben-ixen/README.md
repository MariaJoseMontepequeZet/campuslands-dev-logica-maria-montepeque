# Resolución: Sistema de Seguridad de Paracaidismo

## Pensamiento Lógico
Se utilizó un **filtro de exclusión jerárquica**. Se evalúa primero el componente más crítico (equipo), luego variables ambientales (viento) y finalmente la posición (altitud). Este orden asegura que, ante cualquier fallo, el sistema entregue una respuesta inmediata sin necesidad de validar el resto.

## Reglas Aplicadas
1. **Equipo:** Certificación obligatoria (`true`).
2. **Viento:** Máximo `30 km/h`.
3. **Altitud:** Rango estricto `[3000, 4000]`.

## Cómo ejecutar
Ejecutar con Node.js: `node paracaidismo.js`

## Casos Probados
- **Intento 1:** Condiciones perfectas, aprobado.
- **Intento 2:** Falla por altitud baja, cancelado.
- **Intento 3:** Falla por viento excesivo, cancelado.
- **Intento 4:** Falla por falta de certificación, cancelado.