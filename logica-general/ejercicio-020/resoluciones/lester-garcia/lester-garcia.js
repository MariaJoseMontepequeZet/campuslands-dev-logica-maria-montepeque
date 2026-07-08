const menu = [
    { nombre: "Hamburguesa", disponible: false, precio: 35 },
    { nombre: "Taco", disponible: true, precio: 20 },
    { nombre: "Hot Dog", disponible: true, precio: 18 }
];

let seleccion = "";
let motivo = "";

for (let i = 0; i < menu.length; i++) {
    if (menu[i].disponible) {
        seleccion = menu[i].nombre;
        motivo = "Es la primera opción disponible del menú.";
        break;
    }
}

if (seleccion === "") {
    seleccion = "Sin disponibilidad";
    motivo = "No hay alimentos disponibles en el menú.";
}

console.log("seleccion:", seleccion);
console.log("motivo:", motivo);x