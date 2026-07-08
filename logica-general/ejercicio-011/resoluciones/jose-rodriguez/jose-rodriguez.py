# ==========================================
# 1. IDENTIFICAR ENTRADAS (Inputs)
# ==========================================
print("=== SISTEMA DE CLASIFICACIÓN DE ATLETAS: KICKBOXING ===")

# Capturamos la información básica del peleador
nombre_atleta = input("Nombre del atleta: ").strip()
peso_kg = float(input("Peso del atleta en kilogramos (ej: 72.5): "))
combates_ganados = int(input("Cantidad de combates ganados: "))

# ==========================================
# 2. PROCESAMIENTO (Organización y Reglas Directas)
# ==========================================

# Paso A: Determinar la División de Peso mediante un embudo secuencial
if peso_kg <= 65.0:
    division = "Peso Pluma"
elif peso_kg <= 75.0:
    division = "Peso Welter"
else:
    division = "Peso Pesado"

# Paso B: Asignar el Rango de Competencia según los combates ganados
if combates_ganados < 5:
    rango = "Rookie"
elif combates_ganados <= 15:
    rango = "Contendiente"
else:
    rango = "Élite"

# ==========================================
# 3. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print("=== FICHA DE INSCRIPCIÓN DEL PELEADOR ===")
print(f"Atleta Evaluado:   {nombre_atleta}")
print(f"División de Peso:  {division} ({peso_kg} kg)")
print(f"Rango del Atleta:  {rango} ({combates_ganados} victorias)")
print("-----------------------------------------")