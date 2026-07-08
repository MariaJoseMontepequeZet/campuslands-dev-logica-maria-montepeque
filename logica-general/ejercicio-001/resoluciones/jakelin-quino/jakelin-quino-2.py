def clasificar_jugador(nombre, puntos):
    if puntos >= 3000:
        return {"jugador": nombre, "liga": "Diamante", "mensaje": "Nivel profesional."}    
    elif puntos >= 1500:
        return {"jugador": nombre, "liga": "Oro", "mensaje": "Nivel intermedio."}    
    else:
        return {"jugador": nombre, "liga": "Bronce", "mensaje": "Nivel principiante."}

print(clasificar_jugador("PlayerOne", 3200))
print(clasificar_jugador("Newbie", 500))