# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de items, una prioridad y una regla.
- **Proceso:** Validar la existencia de los datos, verificar si la regla exige filtrar elementos "bloqueado" bajo prioridad "alta" y confirmar si existen dichos elementos en la lista.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si la estructura de entrada es inválida o no contiene items, no se realizan cambios.
2. Si la regla incluye "bloqueado" y la prioridad es "alta", se debe verificar la existencia de items bloqueados.
3. Si no se cumplen los criterios de filtrado críticos, se muestra el inventario completo.

## Pruebas

### **Caso normal**

Entrada:
```json
{ 
  "items": ["aprobado", "pendiente", "bloqueado"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "revisar bloqueado", 
  "motivo": "la regla prioriza riesgos antes de tareas normales." 
}
```

### **Caso borde**

Entrada:

```json
{ 
  "items": ["aprobado"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "mostrar inventario completo", 
  "motivo": "No se requiere aislamiento de elementos bajo las reglas actuales." 
}
```

### Explicacion final
La solución funciona porque primero asegura que los datos sean legibles para el código. Luego, utiliza una combinación de condiciones y el método .filter() para aislar específicamente los elementos "bloqueado"; si encuentra alguno bajo una prioridad alta, dispara la acción de revisión, de lo contrario, muestra el inventario completo por defecto.