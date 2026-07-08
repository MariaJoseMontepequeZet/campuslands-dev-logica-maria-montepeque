def decidir_inscripcion_esports(edad_jugador, tiene_autorizacion, ping_ms):
    if edad_jugador < 13:
        return {
            "decision": "Rechazado",
            "servidor": "Ninguno",
            "motivo": "El jugador no cumple con la edad mínima legal de 13 años."
        }
    if 13 <= edad_jugador <= 17 and not tiene_autorizacion:
        return {
            "decision": "Pendiente",
            "servidor": "Ninguno",
            "motivo": "Jugador menor de edad requiere adjuntar autorización firmada de tutores."
        }
    if ping_ms > 150:
        return {
            "decision": "Rechazado",
            "servidor": "Ninguno",
            "motivo": f"Conexión inestable ({ping_ms}ms). Excede el límite máximo de 150ms permitido."
        }
    servidor_asignado = "LATAM" if ping_ms <= 60 else "Internacional"
    
    return {
        "decision": "Aprobado",
        "servidor": servidor_asignado,
        "motivo": f"Inscripción exitosa. Asignado a servidor {servidor_asignado} por óptimo rendimiento técnico."
    }
print("--- Prueba 1 (Caso Normal) ---")
res_1 = decidir_inscripcion_esports(edad_jugador=19, tiene_autorizacion=False, ping_ms=45)
print(f"Decisión: {res_1['decision']} | Servidor: {res_1['servidor']}\nMotivo: {res_1['motivo']}\n")

print("--- Prueba 2 (Regla de Permisos) ---")
res_2 = decidir_inscripcion_esports(edad_jugador=15, tiene_autorizacion=False, ping_ms=30)
print(f"Decisión: {res_2['decision']} | Servidor: {res_2['servidor']}\nMotivo: {res_2['motivo']}\n")

print("--- Prueba 3 (Caso Borde Técnico) ---")
res_3 = decidir_inscripcion_esports(edad_jugador=13, tiene_autorizacion=True, ping_ms=180)
print(f"Decisión: {res_3['decision']} | Servidor: {res_3['servidor']}\nMotivo: {res_3['motivo']}\n")