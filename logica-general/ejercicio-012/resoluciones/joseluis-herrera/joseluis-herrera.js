    const jugadores = [
    {
        nombre: "Alan",
        equipo: "Mexico",
        puntos: 122,
    },
    {
    nombre: "Carlos",
    equipo: "Colombia",
    puntos: 95,
    },
    {
    nombre: "Sofía",
    equipo: "Mexico",
    puntos: 140,
    },
    {
    nombre: "Lucas",
    equipo: "Argentina",
    puntos: 110,
    },
    {
    nombre: "Elena",
    equipo: "Mexico",
    puntos: 118,
    },
    {
    nombre: "Mateo",
    equipo: "España",
    puntos: 88,
    }
    ];



    const equipoMexico = jugadores.filter(jugador => jugador.equipo === "Mexico");


    const otrosEquipos = jugadores.filter(jugador => jugador.equipo !== "Mexico");

    console.log("--- OPCIÓN A: JUGADORES DE MÉXICO ---");
    equipoMexico.forEach(jugador => {
    console.log(`Nombre: ${jugador.nombre} | Puntos: ${jugador.puntos}`);
    });

    console.log("\n--- OPCIÓN B: JUGADORES INTERNACIONALES ---");
    otrosEquipos.forEach(jugador => {
    console.log(`Nombre: ${jugador.nombre} (${jugador.equipo}) | Puntos: ${jugador.puntos}`);
    });