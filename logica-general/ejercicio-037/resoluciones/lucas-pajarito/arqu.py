proyectos = [
    {
        "nombre": "Casa Familiar",
        "presupuesto": True,
        "terreno": True
    },
    {
        "nombre": "Edificio Comercial",
        "presupuesto": True,
        "terreno": False
    },
    {
        "nombre": "Centro Deportivo",
        "presupuesto": False,
        "terreno": True
    },
    {
        "nombre": "Hotel",
        "presupuesto": False,
        "terreno": False
    },
    {
        "nombre": "Biblioteca",
        "presupuesto": True,
        "terreno": True
    }
]


def evaluar_proyectos(proyectos):

    print("=== TABLA DE DECISIÓN ===")

    for proyecto in proyectos:

        print(f'Proyecto: {proyecto["nombre"]}')

        if proyecto["presupuesto"] and proyecto["terreno"]:
            print("Resultado: El proyecto puede iniciar.")

        elif proyecto["presupuesto"] and not proyecto["terreno"]:
            print("Resultado: Falta adquirir el terreno.")

        elif not proyecto["presupuesto"] and proyecto["terreno"]:
            print("Resultado: Falta aprobar el presupuesto.")

        else:
            print("Resultado: El proyecto no puede iniciar.")

        print("---------------------------------")


evaluar_proyectos(proyectos)