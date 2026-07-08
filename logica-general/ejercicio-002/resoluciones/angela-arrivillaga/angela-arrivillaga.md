# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de items y una prioridad.
- **Proceso:** Validar existencia de datos, verificar si la lista de items está vacía para alertar al administrador, y comprobar si existe un estado "bloqueado" con prioridad "alta" para detener el proceso.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si el objeto de entrada o los items no existen, se rechaza la solicitud.
2. Si la lista de items está vacía, se debe alertar al administrador.
3. Si existe un item "bloqueado" con prioridad "alta", se requiere una revisión manual.
4. Si los datos cumplen con el esquema y no hay bloqueos críticos, se aprueban.

## Pruebas

### **Caso normal**

**Entrada:**
```json
{ 
  "items": ["aprobado", "pendiente", "bloqueado"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

**Resultado esperado:**

```json
{ 
  "accion": "revisar bloqueado", 
  "motivo": "la regla prioriza riesgos antes de tareas normales." 
}
```

### **Caso borde**

**Entrada:**

```JSON
{ 
  "items": [], 
  "prioridad": "baja", 
  "regla": "revisar bloqueados primero" 
}
```

**Resultado esperado:**

```JSON
{ 
  "accion": "alertar administrador", 
  "motivo": "La lista de datos de ranking se encuentra vacía." 
}
```

## Explicacion final

La solución funciona porque utiliza una serie de guardas (if) que descartan casos erróneos o críticos en orden de importancia. Primero valida la estructura, luego verifica la integridad de la lista y, finalmente, aplica la lógica de negocio basada en el estado de los items y la prioridad antes de llegar a la aprobación final.