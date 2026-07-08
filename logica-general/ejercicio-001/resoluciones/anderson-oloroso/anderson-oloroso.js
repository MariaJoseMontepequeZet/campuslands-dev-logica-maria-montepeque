const jugadors = [
    { nombre: "Marvel", estado: "Dañado", diamantes: 80, nivel: "Maestro" },
    { nombre: "Dum", estado: "Mejorado", diamantes: 180, nivel: "Leyenda" },
    { nombre: "Alondra", estado: "Sin daño", diamantes: 170, nivel: "Gran maestro" }
  ];
  
  function leyenda(string) {
    const sinDanio = jugadors.filter(jugador => jugador.estado !== "Dañado");
  
    const diamantesMayores150 = sinDanio.filter(
      jugador => jugador.diamantes > 150
    );
  
    const filtrados = diamantesMayores150.filter(
      jugador => jugador.nivel === string
    );
  
    return {
      accion: filtrados.length
        ? "revisar leyendas válidas"
        : "no hay leyenda válida",
      motivo: filtrados.length
        ? "Estado sin daño + diamantes > 150 + nivel coincide."
        : "No se cumple alguna condición (sin daño, diamantes > 150, nivel).",
      resultados: filtrados
    };
  }
  
  console.log(leyenda("Leyenda"));
  