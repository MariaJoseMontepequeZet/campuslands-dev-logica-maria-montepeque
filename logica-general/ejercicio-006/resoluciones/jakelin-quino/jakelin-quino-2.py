def buscar_auto(inventario, nombre_buscado):
    for auto in inventario:
        if auto["nombre"].lower() == nombre_buscado.lower():
            if auto["disponible"]:
                return {"encontrado": True, "mensaje": f"{nombre_buscado} está disponible para compra."}
            else:
                return {"encontrado": True, "mensaje": f"{nombre_buscado} está reservado."}
    return {"encontrado": False, "mensaje": "Auto no encontrado en el inventario."}

inventario_autos = [
    {"nombre": "Bugatti Chiron", "disponible": True},
    {"nombre": "Koenigsegg Jesko", "disponible": False}
]

print(buscar_auto(inventario_autos, "Bugatti Chiron"))
print(buscar_auto(inventario_autos, "Ferrari"))