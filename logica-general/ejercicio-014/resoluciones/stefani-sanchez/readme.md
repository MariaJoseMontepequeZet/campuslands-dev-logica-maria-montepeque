# Solucion ejercicio 014 - Diagnostico de errores

## Como pense el problema

El objetivo fue revisar cada solicitud de tatuaje para identificar posibles errores antes de aprobar el procedimiento. Se evaluaron las condiciones una por una para determinar si la solicitud es valida.

## Entradas

- Lista de solicitudes.

Cada solicitud contiene:

- Nombre del cliente.
- Edad.
- Consentimiento informado.

## Reglas aplicadas

1. La lista debe contener solicitudes.
2. El cliente debe ser mayor o igual a 18 años.
3. Debe existir consentimiento informado.
4. Si alguna regla falla, se muestra el error correspondiente.
5. Si todas las reglas se cumplen, la solicitud se aprueba.

## Salidas

- Resultado de cada solicitud indicando si fue aprobada o el error encontrado.
- Mensaje cuando no existen solicitudes.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Resultado esperado:

```text
Carlos: Solicitud aprobada.
Ana: Error - Cliente menor de edad.
Luis: Error - Falta el consentimiento informado.
```

### Caso borde

Resultado esperado:

```text
No hay solicitudes registradas.
```