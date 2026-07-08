def procesar_instrucciones_viaje(codigo_itinerario, clima_destino):
    codigo = codigo_itinerario.strip().upper()
    clima = clima_destino.strip().lower()

    # Regla 1: Validar entradas vacías (Caso Borde)
    if not codigo or not clima:
        return {
            "itinerario_desglosado": "No se pueden interpretar instrucciones sin datos completos.",
            "estado_viaje": "Rechazado"
        }

    # Regla 2: Traducción e interpretación de la instrucción base
    if codigo == "ADV-01":
        itinerario = "Aventura Extrema: Senderismo por la montaña y rafting en el río."
        estado = "Confirmado"
    elif codigo == "REL-02":
        itinerario = "Relajación Total: Sesión de spa y cena buffet junto a la playa."
        estado = "Confirmado"
    else:
        return {
            "itinerario_desglosado": f"Código de instrucción '{codigo}' desconocido por la agencia.",
            "estado_viaje": "Cancelado"
        }

    # Regla 3: Modificación del flujo por condiciones externas (Clima)
    if codigo == "ADV-01" and clima == "lluvia":
        itinerario = "Aventura Modificada: Se cancela el rafting por seguridad. Se cambia por museo interactivo."
        estado = "Modificado"

    return {
        "itinerario_desglosado": itinerario,
        "estado_viaje": status
    }

# --- EJECUCIÓN DE PRUEBAS ---

# Prueba 1: Caso Normal (Lectura correcta de un itinerario de aventura con buen clima)
print("--- Prueba 1 (Caso Normal: Buen Clima) ---")
res_1 = procesar_instrucciones_viaje(codigo_itinerario="ADV-01", clima_destino="Soleado")
print(f"Estado: {res_1['estado_viaje']} | Plan: {res_1['itinerario_desglosado']}\n")

# Prueba 2: Caso de Negocio (Lectura con clima adverso que altera la instrucción)
print("--- Prueba 2 (Regla de Clima Adverso) ---")
res_2 = procesar_instrucciones_viaje(codigo_itinerario="adv-01", clima_destino="Lluvia")
print(f"Estado: {res_2['estado_viaje']} | Plan: {res_2['itinerario_desglosado']}\n")

# Prueba 3: Caso Borde (Código erróneo o inexistente)
print("--- Prueba 3 (Caso Borde: Código Inválido) ---")
res_3 = procesar_instrucciones_viaje(codigo_itinerario="XYZ-99", clima_destino="Despejado")
print(f"Estado: {res_3['estado_viaje']} | Plan: {res_3['itinerario_desglosado']}\n")