dibujos = [
    {
        "autor": "Carlos",
        "capas": 8
    },
    {
        "autor": "Laura",
        "capas": 15
    },
    {
        "autor": "Miguel",
        "capas": 12
    },
    {
        "autor": "Sofía",
        "capas": 20
    },
    {
        "autor": "Andrés",
        "capas": 5
    }
]


def validar_dibujos(dibujos):

    print("=== VALIDACIÓN DE DIBUJOS DIGITALES ===")

    for dibujo in dibujos:

        print(f'Autor: {dibujo["autor"]}')
        print(f'Capas utilizadas: {dibujo["capas"]}')

        if dibujo["capas"] <= 10:
            print("Resultado: El dibujo cumple con las reglas del proyecto.")

        else:
            print("Resultado: El dibujo supera el límite permitido de capas.")

        print("--------------------------------------")


validar_dibujos(dibujos)