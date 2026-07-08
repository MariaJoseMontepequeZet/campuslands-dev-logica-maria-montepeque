def validar_registro_ranking(nombre_equipo, partidos_jugados, puntos):
    if not nombre_equipo or nombre_equipo.strip() == "":
        return {
            "valido": False,
            "resultado": "Rechazado",
            "motivo": "El nombre del equipo no puede estar vacío."
        }
    if partidos_jugados < 0 or puntos < 0:
        return {
            "valido": False,
            "resultado": "Rechazado",
            "motivo": "Los partidos jugados y los puntos no pueden ser valores negativos."
        }
    maximo_puntos_posible = partidos_jugados * 3
    if puntos > maximo_puntos_posible:
        return {
            "valido": False,
            "resultado": "Rechazado",
            "motivo": f"Inconsistencia: Un equipo no puede tener más de {maximo_puntos_posible} puntos con {partidos_jugados} partidos."
        }
    return {
        "valido": True,
        "resultado": "Aprobado",
        "motivo": "Los datos cumplen con las reglas de validación y consistencia deportiva."
    }
print("--- Prueba 1 (Caso Normal) ---")
res_1 = validar_registro_ranking("Futsal Club", partidos_jugados=5, puntos=10)
print(f"Resultado: {res_1['resultado']} | Motivo: {res_1['motivo']}\n")
print("--- Prueba 2 (Caso Borde - Inconsistencia) ---")
res_2 = validar_registro_ranking("Real Goleadores", partidos_jugados=2, puntos=9)
print(f"Resultado: {res_2['resultado']} | Motivo: {res_2['motivo']}\n")
print("--- Prueba 3 (Caso Borde - Vacío) ---")
res_3 = validar_registro_ranking("   ", partidos_jugados=4, puntos=6)
print(f"Resultado: {res_3['resultado']} | Motivo: {res_3['motivo']}\n")