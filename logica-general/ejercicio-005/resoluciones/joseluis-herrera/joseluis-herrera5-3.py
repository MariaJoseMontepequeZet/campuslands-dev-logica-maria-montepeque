taller_mecanico = [
    {"cliente": "Juan", "vehiculo": "Moto", "prioridad": "Alta"},
    {"cliente": "Marta", "vehiculo": "Carro", "prioridad": "Media"},
    {"cliente": "Maria", "vehiculo": "Bus", "prioridad": "Alta"}
]

def orden_prioridad(lista_clientes):
    alta_prioridad = []
    media_prioridad = []
    baja_prioridad = []
    
    for vehiculo in lista_clientes:
        if vehiculo["prioridad"] == "Alta":
            alta_prioridad.append(vehiculo["cliente"])
        elif vehiculo["prioridad"] == "Media":
            media_prioridad.append(vehiculo["cliente"])
        elif vehiculo["prioridad"] == "Baja":
            baja_prioridad.append(vehiculo["cliente"])
        else:
            print("No hay cliente en el taller")
            
    print(f"Clientes de mayor prioridad: {', '.join(alta_prioridad)}")
    print(f"Clientes de media prioridad: {', '.join(media_prioridad)}")
    print(f"Clientes de baja prioridad: {', '.join(baja_prioridad)}")

orden_prioridad(taller_mecanico)