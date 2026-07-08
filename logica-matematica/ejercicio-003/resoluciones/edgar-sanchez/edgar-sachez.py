def calcularMedianaPuntuaciones(puntuacionesRondas):
    if not puntuacionesRondas:
        return 0.0

    puntuacionesOrdenadas = sorted(puntuacionesRondas)
    totalRondas = len(puntuacionesOrdenadas)
    indiceCentral = totalRondas // 2

    if totalRondas % 2 != 0:
        return float(puntuacionesOrdenadas[indiceCentral])

    sumaCentrales = puntuacionesOrdenadas[indiceCentral - 1] + puntuacionesOrdenadas[indiceCentral]
    return round(sumaCentrales / 2, 2)

def ejecutarPruebasTorneo():
    assert calcularMedianaPuntuaciones([2400, 1800, 3500, 2900, 2100]) == 2400.0
    assert calcularMedianaPuntuaciones([1500, 2000, 1800, 2200]) == 1900.0
    assert calcularMedianaPuntuaciones([]) == 0.0

ejecutarPruebasTorneo()