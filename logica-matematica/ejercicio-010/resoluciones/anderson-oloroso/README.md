# Plantilla de solucion

## Analisis

- Entrada:
- Proceso:
- Salida:

## Reglas identificadas

1.
2.
3.

## Pruebas

### Caso normal

Entrada:

Resultado esperado:

### Caso borde

Entrada:

Resultado esperado:

## Explicacion final

Escribe aqui por que tu solucion funciona.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa la información económica de un viaje.
  - El objeto contiene:
    - `destino`: lugar al que se realizará el viaje.
    - `transporte`: costo del traslado.
    - `alojamiento`: costo del hospedaje.
    - `alimentacion`: presupuesto destinado a comidas.
    - `actividades`: costo de actividades turísticas.

- **Proceso:**
  - Validar que los valores económicos no sean negativos.
  - Sumar todos los gastos para obtener el costo exacto del viaje:

    \[
    Costo\ Total = Transporte + Alojamiento + Alimentacion + Actividades
    \]

  - Aplicar redondeo al costo total utilizando la función matemática de aproximación al entero más cercano.
  - Calcular la diferencia generada por el redondeo:

    \[
    Diferencia = Costo\ Redondeado - Costo\ Exacto
    \]

  - Calcular un costo estimado por persona dividiendo el presupuesto redondeado entre dos viajeros.

- **Salida:**
  - Un objeto con:
    - Destino del viaje.
    - Costo exacto.
    - Costo redondeado.
    - Diferencia generada por el redondeo.
    - Costo estimado por persona.

## Reglas identificadas

1. Todos los gastos del viaje deben ser valores mayores o iguales a cero.
2. El costo total se obtiene mediante la suma de todos los componentes del presupuesto.
3. El valor final del presupuesto debe redondearse al entero más cercano utilizando:

\[
Costo\ Redondeado = Math.round(Costo\ Exacto)
\]

4. La diferencia de precisión se obtiene comparando el valor redondeado contra el valor exacto.
5. El costo por persona se calcula dividiendo el presupuesto redondeado entre la cantidad de viajeros establecida.

## Pruebas

### Caso normal

Entrada:

```javascript
const viaje = {
  destino: "Paris",
  transporte: 450.75,
  alojamiento: 800.45,
  alimentacion: 320.30,
  actividades: 129.80
};
```

Resultado esperado:

```javascript
{
  destino: "Paris",
  costoExacto: 1701.3,
  costoRedondeado: 1701,
  diferenciaRedondeo: -0.3,
  costoEstimadoPorPersona: 850.5
}
```

### Caso borde

Entrada:

```javascript
const viaje = {
  destino: "Roma",
  transporte: 500,
  alojamiento: -200,
  alimentacion: 300,
  actividades: 100
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los gastos no pueden tener valores negativos."
}
```

## Explicacion final

La solución permite gestionar un presupuesto turístico aplicando conceptos de redondeo y precisión numérica. Primero se validan los datos para asegurar que los costos sean correctos y no existan valores negativos.

Después se realiza la suma de todos los gastos para obtener el costo real del viaje. Como los presupuestos suelen necesitar valores aproximados para reportes o planificación, se aplica un redondeo al total y se calcula la diferencia entre el valor exacto y el aproximado.

Finalmente se obtiene una estimación individual del costo para los viajeros. El algoritmo demuestra cómo manejar cálculos financieros básicos conservando información sobre la precisión perdida durante el proceso de redondeo.