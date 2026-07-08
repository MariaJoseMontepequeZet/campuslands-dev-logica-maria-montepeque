# Resolución: Validador de Playlist

## Pensamiento Lógico
Se utilizó una **estrategia de validación por capas**. El sistema inspecciona los datos de entrada secuencialmente: primero verifica la existencia de campos clave, luego la integridad lógica (duración) y finalmente la compatibilidad técnica (formato). Si un objeto falla en cualquier capa, se detiene la validación y se reporta el error específico.

## Reglas Aplicadas
1. **Integridad:** Título y artista deben existir.
2. **Lógica:** La duración debe ser mayor a 0 segundos.
3. **Compatibilidad:** Solo se aceptan formatos MP3 y WAV.

## Cómo ejecutar
Ejecutar en terminal: `node playlist-validador.js`

## Casos Probados
- **Campo Vacío:** Detectado como "Datos incompletos".
- **Duración Cero:** Detectado como "Duración inválida".
- **Formato OGG:** Detectado como "Formato no soportado".