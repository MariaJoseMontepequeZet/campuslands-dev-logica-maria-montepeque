let nombre = "Laura";
let tienePasaporte = true;
let tieneBoleto = true;

console.log("Verificando documentos del pasajero...");

if (tienePasaporte) {
    console.log("✓ Pasaporte verificado.");

    if (tieneBoleto) {
        console.log("✓ Boleto verificado.");
        console.log(nombre + " puede abordar el viaje.");
    } else {
        console.log("✗ No puede abordar: falta el boleto.");
    }
} else {
    console.log("✗ No puede abordar: falta el pasaporte.");
}

console.log("Proceso de verificación finalizado.");