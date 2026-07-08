    const alumnos = [
    {
    nombre:"Juan",
    edad: 15,
    inscripcion: "aprobado"
    },
    {
    nombre: "María",
    edad: 17,
    inscripcion: "pendiente"
    },
    {
    nombre: "Carlos",
    edad: 16,
    inscripcion: "aprobado"
    },
    {
    nombre: "Ana",
    edad: 14,
    inscripcion: "rechazado"
    }
    ];

    alumnos.sort(function(a,b) {
    if(a.inscripcion === "aprobado" && b.inscripcion !== "aprobado"){
        return -1;
    }
    
    if(a.inscripcion !== "aprobado" && b.inscripcion === "aprobado"){
        return 1;
    }
    return 0; 
    })

    for (let alumno of alumnos){
    if (alumno.inscripcion === "aprobado") {
            console.log(`Felicidades los aprobados son ${alumno.nombre}`);
        } else if (alumno.inscripcion === "pendiente") {
            console.log(`Los que estan pendientes de ver la solicitud son ${alumno.nombre}`);
        } else if (alumno.inscripcion === "rechazado"){
        console.log(`Los que estan rechazados la solicitud son ${alumno.nombre}`)
        }
    }
    



