# 1. IDENTIFICAR ENTRADAS (INPUTS)

print(" === SISTEMA DE CONFIGURACION Y SEGURIDAD: PARACAIDISMO ===")

# Capturamos los datos dinamicos para evaluar el caso del salto
nombre_paracaidista = input("Nombre del paracaidista: ").strip()
altitud_apertura_pies = int(input("Altitud planeada para apertura de campana (en pies): "))
velocidad_viento_nudos = float(input("Velocidad actual del viento en la zona (en nudos): "))

# 2. PROCESAMIENTO (Resolucion de casos mediante reglas directas)

# Definimos los umbrales operativos usando variables boooleanas para maxima legibilidad 
es_altitud_segura = (altitud_apertura_pies >= 3000)
es_viento_permitido = (velocidad_viento_nudos <= 20.0)

# Motor condicional jerarquico para resolver el caso del salto
if es_altitud_segura and es_viento_permitido:
    estado_salto = "SALTO AUTORIZADO: CONDICIONES OPTIMAS"
    instrucciones_vuelo = f"El salto para '{nombre_paracaidista}' es viable. Proceder con el plan de vuelo estandar y apertura a los '{altitud_apertura_pies}'  pies." 
elif not es_altitud_segura and es_viento_permitido:
    estado_salto = "CASO CRITICO: RECHAZADO POR RIESGO DE ALTITUD"
    instrucciones_vuelo = "Cancelacion inmediata. La altitud de apertura planificada es inferior a 3000 pies, comprometiendo el tiempo de despoliegue de la campana."

else:
    # Captura si el viento excede los limites (independientement de la altitud) 
    estado_salto = "SALTO RECHAZADO: CLIMA ADVERSO (VIENTO EXCESIVO)"
    instrucciones_vuelo = f"Condiciones climatologicas inseguras. Los '{velocidad_viento_nudos}' nudos registrados superan el limite de tolerancia de la escuela de salto."

# 3. ENTREGA RESULTADO VERIFICABLE (Output)

print("\n-----------------------------------------")
print("=== DICTAMEN DE LA TORRE DE CONTROL ===")
print(f"Paracaidista:        {nombre_paracaidista}")
print(f"Estado del Salto:    {estado_salto}")
print(f"Directiva Operativa: {instrucciones_vuelo}")
print("-----------------------------------------")