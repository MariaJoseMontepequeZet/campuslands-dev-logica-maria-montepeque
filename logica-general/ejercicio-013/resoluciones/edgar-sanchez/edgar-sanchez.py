def resolver_caso_paracaidismo(altura_pies, velocidad_viento_nudos, paracaidas_principal_ok):
    if velocidad_viento_nudos > 25:
        return {
            "accion_salto": "Abortar Salto",
            "riesgo": "Crítico",
            "motivo": f"Velocidad del viento excesiva ({velocidad_viento_nudos} nudos). Máximo permitido: 25 nudos."
        }
    if altura_pies < 3000:
        return {
            "accion_salto": "Desplegar Paracaídas de Emergencia (Reserva)",
            "riesgo": "Crítico",
            "motivo": f"Altura por debajo de la zona segura ({altura_pies} pies). Riesgo inminente de impacto."
        }
    if not paracaidas_principal_ok:
        return {
            "accion_salto": "Liberar Principal y Activar Reserva",
            "riesgo": "Moderado",
            "motivo": "Fallo en el paracaídas principal por encima del límite de altura segura. Activando protocolo de contingencia."
        }
    return {
        "accion_salto": "Apertura Normal y Descenso Controlado",
        "riesgo": "Bajo",
        "motivo": "Todas las variables operativas y climáticas se encuentran dentro de los rangos óptimos."
    }
print("--- Prueba 1 (Caso Normal: Operación Exitosa) ---")
res_1 = resolver_caso_paracaidismo(altura_pies=4500, velocidad_viento_nudos=12, paracaidas_principal_ok=True)
print(f"Acción: {res_1['accion_salto']} | Riesgo: {res_1['riesgo']}\nMotivo: {res_1['motivo']}\n")
print("--- Prueba 2 (Caso de Contingencia: Falla de Campana) ---")
res_2 = resolver_caso_paracaidismo(altura_pies=3800, velocidad_viento_nudos=15, paracaidas_principal_ok=False)
print(f"Acción: {res_2['accion_salto']} | Riesgo: {res_2['riesgo']}\nMotivo: {res_2['motivo']}\n")
print("--- Prueba 3 (Caso Borde: Clima Inseguro) ---")
res_3 = resolver_caso_paracaidismo(altura_pies=5000, velocidad_viento_nudos=28, paracaidas_principal_ok=True)
print(f"Acción: {res_3['accion_salto']} | Riesgo: {res_3['riesgo']}\nMotivo: {res_3['motivo']}\n")