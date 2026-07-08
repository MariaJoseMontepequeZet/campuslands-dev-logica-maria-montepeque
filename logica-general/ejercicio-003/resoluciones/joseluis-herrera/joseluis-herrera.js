    Entrada
    const equipos_sport = [
    {
        nombre: "Martines12",
        victorias: 4,
        reliquias: 3,
        kills: 2
    },
    {
        nombre: "Aguilas123",
        victorias: 2,
        reliquias: 5,
        kills: 3
    },
    {
        nombre: "Poctasios1",
        victorias: 5,
        reliquias: 2,
        kills: 3
    }
    ];

    let puntos_equipo = 0;
    let equipo_ganador = []; 

    equipos_sport.forEach((equipo) =>{
    let calcular_puntos = (equipo.victorias * 3) + (equipo.reliquias * 5) + equipo.kills;
    if(calcular_puntos > puntos_equipo){
        puntos_equipo = calcular_puntos;
        equipo_ganador = [equipo.nombre]
    }else if (calcular_puntos == puntos_equipo){
        equipo_ganador.push(equipo.nombre);
    }
    })

    //Salida
    if(equipo_ganador.length > 1 ){
    console.log(`Hay un empate, con un total de puntos ${puntos_equipo}, los cuales son los siguientes ${equipo_ganador.join(",")}`)
    }else {
    console.log(`El equipo ganador es ${equipo_ganador} con un total de puntos ${puntos_equipo}`)
    }



