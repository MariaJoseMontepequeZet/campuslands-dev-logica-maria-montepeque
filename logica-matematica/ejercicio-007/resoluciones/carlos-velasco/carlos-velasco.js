const analizarRitmo = (bpmList) => {
    if (bpmList.length < 2) return "Playlist muy corta para analizar.";
    let tieneSaltoBrusco = false;
    for (let i = 0; i < bpmList.length - 1; i++) {
        const diferencia = Math.abs(bpmList[i] - bpmList[i + 1]);
        if (diferencia > 20) {
            tieneSaltoBrusco = true;
            break;
        }
    }
    return {
        estado: tieneSaltoBrusco ? "Salto brusco detectado" : "Playlist armónica",
        explicacion: tieneSaltoBrusco 
            ? "Hay cambios de ritmo mayores a 20 BPM." 
            : "La transición de ritmos es suave y constante."
    };
};

console.log(analizarRitmo([120, 125, 130])); 
console.log(analizarRitmo([120, 150, 125])); 