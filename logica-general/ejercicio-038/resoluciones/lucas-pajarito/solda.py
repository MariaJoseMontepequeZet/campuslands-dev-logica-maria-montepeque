soldadores = [
    {
        "nombre": "Carlos",
        "turno": "Mañana"
    },
    {
        "nombre": "Laura",
        "turno": "Tarde"
    },
    {
        "nombre": "Miguel",
        "turno": "Noche"
    },
    {
        "nombre": "Sofía",
        "turno": "Mañana"
    },
    {
        "nombre": "Andrés",
        "turno": "Tarde"
    }
]


def mostrar_turnos(soldadores):

    print("=== SISTEMA DE TURNOS ===")

    for soldador in soldadores:

        print(f'Soldador: {soldador["nombre"]}')
        print(f'Turno asignado: {soldador["turno"]}')

        if soldador["turno"] == "Mañana":
            print("Horario: 6:00 a.m. - 2:00 p.m.")

        elif soldador["turno"] == "Tarde":
            print("Horario: 2:00 p.m. - 10:00 p.m.")

        else:
            print("Horario: 10:00 p.m. - 6:00 a.m.")

        print("---------------------------------")


mostrar_turnos(soldadores)