    const saltadores = [
    {
    nombre: "Alan", 
    equipo: "Mexico", 
    saltos: 122,
    certificado: true },
    { 
    nombre: "Carlos",
    equipo: "Colombia",
    saltos: 15,
    certificado: false },
    { 
    nombre: "Sofía",
    equipo: "Mexico",
    saltos: 140, 
    certificado: true },
    { 
    nombre: "Lucas",
    equipo: "Argentina", 
    saltos: 45,
    certificado: true },
    {
    nombre: "Elena", 
    equipo: "Mexico",
    saltos: 8,
    certificado: false }
    ];

    function resolverCasosParacaidismo(lista) {

    console.log("\n[Caso 1]: Aptos para Salto Libre Avanzado:");
    lista
    .filter(p => p.saltos >= 100 && p.certificado)
    .forEach(p => console.log(` - ${p.nombre} (${p.equipo}) con ${p.saltos} saltos.`));


    console.log("\n[Caso 2]: Requieren Instructor Obligatorio:");
    lista
    .filter(p => p.saltos < 50 || !p.certificado)
    .forEach(p => console.log(` - ${p.nombre} requiere asistencia en tierra.`));
    }

    resolverCasosParacaidismo(saltadores);