const validarPlaylist = (canciones) => {
    let reporte = [];
    let titulosRegistrados = new Set();

    canciones.forEach(cancion => {
        let motivo = "";
        let aprobada = true;

        if (cancion.duracion < 30) {
            motivo = "Duración insuficiente (< 30s).";
            aprobada = false;
        } 
        else if (!["mp3", "flac"].includes(cancion.formato.toLowerCase())) {
            motivo = "Formato no permitido.";
            aprobada = false;
        }
        else if (titulosRegistrados.has(cancion.titulo)) {
            motivo = "Título duplicado en la lista.";
            aprobada = false;
        }

        if (aprobada) {
            titulosRegistrados.add(cancion.titulo);
            reporte.push({ titulo: cancion.titulo, estado: "Aprobada" });
        } else {
            reporte.push({ titulo: cancion.titulo, estado: "Rechazada", motivo });
        }
    });

    return reporte;
};

const playlist = [
    { titulo: "Intro", duracion: 10, formato: "mp3" },
    { titulo: "Hit Song", duracion: 200, formato: "wav" },
    { titulo: "Hit Song", duracion: 250, formato: "mp3" },
    { titulo: "Chill Beats", duracion: 180, formato: "flac" }
];

console.log(validarPlaylist(playlist));