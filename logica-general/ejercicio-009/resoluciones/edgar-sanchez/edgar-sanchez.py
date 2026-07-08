def simular_estado_terror(estado_inicial, evento):
    estado = estado_inicial.strip().capitalize()
    evento_limpio = evento.strip().lower()
    if estado == "Tranquilo":
        if evento_limpio == "susto":
            return {"nuevo_estado": "Asustado", "accion": "Dar un pequeño brinco en el asiento."}
        elif evento_limpio == "calma":
            return {"nuevo_estado": "Tranquilo", "accion": "Sigue comiendo palomitas en paz."}

    elif estado == "Asustado":
        if evento_limpio == "susto":
            return {"nuevo_estado": "Aterrorizado", "accion": "Gritar y taparse los ojos con una manta."}
        elif evento_limpio == "calma":
            return {"nuevo_estado": "Tranquilo", "accion": "Soltar un suspiro de alivio y relajarse."}

    elif estado == "Aterrorizado":
        if evento_limpio == "susto":
            return {"nuevo_estado": "Aterrorizado", "accion": "Incapaz de moverse, parálisis por miedo extremo."}
        elif evento_limpio == "calma":
            return {"nuevo_estado": "Asustado", "accion": "Bajar la guardia un poco, pero seguir en alerta."}
    if evento_limpio == "fin":
        return {"nuevo_estado": "Tranquilo", "accion": "Encender las luces de la sala y salir del cine."}
    return {
        "nuevo_estado": estado,
        "accion": "Ninguna. Combinación de estado o evento no válida en la simulación."
    }
print("--- Prueba 1 (Caso Normal: Progresión de Susto) ---")
res_1 = simular_estado_terror(estado_inicial="Asustado", evento="susto")
print(f"Estado Resultante: {res_1['nuevo_estado']} | Acción: {res_1['accion']}\n")
print("--- Prueba 2 (Caso Normal: Desescalada de Terror) ---")
res_2 = simular_estado_terror(estado_inicial="Aterrorizado", evento="calma")
print(f"Estado Resultante: {res_2['nuevo_estado']} | Acción: {res_2['accion']}\n")
print("--- Prueba 3 (Caso Borde: Evento Desconocido) ---")
res_3 = simular_estado_terror(estado_inicial="Tranquilo", evento="un_fantasma_aparece")
print(f"Estado Resultante: {res_3['nuevo_estado']} | Acción: {res_3['accion']}\n")