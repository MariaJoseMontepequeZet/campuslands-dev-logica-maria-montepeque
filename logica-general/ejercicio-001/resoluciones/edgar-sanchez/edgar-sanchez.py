def clasificar_jugador(puntos, reportes):
    # Regla 1: Validar datos incorrectos o vacíos (Caso Borde)
    if puntos < 0 or reportes < 0:
        return {
            "estado": "Invalido",
            "motivo": "Los puntos o reportes no pueden ser negativos."
        }
    
    # Regla 2: Priorizar comportamiento (Toxicidad)
    if reportes > 5:
        return {
            "estado": "Bloqueado",
            "motivo": "El jugador excede el límite de reportes permitidos por conducta."
        }
    
    # Regla 3: Clasificación por rendimiento deportivo
    if puntos >= 2000:
        return {
            "estado": "Rango Alto (Inmortal)",
            "motivo": "Puntuación excelente en el entorno competitivo."
        }
    elif puntos >= 1000:
        return {
            "estado": "Rango Medio (Oro)",
            "motivo": "Puntuación estándar de nivel intermedio."
        }
    else:
        return {
            "estado": "Rango Bajo (Bronce)",
            "motivo": "Puntuación inicial o requiere mejorar el rendimiento."
        }

# --- PRUEBA 1: Caso Normal (Jugador Oro) ---
print("--- Prueba 1 ---")
resultado_1 = clasificar_jugador(puntos=1500, reportes=2)
print(f"Accion: {resultado_1['estado']}")
print(f"Motivo: {resultado_1['motivo']}\n")

# --- PRUEBA 2: Caso Normal (Prioridad de Bloqueo por reportes) ---
print("--- Prueba 2 ---")
resultado_2 = clasificar_jugador(puntos=2500, reportes=8)
print(f"Accion: {resultado_2['estado']}")
print(f"Motivo: {resultado_2['motivo']}\n")

# --- PRUEBA 3: Caso Borde (Datos inválidos en el sistema) ---
print("--- Prueba 3 (Caso Borde) ---")
resultado_3 = clasificar_jugador(puntos=-50, reportes=0)
print(f"Accion: {resultado_3['estado']}")
print(f"Motivo: {resultado_3['motivo']}\n")