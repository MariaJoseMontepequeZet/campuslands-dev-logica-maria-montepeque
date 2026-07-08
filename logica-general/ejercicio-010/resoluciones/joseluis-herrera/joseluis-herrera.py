print("Instrucciones para abordar: 1. Pasaporte -> 2. Equipaje -> 3. Pase de abordaje\n")

pasaporte_valido = False
equipaje_ok = False
pase_listo = False

instruccion_actual = 1
proceso_activo = True

while proceso_activo:
    match instruccion_actual:
        case 1:
            print("Verificación de documentos.")
            respuesta = input("¿Cuenta con pasaporte vigente con más de 6 meses de validez? (si/no): ").lower()
            if respuesta == "si":
                print("Pasaporte aprobado.")
                pasaporte_valido = True
                instruccion_actual = 2
            else:
                print("No cumple la instrucción 1. Debe renovar su pasaporte en ventanilla.")
                proceso_activo = False

        case 2:
            print("\nControl de equipaje de mano.")
            peso = float(input("Ingrese el peso de su equipaje de mano en kilos: "))
            if peso <= 10.0:
                print("Equipaje aprobado dentro del límite permitido.")
                equipaje_ok = True
                instruccion_actual = 3
            else:
                print("El equipaje excede los 10kg permitidos.")
                accion = input("¿Desea pagar equipaje extra en bodega o retirar artículos? (pagar/retirar): ").lower()
                if accion == "pagar":
                    print(" Multa pagada. Equipaje aprobado.")
                    equipaje_ok = True
                    instruccion_actual = 3
                else:
                    print(" Regrese cuando su equipaje cumpla el peso.")
                    proceso_activo = False

        case 3:
            print("\nGeneración de pase de abordaje.")
            confirmar = input("¿Desea confirmar su asiento en la ventana o pasillo? (ventana/pasillo): ").lower()
            if confirmar in ["ventana", "pasillo"]:
                print(f" Asiento asignado en {confirmar}.")
                pase_listo = True
                proceso_activo = False
            else:
                print("Entrada no válida. Intente de nuevo.")

if pasaporte_valido and equipaje_ok and pase_listo:
    print("\n ¡Todas las instrucciones completadas con éxito! Buen viaje.")
else:
    print("\n Proceso cancelado. No se completó la lectura de instrucciones.")