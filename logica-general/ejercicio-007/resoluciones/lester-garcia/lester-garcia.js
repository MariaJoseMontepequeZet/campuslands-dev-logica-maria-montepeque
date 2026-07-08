let playlist = [
    "Bohemian Rhapsody",
    "Imagine",
    "Hotel California",
    "Imagine",
    "Billie Jean"
];

let cancionesUnicas = [...new Set(playlist)];

if (playlist.length === cancionesUnicas.length) {
    console.log("La playlist es válida. No existen canciones repetidas.");
} else {
    console.log("Inconsistencia detectada: existen canciones repetidas en la playlist.");
}