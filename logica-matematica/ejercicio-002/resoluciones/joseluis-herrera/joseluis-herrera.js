const equipos = [
  {
    equipo: "Bob1",
    puntos: 12,
    faltas: 2,
  },
  {
    equipo: "Alpha7",
    puntos: 25,
    faltas: 1,
  },
  {
    equipo: "Shadows",
    puntos: 30,
    faltas: 0, 
  },
  {
    equipo: "Glitch",
    puntos: 5,
    faltas: 6, 
  }
];


equipos.forEach ((equipo) => {
  puntos_total = (equipo.puntos * 2) - equipo.faltas * 3
  
  if(puntos_total >= 40){
    console.log("felicidades los equipos pasan a la semifinal", equipo.equipo)
  }else{
    console.log("los equipos no lograron pasar a la semi final")
  }
})
