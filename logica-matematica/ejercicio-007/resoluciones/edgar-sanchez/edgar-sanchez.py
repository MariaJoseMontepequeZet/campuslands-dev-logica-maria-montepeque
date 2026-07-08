def analizarPlaylistMusical(listaCanciones):
    reportePlaylist = {
        "duracionTotalSegundos": 0,
        "secuenciaCorrecta": True
    }

    if not listaCanciones:
        reportePlaylist["secuenciaCorrecta"] = False
        return reportePlaylist

    reportePlaylist["duracionTotalSegundos"] = listaCanciones[0]["duracion"]
    pistaAnterior = listaCanciones[0]["pista"]

    for indice in range(1, len(listaCanciones)):
        cancionActual = listaCanciones[indice]
        reportePlaylist["duracionTotalSegundos"] += cancionActual["duracion"]

        if cancionActual["pista"] != pistaAnterior + 1:
            reportePlaylist["secuenciaCorrecta"] = False

        pistaAnterior = cancionActual["pista"]

    return reportePlaylist

def ejecutarPruebasPlaylist():
    datosNormales = [
        { "pista": 1, "duracion": 180 },
        { "pista": 2, "duracion": 210 },
        { "pista": 3, "duracion": 195 }
    ]
    resultadoNormal = analizarPlaylistMusical(datosNormales)
    assert resultadoNormal["duracionTotalSegundos"] == 585
    assert resultadoNormal["secuenciaCorrecta"] is True

    resultadoVacio = analizarPlaylistMusical([])
    assert resultadoVacio["duracionTotalSegundos"] == 0
    assert resultadoVacio["secuenciaCorrecta"] is False

ejecutarPruebasPlaylist()