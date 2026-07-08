def calcularCombinacionesCombates(competidoresGrupoA, competidoresGrupoB):
    if competidoresGrupoA <= 0 or competidoresGrupoB <= 0:
        return 0

    totalCombinacionesPosibles = competidoresGrupoA * competidoresGrupoB
    return totalCombinacionesPosibles

def ejecutarPruebasKickboxing():
    resultadoNormal = calcularCombinacionesCombates(4, 3)
    assert resultadoNormal == 12

    resultadoBorde = calcularCombinacionesCombates(5, 0)
    assert resultadoBorde == 0

ejecutarPruebasKickboxing()