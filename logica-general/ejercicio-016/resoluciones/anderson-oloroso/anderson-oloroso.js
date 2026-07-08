const verticesIniciales = [
  [1.0, 2.0, 0.0],
  [3.0, 4.0, 1.5],
  [0.5, -1.0, 3.0]
];

const vectorTraslacion = [2.0, -1.0, 0.5];

function renderizarAnimacion(vertices, traslacion) {
  if (!vertices || vertices.length === 0 || traslacion.length !== 3) {
    return { accion: "Error de renderizado", motivo: "Datos tridimensionales inválidos" };
  }

  const verticesTransformados = vertices.map(vertice => {
    return [
      vertice[0] + traslacion[0],
      vertice[1] + traslacion[1],
      vertice[2] + traslacion[2]
    ];
  });

  const verticesFueraDeRango = verticesTransformados.filter(v => v[2] > 3.0);
  
  const hayOclusion = verticesFueraDeRango.length > 0;

  const detalleVertices = verticesTransformados
    .map((v, i) => `V${i+1}[${v[0].toFixed(1)}, ${v[1].toFixed(1)}, ${v[2].toFixed(1)}]`)
    .join(" | ");

  return {
    accion: hayOclusion
      ? `Renderizado parcial -> ${detalleVertices}`
      : `Renderizado completo -> ${detalleVertices}`,

    motivo: hayOclusion
      ? `Efecto Oclusión: ${verticesFueraDeRango.length} vértice(s) superaron el plano de corte Z > 3.0.`
      : "Todos los vértices se encuentran dentro del volumen de visión de la cámara."
  };
}

console.log(renderizarAnimacion(verticesIniciales, vectorTraslacion));