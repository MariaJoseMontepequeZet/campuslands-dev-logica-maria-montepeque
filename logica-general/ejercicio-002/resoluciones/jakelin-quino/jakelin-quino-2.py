def validar_partido(goles_favor, goles_contra):
    if goles_favor < 0 or goles_contra < 0:
        return {"estado": "Invalido", "motivo": "Los goles no pueden ser negativos."}    
    if goles_favor > goles_contra:
        return {"estado": "Valido", "resultado": "Victoria", "puntos": 3}
    elif goles_favor == goles_contra:
        return {"estado": "Valido", "resultado": "Empate", "puntos": 1}
    else:
        return {"estado": "Valido", "resultado": "Derrota", "puntos": 0}

print(validar_partido(3, 1)) 
print(validar_partido(-1, 2))