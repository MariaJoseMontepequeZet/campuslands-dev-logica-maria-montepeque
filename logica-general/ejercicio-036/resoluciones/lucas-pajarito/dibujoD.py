escenario = [
    ["Cámara", "Luz", "Personaje"],
    ["Árbol", "Casa", "Montaña"],
    ["Auto", "Puente", "Río"]
]


def mostrar_escenario(escenario):

    print("=== MATRIZ DEL ESCENARIO 3D ===")

    for fila in escenario:

        for elemento in fila:
            print(elemento, end=" | ")

        print()


mostrar_escenario(escenario)