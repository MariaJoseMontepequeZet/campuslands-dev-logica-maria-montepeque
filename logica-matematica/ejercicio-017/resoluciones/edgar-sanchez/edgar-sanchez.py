def evaluarRankingArquitectura(puntuacionesDisenos, puntajeCorte):
    reporteRanking = {
        "promedioGeneral": 0.0,
        "disenosClasificados": 0
    }

    if not puntuacionesDisenos:
        return reporteRanking

    sumaTotal = 0
    conteoClasificados = 0

    for puntuacion in puntuacionesDisenos:
        sumaTotal += puntuacion
        if puntuacion >= puntajeCorte:
            conteoClasificados += 1

    reporteRanking["promedioGeneral"] = round(sumaTotal / len(puntuacionesDisenos), 2)
    reporteRanking["disenosClasificados"] = conteoClasificados

    return reporteRanking

def ejecutarPruebasArquitectura():
    disenosDatos = [8.5, 9.2, 6.8, 7.5, 9.0]
    
    resultadoNormal = evaluarRankingArquitectura(disenosDatos, 8.0)
    assert resultadoNormal["promedioGeneral"] == 8.2
    assert resultadoNormal["disenosClasificados"] == 3

    resultadoVacio = evaluarRankingArquitectura([], 8.0)
    assert resultadoVacio["promedioGeneral"] == 0.0
    assert resultadoVacio["disenosClasificados"] == 0

ejecutarPruebasArquitectura()