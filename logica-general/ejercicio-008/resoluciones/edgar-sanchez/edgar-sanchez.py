def flujo_recomendacion_scifi(edad_usuario, prefiere_viajes_tiempo, tiempo_disponible_min):
    pasos = []
    pasos.append("Paso 1: Verificación de edad completada.")
    if edad_usuario < 13:
        return {
            "pelicula_recomendada": "Wall-E",
            "pasos_completados": pasos,
            "motivo": "Recomendación infantil apta para todo público."
        }
    pasos.append("Paso 2: Filtro de preferencia temática aplicado.")
    if prefiere_viajes_tiempo:
        pasos.append("Paso 3: Evaluación de duración para viajes en el tiempo.")
        if tiempo_disponible_min >= 150:
            return {
                "pelicula_recomendada": "Interstellar",
                "pasos_completados": pasos,
                "motivo": "Película compleja de viajes/dilatación temporal de larga duración."
            }
        else:
            return {
                "pelicula_recomendada": "Back to the Future ",
                "pasos_completados": pasos,
                "motivo": "Clásico de viajes en el tiempo de duración estándar."
            }
    else:
        pasos.append("Paso 3: Evaluación de duración para temática espacial/cyberpunk.")
        if tiempo_disponible_min >= 160:
            return {
                "pelicula_recommended": "Blade Runner 2048",
                "pasos_completados": pasos,
                "motivo": "Experiencia Cyberpunk inmersiva y larga."
            }
        else:
            return {
                "pelicula_recomendada": "The Matrix",
                "pasos_completados": pasos,
                "motivo": "Acción Sci-Fi / Cyberpunk de duración estándar."
            }
print("--- Prueba 1 (Caso Normal: Flujo Estándar) ---")
res_1 = flujo_recomendacion_scifi(edad_usuario=25, prefiere_viajes_tiempo=True, tiempo_disponible_min=120)
print(f"Recomendación: {res_1['pelicula_recomendada']}")
print("Flujo recorrido:")
for p in res_1["pasos_completados"]:
    print(f" - {p}")
print()
print("--- Prueba 2 (Caso Borde: Salida temprana del flujo) ---")
res_2 = flujo_recomendacion_scifi(edad_usuario=10, prefiere_viajes_tiempo=False, tiempo_disponible_min=180)
print(f"Recomendación: {res_2['pelicula_recomendada']}")
print("Flujo recorrido:")
for p in res_2["pasos_completados"]:
    print(f" - {p}")
print()