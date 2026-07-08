def calcularDesviacionAterrizaje(coordenadaX, coordenadaY):
    sumaCuadrados = (coordenadaX ** 2) + (coordenadaY ** 2)
    distanciaObjetivo = sumaCuadrados ** 0.5
    
    return round(distanciaObjetivo, 2)

def ejecutarPruebasParacaidismo():
    resultadoNormal = calcularDesviacionAterrizaje(3.0, -4.0)
    assert resultadoNormal == 5.0

    resultadoBorde = calcularDesviacionAterrizaje(0.0, 0.0)
    assert resultadoBorde == 0.0

ejecutarPruebasParacaidismo()