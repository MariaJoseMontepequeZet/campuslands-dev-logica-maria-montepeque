# Plantilla de solucion

## Analisis

- Entrada: Recibirá un objeto js con los datos completos de la sesión de tatuaje (cliente con edad, consentimiento, estado y alergias; diseño con tamaño y contenido; zona del cuerpo con restricciones; duración estimada).
- Proceso: Se evaluará cada regla de negocio mediante un ciclo que recorre un array de reglas de diagnóstico. Si una regla no se cumple, se acumula el error correspondiente en un array. Al final, se determina si la sesión es APROBADA o RECHAZADA según la cantidad de errores acumulados.
- Salida: Objeto con el diagnóstico (APROBADA/RECHAZADA), nombre del cliente, detalle, zona, diseño y lista completa de errores diagnosticados (vacía si es APROBADA).

## Reglas identificadas

1. Cliente debe ser mayor de 18 años
2. Si el cliente es menor, requiere consentimiento firmado de un tutor
3. Cliente no puede estar bajo efectos de alcohol o drogas
4. Alergias a tintas deben ser declaradas y requerir prueba previa
5. Zonas restringidas (cara, manos, cuello) requieren autorización especial
6. Tamaño mínimo del diseño: 3 cm
7. Diseño no puede contener material ofensivo
8. Duración máxima de sesión: 6 horas continuas
9. Si falla al menos una regla → RECHAZADA con todos los errores listados
10. Si no hay datos válidos → error de validación

## Pruebas

### Caso normal

Entrada:
``` js
const sesionTatuaje = {
  cliente: {
    nombre: "Laura",
    edad: 17,
    consentimientoFirmado: false,
    bajoEfectos: false,
    alergias: ["ninguna"]
  },
  diseno: {
    descripcion: "Rosa tradicional",
    tamanoCm: 5,
    contenidoOfensivo: false,
    color: true
  },
  zona: {
    nombre: "antebrazo",
    esZonaRestringida: false,
    autorizacionEspecial: false
  },
  duracionEstimadaHoras: 2
};
```

Resultado esperado:
{diagnostico: 'RECHAZADA', cliente: 'Laura', detalle: 'Sesión rechazada con 2 error(es) diagnosticado(s)', zona: 'antebrazo', diseno: 'Rosa tradicional', …}

### Caso borde

Entrada:
``` js
const sesionMenor = {
  cliente: {
    nombre: "Diego",
    edad: 16,
    consentimientoFirmado: false,
    bajoEfectos: false,
    alergias: ["ninguna"]
  },
  diseno: {
    descripcion: "Estrella",
    tamanoCm: 4,
    contenidoOfensivo: false,
    color: false
  },
  zona: {
    nombre: "muñeca",
    esZonaRestringida: false,
    autorizacionEspecial: false
  },
  duracionEstimadaHoras: 1
};
```


Resultado esperado:
{diagnostico: 'RECHAZADA', cliente: 'Diego', detalle: 'Sesión rechazada con 2 error(es) diagnosticado(s)', zona: 'muñeca', diseno: 'Estrella', …}

## Explicacion final
Este sistema permite diagnosticar de forma automática todos los errores de una sesión de tatuaje antes de proceder, aplicando las reglas de seguridad y calidad del estudio.

