// Entrada
    const Equipos = [
    { nombre: "Alpha Team", 
    daño: 2450, 
    kills: 14, 
    sobrevivientes: 2 },
    { nombre: "Shadow Guild",
        daño: 1800,
        kills: 9, 
        sobrevivientes: 4 },
    { nombre: "Cyber Wolves",
    daño: 3100,
    kills: 18, 
    sobrevivientes: 1 },
    { nombre: "Viper Squad",
    daño: 1500,
    kills: 6, 
    sobrevivientes: 0 },
    { nombre: "Iron Titans",
    daño: 2200, 
    kills: 11, 
    sobrevivientes: 3 }
    ];

    let ganador = Equipos[0];
    let calcular_puntuaje = (e) => (e.sobrevivientes * 100) + (e.kills * 150) + e.daño; 

 // Salida
    if (Equipos.length === 0) {
    console.log("No hay equipos registrados en la partida.");
}else{
    Equipos.forEach((equipo) => {
    if (calcular_puntuaje(equipo) > calcular_puntuaje(ganador)){
        ganador = equipo;
        console.log(`El equipo ganador es ${ganador.nombre}`)
        }
    })
}