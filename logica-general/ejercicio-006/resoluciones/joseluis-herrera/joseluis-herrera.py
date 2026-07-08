autos_hiperdeportivos = [
    {
        "marca": "Ferrari",
        "modelo": "F8 Tributo",
        "año": 2020,
        "potencia": 710,
        "precio": 276000
    },
    {
        "marca": "Lamborghini",
        "modelo": "Huracán EVO",
        "año": 2021,
        "potencia": 640,
        "precio": 261274
    },
    {
        "marca": "Porsche",
        "modelo": "911 Turbo S",
        "año": 2020,
        "potencia": 640,
        "precio": 203500
    },
    {
        "marca": "McLaren",
        "modelo": "720S",
        "año": 2021,
        "potencia": 710,
        "precio": 299000
    },
    {
        "marca": "Aston Martin",
        "modelo": "DB11",
        "año": 2020,
        "potencia": 630,
        "precio": 205600
    }
]

continuar = "si"

while continuar == "si": 

    modelo_buscar = input("Ingrese el modelo del auto que desea buscar: ").lower()

    encontrado = False 


    for vehiculo in autos_hiperdeportivos: 
        if vehiculo["marca"].lower() == modelo_buscar:
            if not encontrado:
                print("Los autos de la marca ingresada son:")
                print(f"Marca: {vehiculo['marca']}")
                print(f"Modelo: {vehiculo['modelo']}")
                print(f"Año: {vehiculo['año']}")
                print(f"Caballos de fuerza: {vehiculo['potencia']}")
                print(f"Precio: {vehiculo['precio']}")
            encontrado = True

    if encontrado == False: 
        print("No se encontraro autos de  la marca ingresada. ")

    continuar = input("¿Desea buscar otro auto? (si/no):").lower()

print("Gracias por preferirnos. Bye")