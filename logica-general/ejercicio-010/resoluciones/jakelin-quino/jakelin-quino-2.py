def validar_reserva(edad, es_internacional):
    if edad < 18 and es_internacional:
        return {"aprobado": False, "motivo": "Los menores requieren permiso especial para viajes internacionales."}    
    if not es_internacional:
        return {"aprobado": True, "motivo": "Viaje nacional autorizado."}    
    return {"aprobado": True, "motivo": "Reserva aprobada."}

print(validar_reserva(16, True))
print(validar_reserva(25, True))