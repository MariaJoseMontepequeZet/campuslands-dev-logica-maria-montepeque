const organizarCombates = (peleadores) => {
    let emparejados = [];
    let disponibles = [...peleadores];

    while (disponibles.length > 1) {
        let p1 = disponibles.shift();
        let mejorParejaIndex = -1;
        let minDiferenciaExperiencia = Infinity;

        for (let i = 0; i < disponibles.length; i++) {
            let p2 = disponibles[i];
            if (Math.abs(p1.peso - p2.peso) <= 5) {
                let diffExp = Math.abs(p1.experiencia - p2.experiencia);
                if (diffExp <= 1 && diffExp < minDiferenciaExperiencia) {
                    minDiferenciaExperiencia = diffExp;
                    mejorParejaIndex = i;
                }
            }
        }

        if (mejorParejaIndex !== -1) {
            emparejados.push({ combate: `${p1.nombre} vs ${disponibles[mejorParejaIndex].nombre}` });
            disponibles.splice(mejorParejaIndex, 1);
        } else {
            emparejados.push({ combate: `${p1.nombre} vs [Sin rival compatible]` });
        }
    }

    return emparejados;
};
const roster = [
    { nombre: "Alex", peso: 70, experiencia: 3 },
    { nombre: "Ben", peso: 72, experiencia: 4 },
    { nombre: "Cloe", peso: 90, experiencia: 5 }
];

console.log(organizarCombates(roster));