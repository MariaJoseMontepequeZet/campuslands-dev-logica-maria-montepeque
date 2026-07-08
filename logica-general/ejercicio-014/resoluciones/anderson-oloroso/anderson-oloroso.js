const sesionMenor = {
  cliente: {
    nombre: "Diego",
    edad: 16,
    consentimientoFirmado: false,
    bajoEfectos: false,
    alergias: ["ninguna"]
  },
  diseno: {
    descripcion: "Estrella",
    tamanoCm: 4,
    contenidoOfensivo: false,
    color: false
  },
  zona: {
    nombre: "muñeca",
    esZonaRestringida: false,
    autorizacionEspecial: false
  },
  duracionEstimadaHoras: 1
};

function diagnosticarSesion(sesion) {

  if (!sesion || typeof sesion !== "object") {
    return { error: "Datos de sesión inválidos" };
  }

  const errores = [];

  const reglas = [
    {
      nombre: "Mayoría de edad",
      validar: () => sesion.cliente.edad >= 18,
      error: `Cliente menor de edad: ${sesion.cliente.edad} años (mínimo 18)`
    },
    {
      nombre: "Consentimiento de menor",
      validar: () => sesion.cliente.edad >= 18 || sesion.cliente.consentimientoFirmado,
      error: "Menor de edad sin consentimiento firmado de tutor"
    },
    {
      nombre: "Estado sobrio",
      validar: () => sesion.cliente.bajoEfectos === false,
      error: "Cliente bajo efectos de alcohol o drogas"
    },
    {
      nombre: "Alergias declaradas",
      validar: () => {
        const alergias = sesion.cliente.alergias;
        return !alergias || alergias.length === 0 ||
               (alergias.length === 1 && alergias[0].toLowerCase() === "ninguna");
      },
      error: "Cliente con alergias a tintas sin prueba previa realizada"
    },
    {
      nombre: "Zona restringida",
      validar: () => !sesion.zona.esZonaRestringida || sesion.zona.autorizacionEspecial,
      error: `Zona restringida (${sesion.zona.nombre}) sin autorización especial`
    },
    {
      nombre: "Tamaño mínimo",
      validar: () => sesion.diseno.tamanoCm >= 3,
      error: `Diseño muy pequeño: ${sesion.diseno.tamanoCm} cm (mínimo 3 cm)`
    },
    {
      nombre: "Contenido apropiado",
      validar: () => sesion.diseno.contenidoOfensivo === false,
      error: "Diseño con contenido ofensivo no permitido"
    },
    {
      nombre: "Duración de sesión",
      validar: () => sesion.duracionEstimadaHoras <= 6,
      error: `Sesión muy larga: ${sesion.duracionEstimadaHoras}h (máximo 6h continuas)`
    }
  ];

  for (const regla of reglas) {
    if (!regla.validar()) {
      errores.push(regla.error);
    }
  }

  if (errores.length === 0) {
    return {
      diagnostico: "APROBADA",
      cliente: sesion.cliente.nombre,
      detalle: `Sesión aprobada para ${sesion.cliente.nombre}`,
      zona: sesion.zona.nombre,
      diseno: sesion.diseno.descripcion,
      errores: []
    };
  } else {
    return {
      diagnostico: "RECHAZADA",
      cliente: sesion.cliente.nombre,
      detalle: `Sesión rechazada con ${errores.length} error(es) diagnosticado(s)`,
      zona: sesion.zona.nombre,
      diseno: sesion.diseno.descripcion,
      errores: errores
    };
  }
}

console.log(diagnosticarSesion(sesionMenor));