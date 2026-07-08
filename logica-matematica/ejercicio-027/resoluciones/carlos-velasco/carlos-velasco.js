const analizarRitmo = (bpmList) => {
    if (!bpmList || bpmList.length === 0) return "Lista vacía.";

    const suma = bpmList.reduce((a, b) => a + b, 0);
    const promedio = suma / bpmList.length;

    const inconsistencias = bpmList.filter(bpm => Math.abs(bpm - promedio) > 20);
    
    const estado = inconsistencias.length > 0 
        ? "Playlist con cambios bruscos" 
        : "Playlist fluida";

    return {
        promedio_bpm: promedio.toFixed(2),
        estado: estado,
        explicacion: inconsistencias.length > 0 
            ? `Se detectaron ${inconsistencias.length} canciones con ritmo inestable.` 
            : "El ritmo es consistente."
    };
};

console.log(analizarRitmo([120, 125, 122, 128])); 
console.log(analizarRitmo([120, 150, 122, 125])); 