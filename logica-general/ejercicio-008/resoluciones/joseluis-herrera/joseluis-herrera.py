
peliculas_cienciaficcion = [
    {"titulo": "Interstellar", "director": "Christopher Nolan", "año": 2014},
    {"titulo": "Blade Runner", "director": "Ridley Scott", "año": 1982}
]

ejecutando_programa = True

while ejecutando_programa:
    print("\n=== MENÚ DE PELÍCULAS ===")
    print("1. Buscar película")
    print("2. Registrar película")
    print("3. Salir")
    
    opcion = int(input("Ingrese una de las siguientes opciones: "))

    match opcion:
        case 1:
            pelicula = input("Ingrese el título de la película que desea buscar: ").lower()

            encontrada = False
            
            for pelicula_buscada in peliculas_cienciaficcion:
                if pelicula_buscada["titulo"].lower() == pelicula:
                    print("\n Se encontró la película buscada")
                    print(f"Título: {pelicula_buscada['titulo']}")
                    print(f"Director: {pelicula_buscada['director']}")
                    print(f"Año: {pelicula_buscada['año']}\n")
                    encontrada = True
                    break 
            
            if not encontrada:
                print("\n No se encontró la película buscada.")
                respuesta = input("¿Desea registrar la película? (si/no): ").lower()
                
                if respuesta == "si":
                    
                    titulo = input("Ingrese el título de la película: ")
                    director = input("Ingrese el director de la película: ")
                    año = int(input("Ingrese el año de la película: "))
                    
                    nueva_pelicula = {
                        "titulo": titulo,
                        "director": director,
                        "año": año,
                    }
                    peliculas_cienciaficcion.append(nueva_pelicula)
                    print(f" '{titulo}' ha sido registrada con éxito")
                else:
                    print("Regresando al menú principal.")

        case 2:
            print("\n--- Formulario de Registro ---")
            titulo = input("Ingrese el título de la película: ")
            director = input("Ingrese el director de la película: ")
            año = int(input("Ingrese el año de la película: "))
            
            nueva_pelicula = {
                "titulo": titulo,
                "director": director,
                "año": año,
            }
            peliculas_cienciaficcion.append(nueva_pelicula)
            print(f" '{titulo}' ha sido registrada con éxito")
            
        case 3:
            print("Saliendo del programa. ¡Buen día!")
            ejecutando_programa = False 