def evaluar_clasificacion(victorias, es_eliminatoria):
    if es_eliminatoria:
        if victorias >= 1:
            return {"avanza": True, "motivo": "Victoria en eliminatoria confirmada."}
        else:
            return {"avanza": False, "motivo": "Eliminado por derrota en fase final."}
    else:
        if victorias >= 3:
            return {"avanza": True, "motivo": "Clasificado por puntos en fase de grupos."}
        else:
            return {"avanza": False, "motivo": "Victorias insuficientes para la fase de grupos."}

print(evaluar_clasificacion(2, False))
print(evaluar_clasificacion(1, True))