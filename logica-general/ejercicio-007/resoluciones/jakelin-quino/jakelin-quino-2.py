def validar_cancion(titulo, duracion, volumen):
    if duracion <= 0:
        return {"valido": False, "motivo": "Duración inválida: debe ser mayor a 0."}
    if volumen < 0 or volumen > 100:
        return {"valido": False, "motivo": "Volumen fuera de rango (0-100)."}
    return {"valido": True, "motivo": f"Canción '{titulo}' correcta."}

print(validar_cancion("Bohemian Rhapsody", 354, 80))
print(validar_cancion("Canción Silenciosa", -10, 50))