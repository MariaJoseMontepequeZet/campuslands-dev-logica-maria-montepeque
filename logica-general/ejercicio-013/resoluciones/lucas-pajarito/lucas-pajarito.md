# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de participantes con la siguiente información:
    - Nombre.
    - Edad.
    - Peso.
    - Certificado médico (Sí o No).

- **Proceso:**
  1. Recorrer el arreglo de participantes.
  2. Verificar si el participante es mayor de edad.
  3. Verificar si cuenta con un certificado médico válido.
  4. Determinar si puede realizar el salto o indicar el motivo por el cual no puede hacerlo.

- **Salida:**
  - Un mensaje indicando si el participante está apto para realizar el salto o la razón por la que no puede participar.

---

## Reglas identificadas

1. El participante debe ser mayor de edad (18 años o más).
2. El participante debe contar con un certificado médico válido.
3. Si no cumple alguna de las condiciones, no puede realizar el salto y se debe indicar el motivo.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    nombre: "Carlos",
    edad: 25,
    peso: 75,
    certificadoMedico: true
}
```

**Resultado esperado:**

```text
Carlos: Apto para realizar el salto.
```

---

### Caso borde

**Entrada:**

```javascript
{
    nombre: "Laura",
    edad: 17,
    peso: 60,
    certificadoMedico: true
}
```

**Resultado esperado:**

```text
Laura: No puede participar por ser menor de edad.
```

> Este es un caso borde porque el participante está a solo un año de cumplir la edad mínima. El programa debe aplicar correctamente la regla y negar la participación.

---

## Explicación final

La solución funciona porque analiza la información de cada participante y evalúa diferentes situaciones mediante una estructura `if...else if...else`. Dependiendo de la edad y de la existencia de un certificado médico válido, el programa determina si el participante puede realizar el salto o indica la razón por la que no cumple con los requisitos. De esta manera se resuelve un problema de **resolución de casos**, ya que existen distintos escenarios posibles y cada uno tiene una respuesta específica.

---

## Sugerencia

Cuando un problema presenta varios escenarios posibles, identifica cada caso antes de programar. Después traduce cada uno de ellos a una condición utilizando `if`, `else if` y `else`, asegurándote de que todas las situaciones estén cubiertas.