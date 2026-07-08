# Solucion ejercicio 010 - Lectura de instrucciones

## Como pense el problema

Primero identifique las instrucciones que debe seguir una persona antes de confirmar un viaje. Luego las ordene paso a paso para validar que cada requisito se cumpla antes de pasar al siguiente.

## Entradas

La solucion recibe la informacion del viaje:

- Destino.
- Presupuesto.
- Documento valido.
- Cupos disponibles.

## Reglas aplicadas

1. Verificar que exista la informacion del viaje.
2. Comprobar que el documento sea valido.
3. Verificar que existan cupos disponibles.
4. Validar que el presupuesto sea suficiente.
5. Si todas las condiciones se cumplen, confirmar la reserva.

## Salidas

- Confirmacion de la reserva con el destino.
- Mensaje indicando el motivo por el cual no se puede realizar el viaje.

## Como ejecutar

Abrir una terminal y ejecutar:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Viaje con documento valido, cupos disponibles y presupuesto suficiente.

Resultado esperado:

```text
{
  estado: "Reserva confirmada",
  destino: "Antigua Guatemala",
  mensaje: "El viaje puede realizarse correctamente."
}
```

### Caso borde

Viaje con presupuesto insuficiente.

Resultado esperado:

```text
El presupuesto es insuficiente.
```