const analizarPotencia = (inventario) => {

    if (inventario.length === 0) return "Inventario vacío.";



    const maxCilindraje = Math.max(...inventario.map(m => m.cilindraje));



    return inventario.map(moto => {

        const indice = (moto.cilindraje / maxCilindraje) * 100;

        let clasificacion = "";

        

        if (indice === 100) clasificacion = "Líder de potencia";

        else if (indice >= 70) clasificacion = "Alta competitividad";

        else clasificacion = "Uso urbano";

        

        return { nombre: moto.nombre, indice: indice.toFixed(1) + "%", clasificacion };

    });

};



const stock = [

    { nombre: "Deportiva X", cilindraje: 1000 },

    { nombre: "Turismo Y", cilindraje: 800 },

    { nombre: "Scooter Z", cilindraje: 150 }

];

console.log(analizarPotencia(stock));