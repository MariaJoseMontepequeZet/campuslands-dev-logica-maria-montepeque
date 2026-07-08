def organizar_peleadores_kickboxing(peleadores):
    if not peleadores:
        return {"Pluma": [], "Welter": [], "Pesado": []}
    categoria_pluma = []
    categoria_welter = []
    categoria_pesado = []
    for peleador in peleadores:
        nombre = peleador.get("nombre", "Anónimo")
        peso = peleador.get("peso_kg", 0)
        if peso < 65:
            categoria_pluma.append({"nombre": nombre, "peso_kg": peso})
        elif 65 <= peso <= 75:
            categoria_welter.append({"nombre": nombre, "peso_kg": peso})
        else:
            categoria_pesado.append({"nombre": nombre, "peso_kg": peso})
    return {
        "Pluma": categoria_pluma,
        "Welter": categoria_welter,
        "Pesado": categoria_pesado
    }
lista_inscritos = [
    {"nombre": "Carlos Mendoza", "peso_kg": 62},
    {"nombre": "Daniel Silva", "peso_kg": 78},
    {"nombre": "Andrés López", "peso_kg": 70},
    {"nombre": "Luis Torres", "peso_kg": 64},
    {"nombre": "Marcos Gómez", "peso_kg": 73}
]

print("--- Prueba 1 (Caso Normal: Listas Organizadas) ---")
resultado_1 = organizar_peleadores_kickboxing(lista_inscritos)
for categoria, miembros in resultado_1.items():
    print(f"Categoría {categoria}: {[p['nombre'] for p in miembros]}")
print()
print("--- Prueba 2 (Caso Borde: Sin registros) ---")
resultado_2 = organizar_peleadores_kickboxing([])
print(f"Resultado de organización: {resultado_2}\n")