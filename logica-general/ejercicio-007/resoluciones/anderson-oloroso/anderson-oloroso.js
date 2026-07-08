
function validarPlaylist(playlist) {
  const validas = [];
  const inconsistencias = [];

  for (let i = 0; i < playlist.length; i++) {
    const cancion = playlist[i];
    const titulo = cancion?.titulo;
    const artista = cancion?.artista;
    const dur = cancion?.duracionMin;

    const valida =
      typeof titulo === "string" && titulo.trim() !== "" &&
      typeof artista === "string" && artista.trim() !== "" &&
      typeof dur === "number" && dur > 0;

    if (valida) validas.push(cancion);
    else inconsistencias.push({ index: i, id: cancion?.id });
  }

  return { validas, inconsistencias };
}

const playlist = [
  { id: "A", titulo: "Andromeda", artista: "Rafa Espino ft. Droow ", duracionMin: 3 },
  { id: "B", titulo: "", artista: "Shé", duracionMin: 2 },
  { id: "C", titulo: "Aprendí", artista: "", duracionMin: 3 },
];

console.log(validarPlaylist(playlist));
