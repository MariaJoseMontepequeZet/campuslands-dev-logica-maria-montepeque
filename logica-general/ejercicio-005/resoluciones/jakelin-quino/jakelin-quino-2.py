def definir_prioridad(falla, es_emergencia):
    if es_emergencia:
        return {"prioridad": "Alta", "accion": "Ingreso inmediato a elevador."}
    if falla == "motor":
        return {"prioridad": "Media-Alta", "accion": "Programar para el mismo día."}
    return {"prioridad": "Baja", "accion": "Programar según agenda disponible."}

print(definir_prioridad("frenos", True)) 
print(definir_prioridad("aceite", False))