def calcularDistanciaTrazo(velocidadPixelesMilisegundo, tiempoMilisegundos):
    if velocidadPixelesMilisegundo <= 0 or tiempoMilisegundos <= 0:
        return 0.0

    distanciaPixelesCalculada = velocidadPixelesMilisegundo * tiempoMilisegundos
    return round(distanciaPixelesCalculada, 2)

def ejecutarPruebasDibujo():
    resultadoNormal = calcularDistanciaTrazo(4.25, 200)
    assert resultadoNormal == 850.0

    resultadoBorde = calcularDistanciaTrazo(6.50, 0)
    assert resultadoBorde == 0.0

ejecutarPruebasDibujo()