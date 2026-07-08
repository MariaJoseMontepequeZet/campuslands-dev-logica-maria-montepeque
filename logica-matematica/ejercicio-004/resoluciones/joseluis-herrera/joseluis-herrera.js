    const inventarioMotos = [
    { modelo: "Honda Wave 110", precio: 1500 },
    { modelo: "Yamaha FZ25", precio: 3800 },
    { modelo: "Suzuki Gixxer SF 250", precio: 4200 },
    { modelo: "Kawasaki Ninja 400", precio: 6500 },
    { modelo: "Benelli TNT 15", precio: 1900 }
    ];

    let motoMasCara = inventarioMotos[0] || null;
    let baja = 0, media = 0, alta = 0;

    for (let i = 0; i < inventarioMotos.length; i++) {
    let moto = inventarioMotos[i];

    if (moto.precio > motoMasCara.precio) {
    motoMasCara = moto;
    }

    if (moto.precio < 2000) baja++;
    else if (moto.precio <= 5000) media++;
    else alta++;
    }

    console.log("Moto más cara:", motoMasCara ? motoMasCara.modelo : "Ninguna");
    console.log(`Rangos -> Baja: ${baja}, Media: ${media}, Alta: ${alta}`);