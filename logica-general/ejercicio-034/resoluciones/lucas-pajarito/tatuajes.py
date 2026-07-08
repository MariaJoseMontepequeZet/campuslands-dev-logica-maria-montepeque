tatuajes = [
    {
        "cliente": "Carlos",
        "estado": "Correcto"
    },
    {
        "cliente": "Laura",
        "estado": "Color incompleto"
    },
    {
        "cliente": "Miguel",
        "estado": "Líneas irregulares"
    },
    {
        "cliente": "Sofía",
        "estado": "Correcto"
    },
    {
        "cliente": "Andrés",
        "estado": "Exceso de tinta"
    }
]


def diagnosticar_tatuajes(tatuajes):

    print("=== DIAGNÓSTICO DE TATUAJES ===")

    for tatuaje in tatuajes:

        print(f'Cliente: {tatuaje["cliente"]}')
        print(f'Estado: {tatuaje["estado"]}')

        if tatuaje["estado"] == "Correcto":
            print("Diagnóstico: No presenta errores.")

        elif tatuaje["estado"] == "Color incompleto":
            print("Diagnóstico: Es necesario realizar un retoque de color.")

        elif tatuaje["estado"] == "Líneas irregulares":
            print("Diagnóstico: Se recomienda corregir las líneas del diseño.")

        else:
            print("Diagnóstico: Se debe retirar el exceso de tinta.")

        print("------------------------------")


diagnosticar_tatuajes(tatuajes)