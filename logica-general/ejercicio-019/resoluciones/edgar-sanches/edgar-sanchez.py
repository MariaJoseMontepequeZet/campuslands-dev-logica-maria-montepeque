def verificar_inventario_quimico(inventario_reactivos, formula_requerida):
    if not formula_requerida:
        return {"factible": True, "faltantes": {}, "estado": "Fórmula vacía. No requiere materiales."}

    faltantes = {}
    
    for elemento, cantidad_necesaria in formula_requerida.items():
        disponible = inventario_reactivos.get(elemento, 0)
        
        if disponible < cantidad_necesaria:
            faltantes[elemento] = cantidad_necesaria - disponible

    if faltantes:
        return {
            "factible": False,
            "faltantes": faltantes,
            "estado": "No factible. Faltan reactivos en el almacén de laboratorio."
        }
        
    return {
        "factible": True,
        "faltantes": {},
        "estado": "Factible. Inventario completo para sintetizar la fórmula."
    }

almacen = {"H": 10, "O": 5, "C": 2, "Na": 0}

# Prueba 1: Caso Normal (Sintetizar Agua H2O -> Requiere 2 de H y 1 de O)
print("--- Prueba 1 (Caso Normal: Reactivos Suficientes) ---")
formula_agua = {"H": 2, "O": 1}
res_1 = verificar_inventario_quimico(almacen, formula_agua)
print(f"Estado: {res_1['estado']} | Factible: {res_1['factible']}\n")

# Prueba 2: Caso Borde (Déficit de elementos y reactivos inexistentes)
print("--- Prueba 2 (Caso Borde: Insuficiencia e Inexistencia) ---")
formula_compleja = {"C": 5, "Na": 2, "Cl": 1}
res_2 = verificar_inventario_quimico(almacen, formula_compleja)
print(f"Estado: {res_2['estado']} | Faltantes: {res_2['faltantes']}\n")