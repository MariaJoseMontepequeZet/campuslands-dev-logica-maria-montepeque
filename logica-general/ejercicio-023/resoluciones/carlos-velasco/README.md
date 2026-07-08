# Logica general 023 - toma de decisiones

## Sistema de Determinación de Estrategias Tácticas

Este script analiza las condiciones actuales de combate (composición del equipo, nivel del oponente y puntos de vida) para recomendar la estrategia más adecuada, priorizando siempre la supervivencia del jugador.

* **Descripción del proceso:**
* **Prioridad de supervivencia**: Primero se evalúa si los puntos de vida son críticos, independientemente de otros factores.
* **Evaluación del oponente**: Si la vida es segura, se analiza el nivel del oponente para ajustar el nivel de riesgo.
* **Optimización ofensiva**: Si las condiciones son favorables, el sistema recomienda estrategias agresivas.
* **Respuesta estándar**: Si ninguna condición crítica o especial se activa, se sugiere una formación equilibrada por defecto.


* **Tecnologías:**
* JavaScript (lógica condicional jerárquica).

---

### Explicación técnica

1. **Priorización de condiciones**: Al colocar la validación de `puntosDeVida` al inicio, aseguramos que el sistema actúe como un mecanismo de seguridad. Aunque el jugador tenga una composición perfecta para atacar, el sistema siempre elegirá la retirada si la vida es inferior a 30.
2. **Lógica jerárquica**: El uso de bloques `if` independientes que retornan valores de forma temprana permite una lectura muy sencilla de la lógica del juego, facilitando auditorías rápidas sobre por qué se tomó una decisión táctica específica.
3. **Flexibilidad**: La estructura permite añadir nuevas reglas (como "Oponente nivel bajo" o "Composición defensiva") simplemente agregando un bloque `if` adicional en el orden de prioridad correspondiente.

### Lógica del Código

```javascript
const determinarEstrategia = (composicion, nivelOponente, puntosDeVida) => {
    // 1. Prioridad máxima: Supervivencia
    if (puntosDeVida < 30) {
        return { estrategia: "Retirada táctica", motivo: "Puntos de vida bajos, prioridad a la supervivencia." };
    }

    // 2. Ajuste según nivel de amenaza
    if (nivelOponente === "alto") {
        return { estrategia: "Defensiva precavida", motivo: "Oponente de alto nivel, evitar riesgos innecesarios." };
    }

    // 3. Aprovechamiento de oportunidades
    if (nivelOponente === "medio" && composicion === "agresiva") {
        return { estrategia: "Ataque rápido", motivo: "Oponente nivel medio permite aprovechar una composición agresiva." };
    }

    // 4. Estrategia por defecto
    return { estrategia: "Equilibrada", motivo: "Sin riesgos inmediatos, mantener formación estándar." };
};

```

### Salida Esperada

```text
{
  estrategia: 'Defensiva precavida',
  motivo: 'Oponente de alto nivel, evitar riesgos innecesarios.'
}
{
  estrategia: 'Retirada táctica',
  motivo: 'Puntos de vida bajos, prioridad a la supervivencia.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-023/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco