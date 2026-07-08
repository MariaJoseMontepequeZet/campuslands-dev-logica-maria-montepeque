# 1. IDENTIFICAR ENTRADAS (Inputs)

print(" === ASISTENTE DE CONFIGURACION: RENDERIZADO ARQUITECTURA 3D ===")

# Capturamos los datos tecnicos para contrastar con la tabla de decision 
nombre_proyecto = input("Nombre del proyecto arquitectonico: ").strip()
tipo_render = input("Tipo de renderizado (Interiores / Exteriores): ").strip().capitalize()
motor_grafico = input("motor de renderizado (Vray / Lumion): ").strip().capitalize()

# 2. PROCESAMIENTO (Evaluacion de tablas de decision)

# Implementamos la tabla de decision cruzando filas y columnas mediante condicionales 

if tipo_render == "Interiores" and motor_grafico == "Vray":
    configuracion_hardware = "PERFIL OPTIMO: Iluminacion global basadaen trazo de rayos (Raytracing alta precision)."
    tiempo_estimado_por_frame = "Alto (Uso intensivo de CPU Multi-core)"
    viabilidad = "Aprobado para entrega fotorrealista"

elif tipo_render == "Interiores" and motor_grafico == "Lumion":
    configuracion_hardware = "PERFIL CONFIGURADO: Renderizadol en tiempo real. Perdida potencial de rebotes de luz exactos."
    tiempo_estimado_por_frame = "Bajo (Uso optimizado de GPU)"
    viabilidad = "Aprobado con advertencia de calidad"

elif tipo_render == "Exteriores" and motor_grafico == "Lumion":
    configuracion_hardware = "PERFIL OPTIMO: Instaciacion masiva de vegetracion y renderizado ambiental acelerado."
    tiempo_estimado_por_frame = "Muy bajo (Renderizado port GPU en tiempo real)"
    viabilidad = "Aprobado para previsualizacion fluida y entornos masivos"

elif tipo_render == "Exteriores" and motor_grafico == "Vray":
    configuracion_hardware = "PERFIL CONFIGURADO: Alto detalle en texturas, pero tiempo de calculo de follaje muy elevados."
    tiempo_estimado_por_frame = "Muy Alto (Carga critica de RAM y CPU)"
    viabilidad = "Aprobado (Requiere optimizacion de geometria proxy)"

else:
    # Captura de parametros invalidos o fuera de la tabla de decision analizada 
    configuracion_hardware = "ERROR: Combinacion tecnica no indexada en la tabla de decision."
    tiempo_estimado_por_frame = "N/D"
    viabilidad = "Rechazado por inconsistencia de configuracion"

# 3. ENTRAGAR RESULTADO VERIFICABLE (Output)

print("\n-----------------------------------------")
print("=== ESPECIFICACIONES DE CONFIGURACIÓN 3D ===")
print(f"Proyecto Evaluado:   {nombre_proyecto}")
print(f"Viabilidad Técnica:  {viabilidad}")
print(f"Hardware Asignado:   {configuracion_hardware}")
print(f"Costo de Cómputo:    {tiempo_estimado_por_frame}")
print("-----------------------------------------")