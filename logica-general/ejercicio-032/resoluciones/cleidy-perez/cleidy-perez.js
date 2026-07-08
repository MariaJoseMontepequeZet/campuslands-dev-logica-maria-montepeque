const competidoresDePingPong=[
    {id:1, competidor: "Juan", habilidad: "agilidad", punteos: [85, 90]},
    {id:2, competidor: "Ester", habilidad: "técnica", punteos: [67, 90]},
    {id:3, competidor: "Maryori", habilidad: "reactividad", punteos:[67,89]},
    {id:4, competidor: "José", habilidad: "técnica", punteos: [56,78]}
];

function seleccionParaTorneo(competidores){
    if(!competidores || competidores.length ===0){
        console.log("No hay competidores para seleccionar al torneo");
        return;

    }

    for (let i=0; i < competidores.length; i++){
        let sumaPunteos=0;

        for(let j=0; j< competidores[i].punteos.length; j++){
            sumaPuntoe+= competidores[i].punteos[j]
        }
        let promedio = sumaPuntoe /sumaCompetidores;

        if(competidores[i].habilidad.toLowerCase()==="agilidad" && promedio >= 80){
            console.log(competidores[i].competidor+ ":Es apto para ir al torneo")
    
        }else if((competidores[i].habilidad.toLowerCase()=== "tecnica" || "reactividad") && promedio >= 70){
            console.log(competidores[i].habilidad+ ":Debe seguir practicado");
        }else[
            console.log(competidores[i].competidor+ ":No es apto para el torneo siga prácticando")
        ]
    }

}

seleccionParaTorneo(competidoresDePingPong);