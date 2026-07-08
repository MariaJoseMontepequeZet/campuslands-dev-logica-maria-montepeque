const equipos =  [
    { nombreEquipo: "Jaguares", validacion: "incompleto" },
    { nombreEquipo: "Altanes", validacion: "completo" },
    { nombreEquipo: "Dunas", validacion: "completo" }
  ];
  
  function validarEquipos(arr) {
    const completos = arr.filter(e => e.validacion === "completo");
    const incompletos = arr.filter(e => e.validacion !== "completo");
  
    return {
      completos: completos.map(e => e.nombreEquipo),
      incompletos: incompletos.map(e => e.nombreEquipo),
      accion: incompletos.length
        ? "Hay equipos incompletos"
        : "Todos los equipos están completos"
    };
  }
  
  console.log(validarEquipos(equipos));
  