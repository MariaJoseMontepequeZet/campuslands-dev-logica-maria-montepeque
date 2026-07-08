def buscar_hiperdeportivo(garaje, modelo_buscado):
    if not modelo_buscado or modelo_buscado.strip() == "":
        return {
            "encontrado": False,
            "auto": None,
            "mensaje": "Búsqueda rechazada: El término de búsqueda está vacío."
        }
    for auto in garaje:
        modelo_actual = auto.get("modelo", "").lower()
        marca_actual = auto.get("marca", "").lower()
        termino_limpio = modelo_buscado.strip().lower()
        if termino_limpio == modelo_actual or termino_limpio == marca_actual:
            return {
                "encontrado": True,
                "auto": auto,
                "mensaje": f"¡Éxito! Vehículo localizado en el garaje principal."
            }
    return {
        "encontrado": False,
        "auto": None,
        "mensaje": f"El vehículo '{modelo_buscado}' no se encuentra en el inventario actual."
    }
garaje_central = [
    {"marca": "Bugatti", "modelo": "Chiron", "velocidad_max": "420 km/h", "precio": "3.3M"},
    {"marca": "Koenigsegg", "modelo": "Jesko", "velocidad_max": "480 km/h", "precio": "3.0M"},
    {"marca": "Pagani", "modelo": "Huayra", "velocidad_max": "383 km/h", "precio": "2.8M"}
]
print("--- Prueba 1 (Caso Normal: Encontrado) ---")
res_1 = buscar_hiperdeportivo(garaje_central, modelo_buscado="jEsKo")
print(f"Encontrado: {res_1['encontrado']} | Mensaje: {res_1['mensaje']}\nDatos: {res_1['auto']}\n")
print("--- Prueba 2 (Caso Normal: No Encontrado) ---")
res_2 = buscar_hiperdeportivo(garaje_central, modelo_buscado="Ferrari LaFerrari")
print(f"Encontrado: {res_2['encontrado']} | Mensaje: {res_2['mensaje']}\n")
print("--- Prueba 3 (Caso Borde: Espacios Vacíos) ---")
res_3 = buscar_hiperdeportivo(garaje_central, modelo_buscado="   ")
print(f"Encontrado: {res_3['encontrado']} | Mensaje: {res_3['mensaje']}\n")