def detectar_inconsistencias_playlist(playlist):
    if not playlist:
        return {
            "tiene_inconsistencias": True,
            "errores_detectados": ["La playlist no contiene ninguna canción."]
        }      
    errores = []
    ids_registrados = set()    
    for indice, cancion in enumerate(playlist, 1):
        id_cancion = cancion.get("id")
        titulo = cancion.get("titulo", "").strip()
        artista = cancion.get("artista", "").strip()
        duracion = cancion.get("duracion_segundos", 0)
        if not titulo or not artista:
            errores.append(f"Posición {indice}: Faltan campos obligatorios (Título o Artista).")
        if duracion <= 0:
            errores.append(f"Posición {indice} ('{titulo}'): Duración inválida ({duracion}s).")
        if id_cancion in ids_registrados:
            errores.append(f"Posición {indice}: ID duplicado ({id_cancion}) detectado.")
        else:
            if id_cancion is not None:
             ids_registrados.add(id_cancion)               
    return {
        "tiene_inconsistencias": len(errores) > 0,
        "errores_detectados": errores if errores else ["Ninguna. Playlist limpia."]
    }
playlist_usuario = [
    {"id": 101, "titulo": "Rap Supremo", "artista": "HipHop Crew", "duracion_segundos": 180},
    {"id": 102, "titulo": "Trap Vibe", "artista": "", "duracion_segundos": 150},  # Inconsistencia: Falta artista
    {"id": 101, "titulo": "Electro Beat", "artista": "DJ Synth", "duracion_segundos": 210},  # Inconsistencia: ID Duplicado
    {"id": 104, "titulo": "Lo-Fi Nights", "artista": "Chill Producer", "duracion_segundos": -30}  # Inconsistencia: Duración <= 0
]
print("--- Prueba 1 (Detección de Inconsistencias) ---")
res_1 = detectar_inconsistencias_playlist(playlist_usuario)
print(f"¿Tiene Inconsistencias?: {res_1['tiene_inconsistencias']}")
print("Reporte de errores:")
for err in res_1["errores_detectados"]:
    print(f" - {err}")
print()
print("--- Prueba 2 (Caso Borde: Todo Limpio) ---")
playlist_perfecta = [
    {"id": 201, "titulo": "Perfect Track", "artista": "Artist A", "duracion_segundos": 200}
]
res_2 = detectar_inconsistencias_playlist(playlist_perfecta)
print(f"¿Tiene Inconsistencias?: {res_2['tiene_inconsistencias']}")
print(f"Reporte: {res_2['errores_detectados'][0]}\n")