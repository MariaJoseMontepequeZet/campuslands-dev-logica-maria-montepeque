def analizarRendimientoEsports(bajasPorPartida):
    reporteEstadistico = {
        "promedioBajas": 0.0,
        "medianaBajas": 0.0
    }

    # Control de lista vacía
    if not bajasPorPartida:
        return reporteEstadistico

    # 1. Calcular el Promedio
    sumaBajas = sum(bajasPorPartida)
    totalPartidas = len(bajasPorPartida)
    reporteEstadistico["promedioBajas"] = round(sumaBajas / totalPartidas, 2)

    # 2. Calcular la Mediana (Requiere ordenar los datos primero)
    bajasOrdenadas = sorted(bajasPorPartida)
    mitad = totalPartidas // 2

    if totalPartidas % 2 != 0:
        # Longitud impar: se toma el elemento central
        mediana = bajasOrdenadas[mitad]
    else:
        # Longitud par: se promedian los dos del centro
        elementoCentro1 = bajasOrdenadas[mitad - 1]
        elementoCentro2 = bajasOrdenadas[mitad]
        mediana = (elementoCentro1 + elementoCentro2) / 2.0

    reporteEstadistico["medianaBajas"] = round(mediana, 2)

    return reporteEstadistico

def ejecutarPruebasEsports():
    # Caso 1: Impar partidas
    resultadoImpar = analizarRendimientoEsports([4, 12, 7, 5, 9])
    assert resultadoImpar["promedioBajas"] == 7.4
    assert resultadoImpar["medianaBajas"] == 7.0

    # Caso 2: Par partidas
    resultadoPar = analizarRendimientoEsports([3, 8, 5, 10])
    assert resultadoPar["promedioBajas"] == 6.5
    assert resultadoPar["medianaBajas"] == 6.5

    # Caso 3: Borde vacío
    resultadoVacio = analizarRendimientoEsports([])
    assert resultadoVacio["promedioBajas"] == 0.0
    assert resultadoVacio["medianaBajas"] == 0.0

ejecutarPruebasEsports()