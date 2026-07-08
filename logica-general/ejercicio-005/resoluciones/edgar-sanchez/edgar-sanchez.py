def ordenar_prioridades_taller(vehiculos):
    if not vehiculos:
        return []
    pesos_prioridad = {
        "critica": 3,
        "moderada": 2,
        "leve": 1
    }
    def obtener_peso(vehiculo):
        tipo_falla = vehiculo.get("falla", "").lower()
        return pesos_prioridad.get(tipo_falla, 0)
    lista_ordenada = sorted(vehiculos, key=obtener_peso, reverse=True)
    
    return lista_ordenada
orden_de_llegada = [
    {"placa": "MOTO-123", "falla": "leve", "descripcion": "Cambio de aceite"},
    {"placa": "AUTO-456", "falla": "critica", "descripcion": "Fallo total de frenos"},
    {"placa": "TRUCK-789", "falla": "moderada", "descripcion": "Fuga de refrigerante"},
    {"placa": "SUV-000", "falla": "desconocida", "descripcion": "Revisión general"}
]
print("--- Prueba 1 (Caso Normal: Lista Ordenada) ---")
resultado_1 = ordenar_prioridades_taller(orden_de_llegada)
for posicion, vehiculo in enumerate(resultado_1, 1):
    print(f"{posicion}º Atendido -> Placa: {vehiculo['placa']} | Falla: {vehiculo['falla'].upper()}")
print()
print("--- Prueba 2 (Caso Borde: Sin vehículos) ---")
resultado_2 = ordenar_prioridades_taller([])
print(f"Resultado en taller: {resultado_2}\n")