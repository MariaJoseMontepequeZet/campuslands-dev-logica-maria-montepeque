
function filtrarMotos(motos, filtro = {}) {
  const { maxKm, estado } = filtro;

  return motos
    .filter((moto) => cumpleKm(moto.km, maxKm))
    .filter((moto) => cumpleEstado(moto.estado, estado));
}

function cumpleKm(km, maxKm) {
  if (maxKm == null) return true;        
  if (km == null) return false;          
  return km <= maxKm;                    
}

function cumpleEstado(motoEstado, estado) {
  if (estado == null) return true;       
  return motoEstado === estado;          
}

const motos = [
  { km: 12000, estado: "usado" },
  { km: 3000, estado: "nuevo" },
  { km: 5000, estado: "nuevo" },
];

console.log(filtrarMotos(motos, { maxKm: 5000, estado: "nuevo" }));
