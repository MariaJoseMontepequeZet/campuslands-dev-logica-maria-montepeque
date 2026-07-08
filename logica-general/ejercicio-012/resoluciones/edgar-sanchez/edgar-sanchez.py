def comparar_opciones_pingpong(opciones_palas, estilo_jugador):
    estilo = estilo_jugador.strip().capitalize()
    if not opciones_palas:
        return {
            "pala_elegida": None,
            "motivo": "No hay opciones de palas disponibles para realizar la comparación."
        }
    caracteristica_clave = "velocidad" if estilo == "Ataque" else "control"
    
    mejor_pala = None
    max_valor = -1
    for pala in opciones_palas:
        valor_actual = pala.get(caracteristica_clave, 0)
        if valor_actual > max_valor:
            max_valor = valor_actual
            mejor_pala = pala
            
    return {
        "pala_elegida": mejor_pala,
        "motivo": f"Elegida por ofrecer el mayor índice de {caracteristica_clave} ({max_valor}/10), ideal para un juego de estilo {estilo}."
    }
inventario_palas = [
    {"modelo": "Carbon Strike", "velocidad": 9, "control": 6, "precio": 45},
    {"modelo": "Classic Wood", "velocidad": 5, "control": 9, "precio": 25},
    {"modelo": "Pro Balance", "velocidad": 7, "control": 8, "precio": 35}
]
print("--- Prueba 1 (Caso Normal: Estilo Ataque) ---")
res_1 = comparar_opciones_pingpong(inventario_palas, estilo_jugador="Ataque")
print(f"Pala Recomendada: {res_1['pala_elegida']['modelo']}")
print(f"Motivo: {res_1['motivo']}\n")
print("--- Prueba 2 (Caso Normal: Estilo Control) ---")
res_2 = comparar_opciones_pingpong(inventario_palas, estilo_jugador="control")
print(f"Pala Recomendada: {res_2['pala_elegida']['modelo']}")
print(f"Motivo: {res_2['motivo']}\n")

print("--- Prueba 3 (Caso Borde: Sin Inventario) ---")
res_3 = comparar_opciones_pingpong([], estilo_jugador="Ataque")
print(f"Pala Recomendada: {res_3['pala_elegida']}")
print(f"Motivo: {res_3['motivo']}\n")