const obraImpresion = {
  titulo: "Retrato abstracto",
  autor: "Carlos López",
  archivo: {
    nombre: "retrato_abstracto.jpg",
    formato: "JPG",
    tamanoMB: 8.2,
    resolucionDPI: 150,
    anchoPx: 1200,
    altoPx: 1800,
    modoColor: "RGB",
    capas: 1
  },
  tipoUso: "impresion"
};

function validarObraDigital(obra) {
  // Validación de entrada
  if (!obra || typeof obra !== "object") {
    return { error: "Datos de obra inválidos" };
  }

  // Array acumulador de ajustes requeridos
  const ajustesRequeridos = [];

  // Definición de reglas de negocio
  const reglas = [
    {
      nombre: "Resolución mínima",
      validar: () => {
        const dpiMinimo = obra.tipoUso === "impresion" ? 300 : 72;
        return obra.archivo.resolucionDPI >= dpiMinimo;
      },
      ajuste: () => {
        const dpiMinimo = obra.tipoUso === "impresion" ? 300 : 72;
        return `Resolución insuficiente: ${obra.archivo.resolucionDPI} DPI (mínimo ${dpiMinimo} DPI para ${obra.tipoUso})`;
      }
    },
    {
      nombre: "Dimensiones mínimas",
      validar: () => obra.archivo.anchoPx >= 1000 && obra.archivo.altoPx >= 1000,
      ajuste: () => `Dimensiones insuficientes: ${obra.archivo.anchoPx}x${obra.archivo.altoPx} px (mínimo 1000x1000 px)`
    },
    {
      nombre: "Modo de color correcto",
      validar: () => {
        if (obra.tipoUso === "web") return obra.archivo.modoColor === "RGB";
        if (obra.tipoUso === "impresion") return obra.archivo.modoColor === "CMYK";
        return false;
      },
      ajuste: () => {
        const modoCorrecto = obra.tipoUso === "web" ? "RGB" : "CMYK";
        return `Modo de color incorrecto: ${obra.archivo.modoColor} (debe ser ${modoCorrecto} para ${obra.tipoUso})`;
      }
    },
    {
      nombre: "Tamaño de archivo",
      validar: () => obra.archivo.tamanoMB <= 50,
      ajuste: () => `Archivo muy pesado: ${obra.archivo.tamanoMB} MB (máximo 50 MB)`
    },
    {
      nombre: "Formato aceptado",
      validar: () => {
        const formatosAceptados = ["PNG", "JPG", "JPEG", "PSD", "AI", "SVG"];
        return formatosAceptados.includes(obra.archivo.formato.toUpperCase());
      },
      ajuste: () => `Formato no aceptado: ${obra.archivo.formato} (aceptados: PNG, JPG, PSD, AI, SVG)`
    },
    {
      nombre: "Capas presentes",
      validar: () => obra.archivo.capas >= 1,
      ajuste: () => `Archivo sin capas: ${obra.archivo.capas} capas (mínimo 1 capa)`
    },
    {
      nombre: "Nombre de archivo válido",
      validar: () => {
        const nombre = obra.archivo.nombre;
        const regex = /^[a-zA-Z0-9_\-\.]+$/;
        return regex.test(nombre) && nombre.length <= 50;
      },
      ajuste: () => `Nombre de archivo inválido: "${obra.archivo.nombre}" (sin caracteres especiales, máximo 50 caracteres)`
    },
    {
      nombre: "Metadatos completos",
      validar: () => obra.titulo && obra.titulo.trim() !== "" && 
                    obra.autor && obra.autor.trim() !== "",
      ajuste: () => "Faltan metadatos obligatorios (título y/o autor)"
    },
    {
      nombre: "Tipo de uso válido",
      validar: () => obra.tipoUso === "web" || obra.tipoUso === "impresion",
      ajuste: () => `Tipo de uso inválido: "${obra.tipoUso}" (debe ser "web" o "impresion")`
    }
  ];

  // Ciclo: recorrer cada regla y acumular ajustes requeridos
  for (const regla of reglas) {
    if (!regla.validar()) {
      ajustesRequeridos.push(regla.ajuste());
    }
  }

  // Condicional final: determinar si la obra está lista
  if (ajustesRequeridos.length === 0) {
    return {
      estado: "LISTA PARA PUBLICAR",
      titulo: obra.titulo,
      autor: obra.autor,
      tipoUso: obra.tipoUso,
      detalle: `"${obra.titulo}" cumple todos los requisitos técnicos`,
      ajustesRequeridos: []
    };
  } else {
    return {
      estado: "REQUIERE AJUSTES",
      titulo: obra.titulo,
      autor: obra.autor,
      tipoUso: obra.tipoUso,
      detalle: `"${obra.titulo}" requiere ${ajustesRequeridos.length} ajuste(s)`,
      ajustesRequeridos: ajustesRequeridos
    };
  }
}

console.log(validarObraDigital(obraImpresion));