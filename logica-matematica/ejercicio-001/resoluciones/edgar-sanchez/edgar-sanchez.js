const administradorArchivos = require('node:fs/promises');
const path = require('node:path');

async function crearNotaMarkdown(tituloNota, contenidoNota) {
  const nombreArchivo = `${tituloNota.toLowerCase().replace(/\s+/g, '-')}.md`;
  const rutaAbsoluta = path.join(__dirname, nombreArchivo);
  const cuerpoMarkdown = `# ${tituloNota}\n\n${contenidoNota}`;

  try {
    await administradorArchivos.writeFile(rutaAbsoluta, cuerpoMarkdown, 'utf-8');
    return rutaAbsoluta;
  } catch (error) {
    throw error;
  }
}

async function ejecutarPruebasSistema() {
  try {
    const rutaResultado = await crearNotaMarkdown('Nota de Prueba', 'Este es el contenido verificado.');
    if (typeof rutaResultado !== 'string') {
      throw new Error('La prueba fallo: No se retorno una ruta valida.');
    }
  } catch (error) {
    process.exit(1);
  }
}

ejecutarPruebasSistema();