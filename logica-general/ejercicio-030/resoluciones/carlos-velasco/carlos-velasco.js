const validarEmbarque = (pasajero, restriccionEdad) => {
    if (!pasajero.tieneBoleto) {
        return { estado: "Rechazado", razon: "Sin boleto válido." };
    }

    if (!pasajero.tienePasaporte) {
        return { estado: "Rechazado", razon: "Pasaporte requerido para el destino." };
    }

    if (pasajero.edad < restriccionEdad && !pasajero.acompanado) {
        return { estado: "Rechazado", razon: "Menor de edad sin acompañante." };
    }

    return { estado: "Aprobado", razon: "Todo en orden. ¡Buen viaje!" };
};
const p1 = { nombre: "Ana", edad: 25, tienePasaporte: true, tieneBoleto: true };
const p2 = { nombre: "Luis", edad: 12, tienePasaporte: true, tieneBoleto: true, acompanado: false };
console.log(validarEmbarque(p1, 18)); 
console.log(validarEmbarque(p2, 18)); 