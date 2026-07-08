const competidoresDePingPong=[
    {id:1,  competidor: "Tatiana", victorias: 4, derrotas: 6, puntos:[57.79]},
    {id:2, competidor: "Estefani", victorias: 6, derrotas: 4, puntos:[67, 90]},
    {id:3, competidor: "Edy", victorias: 8, derrotas:2, puntos:[89, 87]}
];

function probabilidadGanar(competidores){
    if(!competidores || competidores.length ===0){
        console.log("No hay competidores para realizar la probabilidad")
        return;
    }

    for(let i=0; i<competidores.length; i++){
        let sumaPuntos=0;
        
        for(let e=0; e<competidores[i].puntos.length; e++){
            sumaPuntos+= competidores[i].puntos[e];
        }
        let promedio = sumaPuntos/competidores[i].puntos.length;

        let totalPartidos=competidores[i].victorias+competidores[i].derrotas;
        let probabilidad =(competidores[i].victorias/totalPartidos)*100;

        console.log("Competidor: "+ competidores[i].competidor);
        console.log("Promedio de puntos: "+ promedio.toFixed(2));
        console.log("Probabilidad de ganar: " + probabilidad.toFixed(2)+ "%");

        if (probabilidad >= 70 && promedio >= 80 ){
            console.log("Alta probabilidad de ganar")
        }else if(probabilidad >= 50){
            console.log("Probabilidad media de ganar");
        }else{
            console.log("Probabilidad baja de ganar")
        }

    }

}

probabilidadGanar(competidoresDePingPong);

