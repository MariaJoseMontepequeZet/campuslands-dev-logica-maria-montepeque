# Ejercicio 005 - Taller Mecánico

**Camper:** Antonio Canux

## Analisis

- **Entrada:** La función recibe dos parámetros: `sistemaVehiculo` (el área de la moto o auto que requiere reparación, como "frenos", "motor", "carroceria") y `tipoCliente` ("regular" o "flotilla").
- **Proceso:** Se utiliza una estructura condicional `if/else if` para ordenar las prioridades. Primero se interceptan las fallas críticas que inmovilizan el vehículo o comprometen la seguridad. Luego, se evalúa el peso comercial del cliente (flotillas) para las fallas menores, dejando el resto como prioridad baja.
- **Salida:** Un objeto que contiene el `nivelPrioridad` ("Alta", "Media", "Baja") y la `accion` operativa específica que el taller debe ejecutar.

## Reglas identificadas

1. Cualquier vehículo que ingrese por fallas en sistemas críticos ("frenos", "motor", "transmision") recibe automáticamente prioridad "Alta", sin importar el tipo de cliente.
2. Si la falla no es crítica pero el vehículo pertenece a un cliente de "flotilla" (empresas), se le asigna prioridad "Media" por cumplimiento de contratos.
3. Si la falla no es crítica y el cliente es "regular", la reparación se clasifica con prioridad "Baja" y se agenda para un momento de menor flujo en el taller.

## Pruebas

### Caso normal

Entrada: `sistemaVehiculo: "transmision"`, `tipoCliente: "regular"`

Resultado esperado: 
```text
nivelPrioridad: "Alta"
accion: "Asignar técnico especialista y trasladar al área de mecánica pesada inmediatamente."
```

### Caso borde
Entrada: `sistemaVehiculo: "suspension"`, `tipoCliente: "flotilla"`

Resultado esperado:
```text
nivelPrioridad: "Media"
accion: "Programar en el siguiente bloque de servicio disponible para mantener el contrato comercial."
```

## Explicacion final
La solución funciona porque implementa un sistema de triaje o clasificación estructurada. En un taller mecánico, el orden de atención no siempre depende de quién llegó primero, sino de la gravedad de la falla y los compromisos comerciales. Al evaluar primero el sistema del vehículo (sistemaVehiculo), garantizamos que las reparaciones críticas (como bajar una transmisión o reparar un motor) no se retrasen, y al usar el tipoCliente como condición secundaria, optimizamos el flujo de trabajo sin descuidar a los clientes corporativos.