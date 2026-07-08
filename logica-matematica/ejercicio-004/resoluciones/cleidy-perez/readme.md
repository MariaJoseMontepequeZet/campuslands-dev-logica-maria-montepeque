# Solución del Reto: Inventario de Motos (Lógica General 004)

## 1. Leer instrucciones e Identificar Entradas
El problema requiere procesar una lista estructurada de vehículos y filtrar aquellos que un cliente realmente puede costear.
* **Entradas:**
  * `motos` (Arreglo de objetos): Datos técnicos y comerciales del inventario.
  * `marcaBuscada` (String): Filtro cualitativo de marca.
  * `presupuestoMaximo` (Número): Límite financiero del comprador.

## 2. Definir Salidas
* **Salida:** Un nuevo arreglo con las motos aptas, el cual incluye una propiedad calculada matemáticamente (`precioFinalConIVA`), evitando sorpresas en cajas o facturación.

## 3. Reglas de Negocio y Condicionales
Se aplican tres condicionales en cadena (AND lógico):
1. **Filtro de Estado:** `moto.disponible === true`.
2. **Filtro de Texto Normalizado:** Coincidencia exacta ignorando variaciones de fuentes (`.toLowerCase()`).
3. **Filtro de Capacidad Financiera:** El costo real calculado debe ser menor o igual al presupuesto disponible.

## 4. Cálculo Numérico y Razonamiento Cuantitativo
El core analítico de este reto demuestra que el precio de etiqueta no siempre es el valor de cierre. Mediante la constante de tasa impositiva `IVA = 0.12`, el programa realiza el cálculo:

$$\text{Precio Final} = \text{Precio Base} \times 1.12$$

Esto obliga al algoritmo a descartar motos que en papel parecen económicas (ej. Moto Honda de $3500$ frente a un presupuesto de $4000$), pero que al aplicar el análisis cuantitativo real ascienden a $4165$, superando la capacidad del cliente.

## 5. Casos Probados
* **Caso de Descarte Cuantitativo:** Al buscar "Honda" con presupuesto de 4000, el programa devuelve un arreglo vacío `[]` porque la única moto disponible excede el presupuesto real tras calcular el impuesto.
* **Caso de Éxito Exacto:** Al buscar "Suzuki" con 3500 de presupuesto, el cálculo numérico determina que el costo final es 3332, permitiendo que pase el filtro condicional exitosamente.