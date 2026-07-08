const artistas_validos = ["Don Omar", "Daddy Yankee", "Bad Bunny", "Rosalía"];

const playlist = [
    { "titulo": "Danza Kuduro", "artista": "Don Omar" },
    { "titulo": "Gasolina", "artista": "Daddy Yankee" },
    { "titulo": "Canción Fantasma", "artista": "Un Artista Desconocido" },
    { "titulo": "Safaera", "artista": "Bad Bunny" }
];

let inconsistencias_detectadas = 0;

for (let cancion of playlist) {
    if (!artistas_validos.includes(cancion.artista)) {
        console.log("¡INCONSISTENCIA encontrada!");
        console.log(`La canción '${cancion.titulo}' tiene un artista no registrado: '${cancion.artista}'`);
        
        inconsistencias_detectadas += 1;
    }
}

if (inconsistencias_detectadas === 0) {
    console.log("No se encontraron inconsistencias en la playlist.");
} else {
    console.log(`Se encontraron ${inconsistencias_detectadas}.`);
}