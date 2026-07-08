# Plantilla de solucion

## Analisis

- Entrada: Se recibirá un objeto js en el cual esta el id, la prioridad y la placa
- Proceso: Filtrará por prioridad
- Salida: Devolverá las placas con mayor prioridad

## Reglas identificadas

1. Ordenar por prioridad
2. La importancia radicará en la prioriad del objeto

## Pruebas

### Caso normal

Entrada:
``` js
const tickets = [
  { id: "A", prioridad: "alta", placa: "F458HNK" },
  { id: "B", prioridad: "baja", placa: "B488HJY" },
  { id: "C", prioridad: "media", placa: "A123XYZ" },
];
```

Resultado esperado:
Devolverá los registros por orden de prioridad. A primero, luego C y luego B.

### Caso borde

Entrada: Todos los registros con la misma prioridad
``` js
const tickets = [
  { id: "A", prioridad: "baja", placa: "F458HNK" },
  { id: "B", prioridad: "baja", placa: "B488HJY" },
  { id: "C", prioridad: "baja", placa: "A123XYZ" },
];
```

Resultado esperado:
El resultado no cambiará y solo se quedará en el roden A, B, C

## Explicacion final
Funciona ordenando los registros basandose en la prioridad de los objetos
