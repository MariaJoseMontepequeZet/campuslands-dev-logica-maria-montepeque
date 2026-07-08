# Solución: Búsqueda de Elementos (Autos Hiperdeportivos)

## Leer instrucciones e Identificar entradas
El objetivo de este reto es crear un buscador para un concesionario de autos súper rápidos. Un cliente nos dice qué auto quiere y nosotros debemos revisar si lo tenemos o no en nuestra lista.
* **Entradas:** * `autos`: Una lista con los autos que tenemos guardados.
  * `modeloBuscado`: El nombre del carro que la persona quiere encontrar (un texto).

## Definir salidas
* **Salidas:** Un mensaje de texto sencillo que le dice al cliente qué acción vamos a tomar y el motivo (si se puede ver ya, si hay que esperar o si de plano no lo tenemos).

## Reglas de negocio y Razonamiento lógico
Para resolver este problema, pensé en cómo lo haría una persona en la vida real revisando una libreta hoja por hoja:
1. **Regla de Búsqueda:** Usamos un ciclo `for` para mirar los autos uno por uno. Comparamos el nombre usando `.toLowerCase()` para que si el usuario escribe "chiron" o "CHIRON", el programa lo entienda igual.
2. **Regla de Ubicación (Condicionales):** Si el auto sí está en la lista, usamos otro condicional `if` para ver su estado:
   * Si `enExhibicion` es verdadero (`true`), se puede ver de inmediato.
   * Si es falso (`false`), le avisamos que está guardado en la bodega.
3. **Regla de Ausencia:** Si el ciclo termina y revisamos todos los carros sin encontrar el modelo, el programa sale y avisa que no se encuentra en el inventario.

## Probar casos
* **Caso Normal:** Buscamos "Chiron". El código lo encuentra en la primera posición y, como su estado de exhibición es `true`, nos dice que podemos agendar la cita hoy mismo.
* **Caso Borde:** Buscamos "Ferrari", el cual no está en nuestra lista de tres autos. El sistema lee toda la base de datos sin trabarse y amablemente nos dice que no se encuentra, sugiriendo ofrecer otras opciones.