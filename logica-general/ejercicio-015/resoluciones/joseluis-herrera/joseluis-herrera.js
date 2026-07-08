const proyectos_digitales = [
  {
    nombre: "Diseño_Personaje",
    equipo: "Ilustración",
    puntos: 350, 
  },
  {
    nombre: "Banner_Web",
    equipo: "Marketing",
    puntos: 72,
  },
  {
    nombre: "Concept_Art_Boceto",
    equipo: "Videojuegos",
    puntos: 150,
  },
  {
    nombre: "Impresión_Poster",
    equipo: "Impresión",
    puntos: 600,
  }
];

function evaluarReglasNegocio(lista) {
  for (let i = 0; i < lista.length; i++) {
    let dibujo = lista[i];

    console.log(`\nAnalizando archivo: ${dibujo.nombre} (${dibujo.equipo})`);


    if (dibujo.puntos <= 150) {
      console.log("-> [ESTADO]: Aprobado para entrega digital/boceto rápida.");
    } 

    else if (dibujo.puntos > 150 && dibujo.puntos <= 300) {
      console.log("-> [ESTADO]: Excelente. Cumple la regla de resolución estándar de la industria.");
    } 

    else if (dibujo.puntos > 300) {
      console.log("-> [ALERTA]: Requiere compresión o aprobación del supervisor de almacenamiento.");
    }
  }
}

evaluarReglasNegocio(proyectos_digitales);