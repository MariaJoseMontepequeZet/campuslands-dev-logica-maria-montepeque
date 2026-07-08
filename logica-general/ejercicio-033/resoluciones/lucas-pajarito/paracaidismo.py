saltos = [
    {
        "participante": "Carlos",
        "altura": 4000
    },
    {
        "participante": "Laura",
        "altura": 3200
    },
    {
        "participante": "Miguel",
        "altura": 2800
    },
    {
        "participante": "Sofía",
        "altura": 4500
    },
    {
        "participante": "Andrés",
        "altura": 3500
    }
]


def evaluar_saltos(saltos):

    print("=== EVALUACIÓN DE SALTOS ===")

    for salto in saltos:

        print(f'Participante: {salto["participante"]}')
        print(f'Altura del salto: {salto["altura"]} metros')

        if salto["altura"] >= 4000:
            print("Resultado: Salto de gran altitud.")

        elif salto["altura"] >= 3000:
            print("Resultado: Salto de altitud media.")

        else:
            print("Resultado: Salto de baja altitud.")

        print("------------------------------")


evaluar_saltos(saltos)