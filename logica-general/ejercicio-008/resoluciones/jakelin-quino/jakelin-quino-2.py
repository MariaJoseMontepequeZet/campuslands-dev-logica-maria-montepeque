def activar_salto(energia_suficiente, escudos_activos, trayectoria_calculada):
    if not energia_suficiente:
        return {"listo": False, "motivo": "Fallo en el núcleo: Energía insuficiente."}    
    if escudos_activos:
        return {"listo": False, "motivo": "Seguridad: Los escudos deben estar apagados para saltar."}    
    if not trayectoria_calculada:
        return {"listo": False, "motivo": "Navegación: Trayectoria no calculada."}    
    return {"listo": True, "motivo": "Protocolo de salto activado con éxito."}

print(activar_salto(True, False, True))
print(activar_salto(True, True, True))