def actualizar_estado(estado_actual, presencia_fantasma, tiene_arma):
    if presencia_fantasma and not tiene_arma:
        return "Pánico"    
    if presencia_fantasma and tiene_arma:
        return "Alerta"    
    return "Calma"

print(actualizar_estado("Calma", True, False))
print(actualizar_estado("Pánico", False, True))