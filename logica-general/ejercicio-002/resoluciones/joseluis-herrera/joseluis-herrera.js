    const futbol_equipos = [
    {
        Nombre: "FF1",
        Goles: 3,
        Victorias: 1,
        Puntos: 2
    },
    {
        Nombre: "FF2",
        Goles: 5,
        Victorias: 3,
        Puntos: 9
    },
    {
        Nombre: "FF3",
        Goles: 1,
        Victorias: 0,
        Puntos: 1
    },
    {
        Nombre: "FF4",
        Goles: 4,
        Victorias: 2,
        Puntos: 6
    }
    ]

    let liga_mayor = [];
    let liga_menor = [];

    for(let i = 0; i < futbol_equipos.length; i++ ){
    let equipo = futbol_equipos[i]
    
    if (equipo.Puntos >= 3 ){
        liga_mayor.push(equipo);
    }else{
        liga_menor.push(equipo);
    }
    
    if (equipo.Puntos  >= 9){
        console.log(`El ganador es: ${equipo.Nombre}`)
    }
    }

    console.log("Equipos en liga mayor", liga_mayor)
    console.log("Equipos en liga menor", liga_menor)

