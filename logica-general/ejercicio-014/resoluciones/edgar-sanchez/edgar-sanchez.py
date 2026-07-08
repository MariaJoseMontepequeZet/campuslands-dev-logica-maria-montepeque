def diagnosticar_errores_tatuaje(edad_cliente, autorizacion_firmada, autoclave_esterilizado):
    if not autoclave_esterilizado:
        return {
            "estado_sesion": "Bloqueada",
            "codigo_error": "ERR-SANID",
            "diagnostico": "CRÍTICO: El autoclave no registra esterilización válida. No se puede iniciar el procedimiento por riesgo biológico."
        }
        
    if edad_cliente < 18 and not autorizacion_firmada:
        return {
            "estado_sesion": "Bloqueada",
            "codigo_error": "ERR-LEGAL",
            "diagnostico": "CRÍTICO: El cliente es menor de edad y no cuenta con el documento de autorización de los tutores firmado."
        }
        
    return {
        "estado_sesion": "Aprobada",
        "codigo_error": "NINGUNO",
        "diagnostico": "Sesión autorizada. Protocolos sanitarios y legales verificados con éxito."
    }
print("--- Prueba 1 (Caso Normal: Error de Consentimiento) ---")
res_1 = diagnosticar_errores_tatuaje(edad_cliente=16, autorizacion_firmada=False, autoclave_esterilizado=True)
print(f"Estado: {res_1['estado_sesion']} | Código: {res_1['codigo_error']}\nDiagnóstico: {res_1['diagnostico']}\n")
print("--- Prueba 2 (Caso de Negocio: Menor con Permiso) ---")
res_2 = diagnosticar_errores_tatuaje(edad_cliente=17, autorizacion_firmada=True, autoclave_esterilizado=True)
print(f"Estado: {res_2['estado_sesion']} | Código: {res_2['codigo_error']}\nDiagnóstico: {res_2['diagnostico']}\n")

print("--- Prueba 3 (Caso Borde: Riesgo Sanitario Prioritario) ---")
res_3 = diagnosticar_errores_tatuaje(edad_cliente=15, autorizacion_firmada=False, autoclave_esterilizado=False)
print(f"Estado: {res_3['estado_sesion']} | Código: {res_3['codigo_error']}\nDiagnóstico: {res_3['diagnostico']}\n")