## Explicación del código: Ranking de Fútbol Sala

### 1. Entradas
- nombre: nombre del equipo.
- puntos: puntos obtenidos.

### 2. Salidas
- equipo
- puntos
- ranking
- mensaje (si los puntos son negativos)

---

### 3. Caso pequeño resuelto manualmente
**Entrada**
- Equipo: Tigres FC
- Puntos: 18

**Proceso**
1. Los puntos son válidos.
2. 18 >= 10.
3. Ranking: En competencia.

**Salida**
- Equipo: Tigres FC
- Puntos: 18
- Ranking: En competencia

---

### 4. Pasos de la solución
1. Recibir nombre y puntos.
2. Validar que los puntos no sean negativos.
3. Asignar el ranking según los puntos.
4. Devolver el resultado.

- 30 o más → Campeón
- 20 a 29 → Clasificado
- 10 a 19 → En competencia
- Menos de 10 → Eliminado

---

### 5. Explicación por bloques

#### Bloque 1
Define la función `rankingFutbolSala(nombre, puntos)`.

#### Bloque 2
Valida que los puntos no sean negativos. Si lo son, devuelve un mensaje de error.

#### Bloque 3
Crea la variable `ranking`.

#### Bloque 4
Compara los puntos con `if` y `else if` para asignar el ranking.

#### Bloque 5
Devuelve un objeto con el equipo, puntos y ranking.

#### Bloque 6
Realiza dos pruebas:
- Leones FC (24) → Clasificado.
- Águilas FC (0) → Eliminado.

---

### 6. Implementación
La solución valida los datos, clasifica al equipo mediante condiciones y devuelve el resultado en un objeto.

---

### 7. Pruebas
| Equipo | Puntos | Resultado |
|---|---:|---|
| Leones FC | 24 | Clasificado |
| Águilas FC | 0 | Eliminado |

**Caso inventado**
- Equipo: Halcones FC
- Puntos: 33
- Resultado esperado: Campeón
