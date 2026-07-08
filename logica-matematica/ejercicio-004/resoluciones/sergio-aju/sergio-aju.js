function analizarInventario(precios) {
    if (!precios || precios.length === 0) return "Inventario vacío.";
    const maximo = Math.max(...precios);
    const minimo = Math.min(...precios);
    const rango = maximo - minimo;
    return { maximo, minimo, rango };
}
console.log(analizarInventario([1500, 3200, 4500, 2100])); 
