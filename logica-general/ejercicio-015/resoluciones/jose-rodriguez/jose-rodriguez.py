# 1. IDENTIFICAR ENTRADA (Inputs)

print("=== SISTEMA DE AUDITORIA DE LIENZOS: DIBUJO DIGITAL ===")

# Capturamos los datos tecnicos del lienzo para evaluar las reglas de negocio 
nombre_proyecto = input("Nombre del proyecto/ilustracion: ").strip()
resolucion_ancho = int(input("Ancho del lienzo (en pixeles, ej: 3840): "))
cantidad_capas = int(input("Cantidad de capas activas en el archivo: "))

# 2. PROCESAMIEMNTO (Evaluacion de reglas de negocio)

# Definimos los umbrales operativos mediante variables booleanas (Banderas)
es_alta_resolucion = (resolucion_ancho >= 3000)
es_archivo_pesado = (cantidad_capas > 50)

# Motor de asignacion y diagnostico segun las reglas de negocio estipuladas
if es_alta_resolucion and es_archivo_pesado:
    estado_lienzo = "ESTADO: DESBORDAMIENTO CRITICO DE MEMORIA"
    accion_software = "Congelar previsualizacion de pinceles y sugerir acoplar capas de inmediato."
    dictamen_tecnico = f"El lienzo '{nombre_proyecto}' combina utra-resolucion para las capas en segundo plano."
    dictamen_tecnico = f"El lienzo '{nombre_proyecto}' combina utra-resolucion con exceso de capas, superando el limite de la RAM."

elif es_alta_resolucion or es_archivo_pesado:
    estado_lienzo = "ESTADO: OPTIMIZACION RECOMENDADA"
    accion_software = "Activar el modo de renderizado en baja resolucion para las capas en segundo plano."
    dictamen_tecnico = "El archivo es viable para edicion, pero se detecta un consumo elevado de recursos en un atributo."

else:
    estado_lienzo = "ESTADO: RENDIMIENTO OPTIMO (FLUIDO)"
    accion_software = "Habilitar todas las funciones del motor grafico y aceleracion por hardware."
    dictamen_tecnico = "Las dimensiones y el volumen de capas estan perfectamente balanceados para el flujo de trabajo."

# 3. ENTREGAR RESULTADO VERIFICABLE (Output)

print("\n-----------------------------------------")
print("=== REPORTE TÉCNICO DEL MOTOR GRÁFICO ===")
print(f"Proyecto Evaluado:   {nombre_proyecto}")
# Modificamos la salida para que sea completamente limpia y legible en la consola de la Mac
print(f"Estado del Archivo:  {estado_lienzo}")
print(f"Acción del Software: {accion_software}")
print(f"Dictamen de Carga:   {dictamen_tecnico}")
print("-----------------------------------------")