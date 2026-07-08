def analizarHorarioPelicula(duracionPeliculaMinutos, bloqueSalaMinutos):
    reporteHorario = {
        "bloquesCompletos": 0,
        "asignacionExacta": False
    }

    if bloqueSalaMinutos <= 0:
        return reporteHorario

    reporteHorario["bloquesCompletos"] = duracionPeliculaMinutos // bloqueSalaMinutos
    
    if duracionPeliculaMinutos % bloqueSalaMinutos == 0:
        reporteHorario["asignacionExacta"] = True

    return reporteHorario

def ejecutarPruebasMiedo():
    resultadoNormal = analizarHorarioPelicula(120, 30)
    assert resultadoNormal["bloquesCompletos"] == 4
    assert resultadoNormal["asignacionExacta"] is True

    resultadoResiduo = analizarHorarioPelicula(105, 30)
    assert resultadoResiduo["bloquesCompletos"] == 3
    assert resultadoResiduo["asignacionExacta"] is False

    resultadoBorde = analizarHorarioPelicula(105, 0)
    assert resultadoBorde["bloquesCompletos"] == 0
    assert resultadoBorde["asignacionExacta"] is False

ejecutarPruebasMiedo()