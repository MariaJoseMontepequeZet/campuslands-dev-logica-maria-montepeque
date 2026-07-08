# 1. IDENTIFICAR ENTRADAS (Inputs)

print("=== ASISTENE DE SELECCION Y CONFIGURACION DE PING-PONG ===")

# Capturamos la informacion basica del jugador y sus preferencias
nombre_jugador = input("Nombre del jugador: ").strip()
estilo_juego = input("Estilo de juego preferido (Ataque / Control): ").strip().capitalize()
presupuesto = float(input("Presupuesto para equipamiento en dolares (USD): "))
puntos_habilidad = int(input("Puntaje de habilidad actual (puntos ranking): "))

# 2. PROCESAMIENTO ( Comparacion de Opciones y Reglas)

# Paso A: Comparacion de opciones para la sugerencia del equipamiento (Paleta)
if estilo_juego == "Ataque" and presupuesto >= 80.0:
    paleta_sugerida = "Paleta Pro-Offensive (Gooma de alta velocidad y fibra de carbono)"
elif estilo_juego == "Control" and presupuesto >= 50.0:
    paleta_sugerida = "Paleta Classic-Control (Goma de alta adherencia y madera blanda)"
else:
    paleta_sugerida = "Paleta Estandar de Iniciacion (Balanceada para todo tipo de juego)"

# Paso B: Evaluacion de viablidad de inscripcion al torneo oficial
es_elegible_torneo = (puntos_habilidad >= 1200)

if es_elegible_torneo:
    estado_inscripcion = "INSCRIPCION APROBADA: Categoria Competitiva Oficial"
    detalles_estado = f"El jugador '{nombre_jugador}' cumple con el humbral tecnico. Casificado en el cuadro principal."
else:
    estado_inscripcion = "INSCRIPCION DENEGADA: Torneo de Desarrollo"
    detalles_estado = "Puntaje de ranking insuficiente. Se sugiere participar en las llaves de entrenamiento."

# 3. ENTREGAR RESULTADO VERIFICABLE (Output)

print("\n-----------------------------------------")
print("=== REPORTE DE EVALUACIÓN TÉCNICA ===")
print(f"Jugador Analizado:  {nombre_jugador}")
print(f"Sugerencia de Goma: {paleta_sugerida}")
print(f"Estado del Registro: {estado_inscripcion}")
print(f"Detalles Técnicos:  {detalles_estado}")
print("-----------------------------------------")