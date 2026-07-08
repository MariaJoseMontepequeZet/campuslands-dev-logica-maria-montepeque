# Plantilla de solucion

## Autor

Sergio Ajù

## Analisis

- **Entrada:** - `edad`: (Número) Edad del espectador.
    - `prefiereEfectos`: (Booleano) `true` para sí, `false` para no.
- **Proceso:** Validar la edad del usuario como filtro principal y luego clasificar según el gusto personal en efectos especiales.
- **Salida:** Recomendación cinematográfica con su respectiva justificación.

## Reglas identificadas

1. **Apta para menores:** Menores de 13 años reciben recomendaciones de tipo "Viajes espaciales animados".
2. **Alta Intensidad:** Mayores de 13 años que prefieren efectos son dirigidos a "Cine Cyberpunk".
3. **Introspección:** Mayores de 13 años que no priorizan efectos son dirigidos a "Sci-Fi Filosófico".

## Pruebas

### Caso normal

**Entrada:** `edad = 25, prefiereEfectos = true`

**Resultado esperado:** `Accion: Recomendar 'Cine de Acción Cyberpunk'. Motivo: Alta carga visual y efectos especiales intensos.`

### Caso borde

**Entrada:** `edad = 10, prefiereEfectos = true`

**Resultado esperado:** `Accion: Recomendar 'Viajes espaciales animados'. Motivo: Clasificación apta para todo público.`

## Explicacion final

El código está organizado en pasos secuenciales: primero se verifica la restricción de edad y, una vez superada, se bifurca la lógica según el gusto del usuario. Esto hace que el código sea muy fácil de leer y depurar.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Puedes mejorar esta lógica añadiendo más categorías de películas o rangos de edad adicionales.