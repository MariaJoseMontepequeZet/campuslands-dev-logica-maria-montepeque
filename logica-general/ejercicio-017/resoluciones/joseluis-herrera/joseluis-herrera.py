proyectos_arquitectura = [
    {"nombre": "Torre_Residencial", "equipo": "Estructuras", "puntos": 85},
    {"nombre": "Centro_Comercial", "equipo": "Instalaciones", "puntos": 40},
    {"nombre": "Parque_Urbano", "equipo": "Paisajismo", "puntos": 95},
    {"nombre": "Estación_Metro", "equipo": "Estructuras", "puntos": 60}
]

def evaluar_tabla_decision(lista):
    for proyecto in lista:
        nombre = proyecto["nombre"]
        equipo = proyecto["equipo"]
        complejidad = proyecto["puntos"]
        
        print(f"\nEvaluando Proyecto: {nombre}")
        
        # Fila 1: Alta Complejidad Estructural
        if equipo == "Estructuras" and complejidad >= 70:
            print(" -> [ACCIÓN]: Asignar a Ingeniero Senior + Requiere Revisión Sísmica.")
            
        # Fila 2: Complejidad Media/Baja Estructural
        elif equipo == "Estructuras" and complejidad < 70:
            print(" -> [ACCIÓN]: Asignar a Ingeniero Junior + Revisión Estándar.")
            
        # Fila 3: Alta Complejidad de Entorno
        elif equipo == "Paisajismo" and complejidad >= 50:
            print(" -> [ACCIÓN]: Coordinar con Departamento Ambiental + Renderizado 3D Completo.")
            
        # Fila 4: Caso por Defecto / Instalaciones generales
        else:
            print(" -> [ACCIÓN]: Planificación Estándar + Validar con Proveedores Locales.")

evaluar_tabla_decision(proyectos_arquitectura)