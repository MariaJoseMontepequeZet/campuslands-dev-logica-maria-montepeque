# Resolución: Lógica General 020 - Estrategias de Selección

Este archivo explica los algoritmos de filtrado y optimización aplicados para la toma de decisiones en un menú de comida urbana.

---

## 1. Cómo se pensó el problema
El sistema resuelve la necesidad de los usuarios de seleccionar alternativas basadas en prioridades cambiantes (presupuesto, reputación o inmediatez). El algoritmo actúa como un motor de búsqueda lineal que itera sobre la colección de platos, comparando propiedades específicas según la bandera de estrategia suministrada.

### Tabla de Estructura
* **Entradas:** `menu_opciones` (Lista de Diccionarios), `filtro_estrategia` (Texto).
* **Proceso:** Evaluación condicional multiestrategia mediante un único ciclo de comparación de extremos (mínimos o máximos).
* **Salidas:** `opcion_seleccionada` (Diccionario), `estrategia_aplicada` (Texto).

---

## 2. Estrategia y Reglas Aplicadas
* **Polimorfismo Condicional Simple:** Un único bucle resuelve tres problemas de negocio distintos (búsqueda del menor precio, mayor puntaje o menor tiempo de preparación) optimizando el uso de memoria.
* **Control de Variaciones:** El formateo `.strip().capitalize()` limpia los textos ingresados evitando fallas por discrepancias de mayúsculas o espacios.

---

## 3. Casos Probados
1. **Caso Económico:** Identifica correctamente al Hot Dog como la alternativa de menor impacto monetario.
2. **Caso Popular:** Selecciona de forma exacta los Tacos al Pastor por poseer la puntuación más alta del menú de comida urbana.
3. **Caso Borde (Estructura Vacía):** Retorna de forma segura un estado nulo controlado si no hay productos disponibles.