def validarSubindiceQuimico(subindiceAtomo):
    # Regla: Debe ser un número entero
    if not isinstance(subindiceAtomo, int):
        return False
        
    # Reglas: Debe ser mayor a 0 y menor o igual al límite de estabilidad (50)
    if subindiceAtomo >= 1 and subindiceAtomo <= 50:
        return True
        
    return False

def ejecutarPruebasQuimica():
    # Caso normal (Válido)
    assert validarSubindiceQuimico(12) is True
    
    # Caso borde (Inválido por ser cero)
    assert validarSubindiceQuimico(0) is False
    
    # Caso excedente (Inválido por superar el umbral físico)
    assert validarSubindiceQuimico(55) is False
    
    # Caso tipo incorrecto (Inválido por flotante)
    assert validarSubindiceQuimico(2.5) is False

ejecutarPruebasQuimica()