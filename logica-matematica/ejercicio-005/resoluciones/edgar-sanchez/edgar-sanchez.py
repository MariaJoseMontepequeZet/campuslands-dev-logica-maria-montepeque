def analizarInventarioTaller(refaccionesTaller):
    reporteAlertas = {
        "repuestosParaPedido": [],
        "articuloMasCritico": ""
    }
    
    if not refaccionesTaller:
        return reporteAlertas
        
    existenciaMinimaAbsoluta = float('inf')
    
    for refaccion in refaccionesTaller:
        nombreComponente = refaccion["repuesto"]
        cantidadActual = refaccion["cantidad"]
        limiteSeguridad = refaccion["limiteMinimo"]
        
        if cantidadActual < limiteSeguridad:
            reporteAlertas["repuestosParaPedido"].append(nombreComponente)
            
        if cantidadActual < existenciaMinimaAbsoluta:
            existenciaMinimaAbsoluta = cantidadActual
            reporteAlertas["articuloMasCritico"] = nombreComponente
            
    return reporteAlertas

def ejecutarPruebasTaller():
    inventarioDatos = [
        { "repuesto": "Pastillas de freno", "cantidad": 3, "limiteMinimo": 5 },
        { "repuesto": "Filtro de aceite", "cantidad": 12, "limiteMinimo": 10 },
        { "repuesto": "Bujias", "cantidad": 1, "limiteMinimo": 8 }
    ]
    
    resultadoNormal = analizarInventarioTaller(inventarioDatos)
    assert resultadoNormal["repuestosParaPedido"] == ["Pastillas de freno", "Bujias"]
    assert resultadoNormal["articuloMasCritico"] == "Bujias"
    
    resultadoVacio = analizarInventarioTaller([])
    assert resultadoVacio["repuestosParaPedido"] == []
    assert resultadoVacio["articuloMasCritico"] == ""

ejecutarPruebasTaller()