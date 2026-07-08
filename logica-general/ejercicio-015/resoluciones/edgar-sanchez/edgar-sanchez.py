def validar_exportacion_dibujo(formato_archivo, resolucion_dpi, es_para_impresion):
    formato = formato_archivo.strip().upper()
    if resolucion_dpi < 72:
        return {
            "estado_exportacion": "Rechazado",
            "perfil_color": "Ninguno",
            "observacion": f"Resolución inválida ({resolucion_dpi} DPI). El mínimo aceptable para cualquier lienzo digital es 72 DPI."
        }
    if es_para_impresion:
        if resolucion_dpi < 300:
            return {
                "estado_exportacion": "Ajustado",
                "perfil_color": "CMYK",
                "observacion": f"DPI subido automáticamente a 300 (estaba en {resolucion_dpi}). Para impresión se exige alta densidad de píxeles."
            }
        
        if formato not in ["TIFF", "PDF"]:
            return {
                "estado_exportacion": "Rechazado",
                "perfil_color": "Ninguno",
                "observacion": f"Formato '{formato}' no admitido para imprenta. Se requiere TIFF o PDF para evitar compresión de color."
            }
            
        return {
            "estado_exportacion": "Aprobado",
            "perfil_color": "CMYK",
            "observacion": "Lienzo listo para prensa. Formato correcto y densidad de color óptima."
        }
    else:
        if formato not in ["PNG", "JPEG", "PSD"]:
            formato = "PNG"
         
        return {
            "estado_exportacion": "Aprobado",
            "perfil_color": "sRGB",
            "observacion": f"Exportación digital optimizada en formato {formato} a {resolucion_dpi} DPI para pantallas estándar."
        }
print("--- Prueba 1 (Caso Normal: Ajuste de Regla de Imprenta) ---")
res_1 = validar_exportacion_dibujo(formato_archivo="png", resolucion_dpi=150, es_para_impresion=True)
print(f"Estado: {res_1['estado_exportacion']} | Perfil: {res_1['perfil_color']}\nNota: {res_1['observacion']}\n")
print("--- Prueba 2 (Caso Normal: Exportación Web) ---")
res_2 = validar_exportacion_dibujo(formato_archivo="jpeg", resolucion_dpi=72, es_para_impresion=False)
print(f"Estado: {res_2['estado_exportacion']} | Perfil: {res_2['perfil_color']}\nNota: {res_2['observacion']}\n")
print("--- Prueba 3 (Caso Borde: Calidad Insuficiente) ---")
res_3 = validar_exportacion_dibujo(formato_archivo="tiff", resolucion_dpi=45, es_para_impresion=False)
print(f"Estado: {res_3['estado_exportacion']} | Perfil: {res_3['perfil_color']}\nNota: {res_3['observacion']}\n")