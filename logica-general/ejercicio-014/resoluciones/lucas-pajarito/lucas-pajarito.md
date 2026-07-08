# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de solicitudes de tatuajes con la siguiente información:
    - Nombre del cliente.
    - Diseño solicitado.
    - Disponibilidad de tinta.
    - Estado de la máquina de tatuar.

- **Proceso:**
  1. Recorrer el arreglo de tatuajes.
  2. Verificar si hay tinta disponible.
  3. Verificar si la máquina funciona correctamente.
  4. Mostrar el error encontrado o indicar que el tatuaje puede realizarse.

- **Salida:**
  - Un mensaje indicando si existe algún error o si el tatuaje puede realizarse sin inconvenientes.

---

## Reglas identificadas

1. Debe haber tinta disponible para realizar el tatuaje.
2. La máquina de tatuar debe estar funcionando correctamente.
3. Si ambas condiciones se cumplen, el tatuaje puede realizarse.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    cliente: "Sofía",
    diseño: "Mariposa",
    tintaDisponible: true,
    maquinaFuncionando: true
}
```

**Resultado esperado:**

```text
Sofía: Todo listo para realizar el tatuaje.
```

---

### Caso borde

**Entrada:**

```javascript
{
    cliente: "Laura",
    diseño: "Rosa",
    tintaDisponible: false,
    maquinaFuncionando: true
}
```

**Resultado esperado:**

```text
Laura: Error - No hay tinta disponible.
```

> Este es un caso borde porque solo uno de los requisitos falla. El programa debe identificar correctamente el error y detener el proceso antes de comenzar el tatuaje.

---

## Explicación final

La solución funciona porque revisa cada solicitud de tatuaje y verifica que los recursos necesarios estén disponibles. Primero comprueba si hay tinta y luego si la máquina está funcionando correctamente. Si encuentra algún problema, informa el error correspondiente; de lo contrario, indica que el tatuaje puede realizarse. Así se resuelve un problema de **diagnóstico de errores**, identificando la causa que impide completar el procedimiento.

---

## Sugerencia

Cuando debas diagnosticar errores, revisa cada requisito en un orden lógico. Evalúa primero las condiciones más importantes y, si alguna falla, informa claramente cuál es el problema antes de continuar con el proceso.