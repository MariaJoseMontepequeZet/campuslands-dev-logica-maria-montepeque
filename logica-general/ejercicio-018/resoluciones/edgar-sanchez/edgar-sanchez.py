def asignar_turno_soldadura(lista_trabajos, es_emergencia=False):
    if not lista_trabajos:
        return {"turno_asignado": None, "cola_restante": [], "motivo": "No hay trabajos pendientes."}
        
    if es_emergencia:
        emergencia = lista_trabajos.pop(0)
        return {"turno_asignado": emergencia, "cola_restante": lista_trabajos, "motivo": "Prioridad absoluta por emergencia operativa."}

    orden_prioridad = {"TIG": 1, "MIG": 2, "Arco": 3}
    
    def obtener_prioridad(item):
        return orden_prioridad.get(item.get("tipo", ""), 99)

    lista_trabajos.sort(key=obtener_prioridad)
    siguiente = lista_trabajos.pop(0)
    
    return {
        "turno_assigned": siguiente,
        "cola_restante": lista_trabajos,
        "motivo": f"Turno asignado por criticidad técnica del tipo {siguiente['tipo']}."
    }

cola_taller = [
    {"id": 1, "tipo": "Arco"},
    {"id": 2, "tipo": "TIG"},
    {"id": 3, "tipo": "MIG"}
]

print("--- Prueba 1 (Caso Normal: Orden por Complejidad TIG primero) ---")
res_1 = asignar_turno_soldadura(list(cola_taller), es_emergencia=False)
print(f"Siguiente: {res_1['turno_assigned']} | Restantes: {len(res_1['cola_restante'])}\n")

print("--- Prueba 2 (Caso Borde: Emergencia interrumpe cola) ---")
res_2 = asignar_turno_soldadura(list(cola_taller), es_emergencia=True)
print(f"Siguiente: {res_2['turno_assigned']} | Restantes: {len(res_2['cola_restante'])}\n")