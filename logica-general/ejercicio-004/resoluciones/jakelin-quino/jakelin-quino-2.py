def filtrar_motos(cilindraje, es_nueva):
    if cilindraje >= 600 and not es_nueva:
        return {"disponible": False, "motivo": "Motos de alta cilindrada usadas requieren revisión técnica."}    
    if cilindraje < 600:
        return {"disponible": True, "motivo": "Disponible para venta inmediata."}    
    return {"disponible": True, "motivo": "Disponible para venta inmediata (Alta gama)."}

print(filtrar_motos(800, False))
print(filtrar_motos(250, True)) 