# Logica general 021 - clasificacion por reglas

## Sistema de Clasificación de Jugadores

Este script evalúa a los jugadores dentro de un entorno competitivo, asignándoles un rango basado en su MMR (Matchmaking Rating), su estatus de veterano y su historial de reportes por mala conducta.

* **Descripción del proceso:**
* **Validación de conducta**: La primera prioridad es verificar si el jugador ha excedido el límite de reportes permitidos; si es así, se suspende automáticamente.
* **Cálculo de nivel**: Clasifica al jugador en Principiante, Avanzado o Élite según el puntaje MMR.
* **Promoción especial**: Evalúa si un jugador con estatus de veterano y nivel Avanzado merece ser promovido a Élite.
* **Reporte**: Genera un objeto con el rango final y una justificación personalizada.


* **Tecnologías:**
* JavaScript (estructuras condicionales anidadas y manipulación de objetos).

---

### Explicación técnica

1. **Prioridad de Reglas**: La estructura coloca el filtro de conducta (`reportes > 5`) al inicio. Esto es un patrón de diseño llamado *Guard Clause*, que evita procesar lógica innecesaria si el jugador ya ha sido suspendido.
2. **Lógica Compuesta**: La promoción por veteranía demuestra cómo combinar propiedades booleanas (`esVeterano`) con resultados previos de clasificación para modificar dinámicamente el estado del jugador.
3. **Template Literals**: El uso de `${}` en el motivo permite construir mensajes dinámicos que cambian según el estado del jugador, manteniendo el código limpio y descriptivo.

### Lógica del Código

```javascript
const clasificarJugador = (jugador) => {
    // 1. Prioridad: Revisión de conducta
    if (jugador.reportes > 5) {
        return { rango: "Suspendido", motivo: "Exceso de reportes por conducta antideportiva." };
    }

    // 2. Clasificación base por MMR
    let nivel = "";
    if (jugador.mmr >= 3000) nivel = "Nivel Élite";
    else if (jugador.mmr >= 1500) nivel = "Nivel Avanzado";
    else nivel = "Nivel Principiante";

    // 3. Regla especial de promoción por veteranía
    if (jugador.esVeterano && nivel === "Nivel Avanzado") {
        nivel = "Nivel Élite (Veterano Promovido)";
    }

    return { 
        rango: nivel, 
        motivo: `Clasificado por MMR ${jugador.mmr} ${jugador.esVeterano ? 'con estatus de veterano.' : '.'}` 
    };
};

```

### Salida Esperada

```text
{
  rango: 'Nivel Élite (Veterano Promovido)',
  motivo: 'Clasificado por MMR 2000 con estatus de veterano.'
}
{
  rango: 'Suspendido',
  motivo: 'Exceso de reportes por conducta antideportiva.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-021/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco