const citas_tatuajes = [
  {
    nombre: "Mateo",
    equipo: "España",
    puntos: 88,
  },
  {
    nombre: "Alan",
    equipo: "Mexico",
    puntos: 122,
  },
  {
    nombre: "Carlos",
    equipo: "Colombia",
    puntos: -5,
  },
  {
    nombre: "Sofía",
    equipo: "Mexico",
    puntos: 250,
  }
];

function diagnosticarErrores(lista) {
  let erroresEncontrados = 0;

  for (let i = 0; i < lista.length; i++) {
    let cliente = lista[i];

    if (cliente.puntos < 0) {
      console.log(`ERROR DETECTADO en cliente ${cliente.nombre}: Los puntos (${cliente.puntos}) no pueden ser negativos.`);
      erroresEncontrados++;
    } else if (cliente.puntos > 200) {
      console.log(`ERROR DETECTADO en cliente ${cliente.nombre}: Los puntos (${cliente.puntos}) exceden el límite máximo permitido de 200.`);
      erroresEncontrados++;
    }
  }

  if (erroresEncontrados === 0) {
    console.log("Diagnóstico completado: No se encontraron errores en el sistema.");
  } else {
    console.log(`Diagnóstico completado: Se encontraron un total de ${erroresEncontrados} errores.`);
  }
}

diagnosticarErrores(citas_tatuajes);