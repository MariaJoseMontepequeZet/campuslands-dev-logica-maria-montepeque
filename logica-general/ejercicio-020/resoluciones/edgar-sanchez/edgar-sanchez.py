def aplicar_estrategia_comida(menu_opciones, filtro_estrategia):
    estrategia = filtro_estrategia.strip().capitalize()
    
    if not menu_opciones:
        return {"opcion_seleccionada": None, "estrategia_aplicada": estrategia, "motivo": "Menú sin opciones."}

    seleccionado = menu_opciones[0]

    for plato in menu_opciones:
        if estrategia == "Economico" and plato["precio"] < seleccionado["precio"]:
            seleccionado = plato
        elif estrategia == "Popular" and plato["calificacion"] > seleccionado["calificacion"]:
            seleccionado = plato
        elif estrategia == "Rapido" and plato["tiempo_minutos"] < seleccionado["tiempo_minutos"]:
            seleccionado = plato

    return {
        "opcion_seleccionada": seleccionado,
        "estrategia_aplicada": estrategia,
        "motivo": f"Plato elegido optimizando la estrategia de selección: {estrategia}."
    }

menu_urbano = [
    {"nombre": "Burguer Doble Carne", "precio": 35, "calificacion": 4.8, "tiempo_minutos": 15},
    {"nombre": "Hot Dog Callejero", "precio": 15, "calificacion": 4.2, "tiempo_minutos": 5},
    {"nombre": "Tacos al Pastor x3", "precio": 25, "calificacion": 4.9, "tiempo_minutos": 8}
]

print("--- Prueba 1 (Caso Normal: Estrategia Económica) ---")
res_1 = aplicar_estrategia_comida(menu_urbano, "Economico")
print(f"Elegido: {res_1['opcion_seleccionada']['nombre']} | Precio: {res_1['opcion_seleccionada']['precio']}\n")

print("--- Prueba 2 (Caso Normal: Estrategia Popular) ---")
res_2 = aplicar_estrategia_comida(menu_urbano, "popular")
print(f"Elegido: {res_2['opcion_seleccionada']['nombre']} | Calificación: {res_2['opcion_seleccionada']['calificacion']}\n")

print("--- Prueba 3 (Caso Borde: Menú Vacío) ---")
res_3 = aplicar_estrategia_comida([], "Rapido")
print(f"Elegido: {res_3['opcion_seleccionada']} | Motivo: {res_3['motivo']}\n")