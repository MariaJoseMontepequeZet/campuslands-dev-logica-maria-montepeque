const peliculas_cienciaficcion = [
    { titulo: "Interstellar", director: "Christopher Nolan", año: 2014 },
    { titulo: "Blade Runner", director: "Ridley Scott", año: 1982 }
];

let ejecutando_programa = true;

while (ejecutando_programa) {
    console.log("\n=== MENÚ DE PELÍCULAS ===");
    console.log("1. Buscar película");
    console.log("2. Registrar película");
    console.log("3. Salir");

    let opcion = parseInt(prompt("Ingrese una de las siguientes opciones: "));

    switch (opcion) {
        case 1:
            let pelicula = prompt("Ingrese el título de la película que desea buscar: ").toLowerCase();
            let encontrada = false;

            for (let pelicula_buscada of peliculas_cienciaficcion) {
                if (pelicula_buscada.titulo.toLowerCase() === pelicula) {
                    console.log("\n Se encontró la película buscada");
                    console.log(`Título: ${pelicula_buscada.titulo}`);
                    console.log(`Director: ${pelicula_buscada.director}`);
                    console.log(`Año: ${pelicula_buscada.año}\n`);
                    encontrada = true;
                    break;
                }
            }

            if (!encontrada) {
                console.log("\n No se encontró la película buscada.");
                let respuesta = prompt("¿Desea registrar la película? (si/no): ").toLowerCase();

                if (respuesta === "si") {
                    let titulo = prompt("Ingrese el título de la película: ");
                    let director = prompt("Ingrese el director de la película: ");
                    let año = parseInt(prompt("Ingrese el año de la película: "));

                    let nueva_pelicula = {
                        titulo: titulo,
                        director: director,
                        año: año
                    };
                    peliculas_cienciaficcion.push(nueva_pelicula);
                    console.log(` '${titulo}' ha sido registrada con éxito`);
                } else {
                    console.log("Regresando al menú principal.");
                }
            }
            break;

        case 2:
            console.log("\n--- Formulario de Registro ---");
            let titulo = prompt("Ingrese el título de la película: ");
            let director = prompt("Ingrese el director de la película: ");
            let año = parseInt(prompt("Ingrese el año de la película: "));

            let nueva_pelicula = {
                titulo: titulo,
                director: director,
                año: año
            };
            peliculas_cienciaficcion.push(nueva_pelicula);
            console.log(` '${titulo}' ha sido registrada con éxito`);
            break;

        case 3:
            console.log("Saliendo del programa. ¡Buen día!");
            ejecutando_programa = false;
            break;
    }
}