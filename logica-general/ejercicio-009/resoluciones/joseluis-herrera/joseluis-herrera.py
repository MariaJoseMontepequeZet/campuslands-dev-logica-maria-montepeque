estado_espectador = "Tranquilo"
palomitas = True

while estado_espectador != "Fuera de la Sala":
    print(f"\n[ESTADO ACTUAL]: El espectador está {estado_espectador}.")
    
    match estado_espectador:
        case "Tranquilo":
            print("1. No pasa nada (Sigue viendo la película)")
            print("2. ¡Aparece un fantasma de la nada!")
            accion = input("¿Qué pasa en la película? (1/2): ")
            
            if accion == "2":
                estado_espectador = "Asustado"
            else:
                print("El espectador come palomitas tranquilamente...")

        case "Asustado":
            print("1. La música baja de volumen (Se calma el ambiente)")
            print("2. ¡VIENE UN JUMPSCARE CON UN GRITO FUERTE!")
            accion = input("¿Qué pasa ahora? (1/2): ")
            
            if accion == "1":
                estado_espectador = "Tranquilo"
            elif accion == "2":
                estado_espectador = "En Shock"

        case "En Shock":
            if palomitas:
                print("¡El espectador tiró las palomitas del susto!")
                palomitas = False
                
            print("1. El espectador respira hondo y se tranquiliza")
            print("2. ¡El monstruo empieza a perseguir al protagonista!")
            accion = input("¿Qué pasa ahora? (1/2): ")
            
            if accion == "1":
                estado_espectador = "Asustado"
            elif accion == "2":
                estado_espectador = "Fuera de la Sala"

print("\n El espectador salió corriendo de la sala. ¡La película dio demasiado miedo!")
print("=== FIN DE LA SIMULACIÓN ===")