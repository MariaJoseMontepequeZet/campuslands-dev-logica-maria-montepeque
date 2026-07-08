const validarFormula = (formula, masaReportada) => {
    const masaCalculada = formula.reduce((acc, el) => acc + (el.masaAtomica * el.cantidad), 0);
    const diferencia = Math.abs(masaCalculada - masaReportada);

    if (diferencia > 0.1) {
        return {
            estado: "Inválido",
            diferencia: diferencia.toFixed(2),
            motivo: "Error de cálculo detectado."
        };
    }

    return {
        estado: "Válido",
        masaCalculada: masaCalculada.toFixed(2),
        motivo: "La masa molar reportada es correcta."
    };
};

const agua = [
    { elemento: "H", masaAtomica: 1.008, cantidad: 2 },
    { elemento: "O", masaAtomica: 15.999, cantidad: 1 }
];

console.log(validarFormula(agua, 18.015));
console.log(validarFormula(agua, 20.000));