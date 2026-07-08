# Plantilla de solucion

## Analisis

- Entrada: Objeto js con los nombres de los equivos y su validacion de jugadores, si estan completos o no
- Proceso: Se ejecuta un filtro para obtener los equipos que estan completos e incompletos
- Salida: Devolverá los equipos validos para el torneo

## Reglas identificadas

1. Indetificar los equipos
2. Equipos completos
3. Equipos incompletos

## Pruebas

### Caso normal

Entrada:
```js
const equipos =  [
    { nombreEquipo: "Jaguares", validacion: "incompleto" },
    { nombreEquipo: "Altanes", validacion: "completo" },
    { nombreEquipo: "Dunas", validacion: "completo" }
  ];
```
Resultado esperado:
completos: 
    1: "Altanes"
    2: "Dunas"

incompletos: 
    1: "Jaguares"
### Caso borde

Entrada:
```js
const equipos =  [
    { nombreEquipo: "Jaguares", validacion: "incompleto" },
    { nombreEquipo: "Altanes", validacion: "incompleto" },
    { nombreEquipo: "Dunas", validacion: "incompleto" }
  ];
```

Resultado esperado:
Hay equipos incompletos:
    0: "Jaguares"​
    1: "Altanes"
    ​2: "Dunas"

## Explicacion final

Escribe aqui por que tu solucion funciona.
