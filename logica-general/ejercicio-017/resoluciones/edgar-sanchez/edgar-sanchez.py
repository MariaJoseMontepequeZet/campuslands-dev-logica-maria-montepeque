def asignar_material_arquitectura(tipo_estructura, es_exterior, presupuesto_premium):
    estructura = tipo_estructura.strip().capitalize()
    
    if not estructura:
        return {
            "material_asignado": "Ninguno",
            "motor_render": "Error",
            "motivo": "El tipo de estructura no puede estar vacío."
        }

    motor = "PBR_Alta" if presupuesto_premium else "PBR_Estandar"
    if estructura == "Cimiento":
        return {
            "material_asignado": "Concreto Armado",
            "motor_render": motor,
            "motivo": "Los cimientos requieren resistencia estructural uniforme independientemente de los acabados."
        }
        
    elif estructura == "Muro":
        if es_exterior:
            if presupuesto_premium:
                return {
                    "material_asignado": "Piedra Natural con Aislamiento",
                    "motor_render": motor,
                    "motivo": "Muro exterior premium: Máxima durabilidad climática y acabado estético."
                }
            else:
                return {
                    "material_asignado": "Ladrillo Visto Tratado",
                    "motor_render": motor,
                    "motivo": "Muro exterior estándar: Resistencia climática balanceada y bajo costo."
                }
        else: # Interior
            if presupuesto_premium:
                return {
                    "material_asignado": "Paneles de Madera Noble",
                    "motor_render": motor,
                    "motivo": "Muro interior premium: Alta calidad visual y confort acústico."
                }
            else:
                return {
                    "material_asignado": "Placa de Yeso con Pintura",
                    "motor_render": motor,
                    "motivo": "Muro interior estándar: Acabado liso, funcional y económico."
                }
    return {
        "material_asignado": "Por defecto (Gris)",
        "motor_render": "Estandar_Baja",
        "motivo": f"Estructura '{estructura}' no indexada. Se asigna material base de construcción."
    }
print("--- Prueba 1 (Caso Normal: Fachada de Lujo) ---")
res_1 = asignar_material_arquitectura(tipo_estructura="Muro", es_exterior=True, presupuesto_premium=True)
print(f"Material: {res_1['material_asignado']} | Motor: {res_1['motor_render']}\nMotivo: {res_1['motivo']}\n")
print("--- Prueba 2 (Caso Normal: Interiores Económicos) ---")
res_2 = asignar_material_arquitectura(tipo_estructura="muro", es_exterior=False, presupuesto_premium=False)
print(f"Material: {res_2['material_asignado']} | Motor: {res_2['motor_render']}\nMotivo: {res_2['motivo']}\n")
print("--- Prueba 3 (Caso Borde: Elemento No Indexado) ---")
res_3 = asignar_material_arquitectura(tipo_estructura="Techo_Curvo", es_exterior=True, presupuesto_premium=False)
print(f"Material: {res_3['material_asignado']} | Motor: {res_3['motor_render']}\nMotivo: {res_3['motivo']}\n")