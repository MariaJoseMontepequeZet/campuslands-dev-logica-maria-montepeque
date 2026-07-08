# 1. IDENTIFICAR ENTRADAS (Inputs)

print("=== MOTOR DE RENDERIZADO SIMPLIFICADO: ANIMACION 3D ===")

# Capturamos los datos tecnicos del fotograma clave y el viewport
nombre_escena = input("Nombre de la escena de animacion: ").strip()
tipo_keyframe = input("Tipo de interpolacion (Lineal / Bezier / Spline): ").strip().capitalize()
fila_objeto = int(input("Posición de la coordenada en Fila (0, 1 o 2): "))
columna_objeto = int(input("Posicion de la coordenada en Columna (0, 1 o 2): "))

# 2. PROCESAMIENTO (Caso de Matrices Simples y reglas de negocio)

# Inicializamos el Viewport como una matriz vacia de 3x3 (pixeles apagados en 0)
viewport_matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

# Validamos limites de la matriz simetrica para evitar desbordamiento de indice (indexError)
if 0 <= fila_objeto <= 2 and 0 <= columna_objeto <= 2:
    # Registramos el objeto animado asignanddole el valor logico '1' (pixel activo)
    viewport_matriz[fila_objeto][columna_objeto] = 1
    estado_coordenada = "Coordenada proyectada correctamente en el viewport."
else:
    estado_coordenada = "Error: Coordenadas fuera del Viewport 3x3. Objeto invisible fuera de camara."

# Asignacion de carga de calculo computacional segun las reglas de interpolacion de curvas
if tipo_keyframe == "Lineal1":
    carga_ram = "Baja (Calculo vectorial simple paso a paso)"
    tiempo_render_segundos = 2
elif tipo_keyframe == "Bezier":
    carga_ram = "Media (Calculo de curvas polinominales por tangentes)"
    tiempo_render_segundos = 5
elif tipo_keyframe == "Spline":
    carga_ram = "Alta (Interpolacion matematica suave de multiples nodos)"
    tiempo_render_segundos = 9
else:
    carga_ram = "Desconocida / Error de asignacion"
    tiempo_render_segundos = 0

# 3. ENTREGAR RESULTADO VERIFICABLE (output)

print("\n-----------------------------------------")
print("=== VISTA PREVIA DEL BUFFER DE VIDEO (MATRIZ) ===")
for fila in viewport_matriz:
    print(f"  [ {fila[0]} ] [ {fila[1]} ] [ {fila[2]} ]")
print("-----------------------------------------")
print("=== REPORTE TÉCNICO DE ANIMACIÓN ===")
print(f"Escena Activa:      {nombre_escena}")
print(f"Estatus Espacial:   {estado_coordenada}")
print(f"Consumo de RAM:     {carga_ram}")
print(f"Tiempo Estimado:    {tiempo_render_segundos} segundos por frame")
print("-----------------------------------------")