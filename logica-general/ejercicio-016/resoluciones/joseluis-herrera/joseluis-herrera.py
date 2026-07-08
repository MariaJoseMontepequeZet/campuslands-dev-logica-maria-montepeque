fotogramas_animacion = [
    [
        {"nombre": "Personaje_Iddle", "equipo": "Modelado", "puntos": 24},
        {"nombre": "Camara_Principal", "equipo": "Cinemática", "puntos": 30}
    ],
    [
        {"nombre": "Efecto_Fuego", "equipo": "VFX", "puntos": 60},
        {"nombre": "Personaje_Caminar", "equipo": "Animación", "puntos": 24}
    ],
    [
        {"nombre": "Fondo_Montaña", "equipo": "Entornos", "puntos": 12},
        {"nombre": "Luz_Ambiental", "equipo": "Iluminación", "puntos": 30}
    ]
]

def procesar_matriz_animacion(matriz):
    for i in range(len(matriz)):
        print(f"\n--- PROCESANDO CAPA DE ANIMACIÓN {i + 1} ---")
        
        for j in range(len(matriz[i])):
            elemento = matriz[i][j]
            tasa_render = elemento["puntos"] * 2
            
            print(f"Elemento: {elemento['nombre']} | Área: {elemento['equipo']} | FPS Base: {elemento['puntos']} | Tiempo de Render: {tasa_render}ms")

procesar_matriz_animacion(fotogramas_animacion)