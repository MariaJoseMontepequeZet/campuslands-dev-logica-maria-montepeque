# Ejercicio 022 - Clasificación por reglas

**Camper:** Antonio Canux

## Analisis

- **Entrada:** Un objeto de datos que representa a un equipo de fútbol sala, que incluye `puntos` (número), `golesFavor` (número), `golesContra` (número) y `tarjetasRojas` (número).
- **Proceso:** Evaluación de las estadísticas del equipo, revisando primero las sanciones (fair play), luego calculando la liga correspondiente según el puntaje total, y finalmente verificando si aplican bonificaciones matemáticas (diferencia de goles).
- **Salida:** Un objeto con dos campos de texto: `accion` (el resultado del posicionamiento del equipo) y `motivo` (la explicación basada en las reglas del torneo).

## Reglas identificadas

1. **Regla de Fair Play (Crítica):** Si un equipo acumula 3 o más tarjetas rojas, queda automáticamente descalificado del torneo, sin importar su puntaje.
2. **Clasificación por Puntos (Media):** Los equipos se dividen en "Liga Mayor" (>= 25 puntos), "Liga de Ascenso" (>= 15 puntos) o "Liga Amateur" (< 15 puntos).
3. **Bono Ofensivo (Baja):** Si la diferencia de goles (goles a favor menos goles en contra) es mayor o igual a 15, el equipo recibe un bono extra de clasificación a la copa.

## Pruebas

### Caso normal

**Entrada:**
```javascript
{ 
    nombre: "Campus FC", 
    capitan: "Brayan Segura", 
    puntos: 28, 
    golesFavor: 30, 
    golesContra: 10, 
    tarjetasRojas: 1 
}
```

Resultado esperado:

```javascript
{
  accion: "Asignado a Liga Mayor + Clasificación a Copa de Campeones por diferencia de goles.",
  motivo: "El equipo ha sido clasificado exitosamente en base a sus puntos y fair play."
}
```

### Caso borde
Entrada:

```javascript
{ 
    nombre: "Dev Strikers", 
    capitan: "Gabriel Josué Ramos Nájera", 
    puntos: 30, 
    golesFavor: 25, 
    golesContra: 5, 
    tarjetasRojas: 4 
}
```

Resultado esperado:

```javascript
{
  accion: "Descalificado del torneo",
  motivo: "El equipo ha acumulado el límite máximo de tarjetas rojas permitidas por el reglamento."
}
```

## Explicacion final
Esta solución funciona porque separa claramente las reglas deportivas en diferentes niveles de impacto utilizando el flujo del código. Al comprobar primero las sanciones disciplinarias, el sistema ahorra recursos y evita clasificar a un equipo que debe ser expulsado. Las reglas matemáticas (puntos y diferencia de goles) solo se ejecutan si el equipo demuestra ser elegible, garantizando que el ranking final respete la jerarquía de las normativas del torneo.