# Logica general 032 - comparacion de opciones

## Sistema de Recomendación de Raquetas

Este script automatiza la selección de la raqueta más adecuada de un inventario disponible, priorizando tanto la condición física del equipo como la afinidad con el estilo de juego del usuario.

* **Descripción del proceso:**
* **Filtrado de calidad**: Excluye automáticamente cualquier raqueta con un nivel de `desgaste` superior a 80.
* **Selección por perfil**:
* Estilo defensivo $\rightarrow$ busca raquetas tipo "control".
* Estilo agresivo $\rightarrow$ busca raquetas tipo "potencia".


* **Reserva de emergencia**: Si no existe una raqueta específica para el estilo solicitado, el sistema selecciona automáticamente la raqueta con el menor desgaste (`reduce`) para asegurar la mejor opción disponible.
* **Reporte**: Devuelve un objeto con el modelo recomendado y una justificación personalizada.


* **Tecnologías:**
* JavaScript (`filter` para saneamiento de stock, `find` para búsqueda directa, `reduce` para selección de mejor alternativa).

---

### Explicación técnica

1. **Resiliencia de datos**: El uso de `reduce` como *fallback* es una estrategia de diseño robusta. Garantiza que, incluso si el stock no tiene exactamente lo que el usuario quiere (control o potencia), la función no fallará y entregará la raqueta en mejor estado físico, priorizando la operatividad del equipo sobre la preferencia técnica.
2. **Saneamiento del input**: El filtrado inicial (`desgaste <= 80`) actúa como una validación de seguridad, asegurando que el sistema nunca recomiende equipo que pueda ser peligroso o subóptimo para el rendimiento del jugador.
3. **Abstracción de estilos**: La asignación de `tipoPreferido` permite desacoplar los nombres técnicos de las raquetas ("control", "potencia") de las necesidades humanas ("defensivo", "agresivo"), creando una capa de experiencia de usuario clara.


### Lógica del Código

```javascript
const recomendarRaqueta = (raquetas, estilo) => {
    // 1. Filtrar raquetas utilizables (desgaste <= 80)
    const disponibles = raquetas.filter(r => r.desgaste <= 80);
    if (disponibles.length === 0) return "Sin raquetas disponibles.";

    // 2. Determinar tipo preferido según el estilo
    const tipoPreferido = estilo === "defensivo" ? "control" : "potencia";

    // 3. Buscar coincidencia exacta o fallback a la mejor condición
    let opcion = disponibles.find(r => r.tipo === tipoPreferido);
    if (!opcion) {
        opcion = disponibles.reduce((min, current) => 
            current.desgaste < min.desgaste ? current : min
        );
    }

    return { modelo: opcion.modelo, razon: `Recomendada para estilo ${estilo}.` };
};

```

### Salida Esperada

```text
{ modelo: 'ProControl', razon: 'Recomendada para estilo defensivo.' }
{ modelo: 'AllRounder', razon: 'Recomendada para estilo agresivo.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-032/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco