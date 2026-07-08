def filtrar_inventario_motos(motos, categoria_filtro, precio_maximo):
    if not motos:
        return []
    motos_que_cumplen = []
    for moto in motos:
        marca = moto.get("marca", "Desconocida")
        categoria = moto.get("categoria", "").lower()
        precio = moto.get("precio", 0)
        coincide_categoria = (categoria == categoria_filtro.lower()) or (categoria_filtro.lower() == "todas")
        coincide_precio = precio <= precio_maximo
        if coincide_categoria and coincide_precio:
            motos_que_cumplen.append({
                "marca": marca,
                "categoria": categoria,
                "precio": precio
            })
    return motos_que_cumplen
inventario_central = [
    {"marca": "Yamaha R3", "categoria": "Deportiva", "precio": 6500},
    {"marca": "Honda Shadow", "categoria": "Cruiser", "precio": 8000},
    {"marca": "Suzuki Gixxer", "categoria": "Deportiva", "precio": 3200},
    {"marca": "Vespa Primavera", "categoria": "Scooter", "precio": 4500}
]
print("--- Prueba 1 (Caso Normal: Deportivas <= $5000) ---")
resultado_1 = filtrar_inventario_motos(inventario_central, categoria_filtro="Deportiva", precio_maximo=5000)
print(f"Motos encontradas: {resultado_1}\n")
print("--- Prueba 2 (Caso Borde: Comodín 'Todas' <= $7000) ---")
resultado_2 = filtrar_inventario_motos(inventario_central, categoria_filtro="Todas", precio_maximo=7000)
print(f"Motos encontradas: {resultado_2}\n")
print("--- Prueba 3 (Caso Borde: Presupuesto muy bajo) ---")
resultado_3 = filtrar_inventario_motos(inventario_central, categoria_filtro="Scooter", precio_maximo=1500)
print(f"Motos encontradas: {resultado_3}\n")