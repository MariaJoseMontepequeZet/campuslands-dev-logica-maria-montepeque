def transformar_matriz_3d(matriz_vertices, factor_escala, eje_espejo):
    eje = eje_espejo.strip().upper()
    if not matriz_vertices or len(matriz_vertices) == 0:
        return {
            "matriz_transformada": [],
            "estado_render": "Error: Matriz de vértices vacía."
        }
    matriz_transformada = []
    eje_indice = {"X": 0, "Y": 1, "Z": 2}
    if eje not in eje_indice:
        return {
            "matriz_transformada": [],
            "estado_render": f"Error: Eje de espejo '{eje}' no válido."
        }       
    indice_espejo = eje_indice[eje]
    for vertice in matriz_vertices:
        if len(vertice) != 3:
            return {
                "matriz_transformada": [],
                "estado_render": "Error: Estructura de vértice 3D inválida."
            }
        nuevo_x = vertice[0] * factor_escala
        nuevo_y = vertice[1] * factor_escala
        nuevo_z = vertice[2] * factor_escala
        nuevas_coordenadas = [nuevo_x, nuevo_y, nuevo_z]
        nuevas_coordenadas[indice_espejo] = nuevas_coordenadas[indice_espejo] * -1
        matriz_transformada.append(nuevas_coordenadas)
    return {
        "matriz_transformada": matriz_transformada,
        "estado_render": "Éxito: Matriz transformada correctamente para el motor 3D."
    }
malla_objeto = [
    [1.0, 2.0, 3.0],   # Vértice 1
    [4.0, 0.0, -1.0],  # Vértice 2
    [2.0, -3.0, 5.0]   # Vértice 3
]
print("--- Prueba 1 (Caso Normal: Escala + Simetría X) ---")
res_1 = transformar_matriz_3d(malla_objeto, factor_escala=2.0, eje_espejo="X")
print(f"Estado: {res_1['estado_render']}")
print("Matriz Resultante:")
for fila in res_1["matriz_transformada"]:
    print(f"  {fila}")
print()
print("--- Prueba 2 (Caso Borde: Eje Inválido) ---")
res_2 = transformar_matriz_3d(malla_objeto, factor_escala=1.0, eje_espejo="W")
print(f"Estado: {res_2['estado_render']}")
print(f"Matriz Resultante: {res_2['matriz_transformada']}\n")