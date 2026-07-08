# Plantilla de solucion

## Analisis

- Entrada: Recibirá un objeto js con los datos completos de la obra digital (título, autor, información del archivo con formato, tamaño, resolución, dimensiones, modo de color y capas, y tipo de uso: web o impresión).
- Proceso: Se evaluará cada regla de negocio mediante un ciclo que recorre un array de reglas de validación. Si una regla no se cumple, se acumula el ajuste requerido en un array. Al final, se determina si la obra está LISTA PARA PUBLICAR o REQUIERE AJUSTES según la cantidad de problemas encontrados.
- Salida: Objeto con el estado (LISTA PARA PUBLICAR/REQUIERE AJUSTES), título, autor, tipo de uso, detalle y lista completa de ajustes requeridos (vacía si está lista).

## Reglas identificadas

1. Resolución mínima: 300 DPI para impresión, 72 DPI para web
2. Dimensiones mínimas: 1000x1000 píxeles
3. Modo de color: RGB para web, CMYK para impresión
4. Tamaño máximo de archivo: 50 MB
5. Formatos aceptados: PNG, JPG, JPEG, PSD, AI, SVG
6. Debe tener al menos 1 capa (no puede estar completamente aplanado)
7. Nombre de archivo: sin caracteres especiales, máximo 50 caracteres
8. Metadatos obligatorios: título y autor
9. Tipo de uso válido: "web" o "impresion"
10. Si falla al menos una regla → REQUIERE AJUSTES con todos los problemas listados
11. Si no hay datos válidos → error de validación

## Pruebas

### Caso normal

Entrada:
``` js
const obraDigital = {
  titulo: "Atardecer en el bosque",
  autor: "María García",
  archivo: {
    nombre: "atardecer_bosque.png",
    formato: "PNG",
    tamanoMB: 12.5,
    resolucionDPI: 300,
    anchoPx: 2000,
    altoPx: 1500,
    modoColor: "RGB",
    capas: 5
  },
  tipoUso: "web"
};
```


Resultado esperado:
{estado: 'LISTA PARA PUBLICAR', titulo: 'Atardecer en el bosque', autor: 'María García', tipoUso: 'web', detalle: '"Atardecer en el bosque" cumple todos los requisitos técnicos', …}

### Caso borde

Entrada:
``` js
const obraImpresion = {
  titulo: "Retrato abstracto",
  autor: "Carlos López",
  archivo: {
    nombre: "retrato_abstracto.jpg",
    formato: "JPG",
    tamanoMB: 8.2,
    resolucionDPI: 150,
    anchoPx: 1200,
    altoPx: 1800,
    modoColor: "RGB",
    capas: 1
  },
  tipoUso: "impresion"
};
```

Resultado esperado:
{estado: 'REQUIERE AJUSTES', titulo: 'Retrato abstracto', autor: 'Carlos López', tipoUso: 'impresion', detalle: '"Retrato abstracto" requiere 2 ajuste(s)', …

## Explicacion final
Este sistema permite validar de forma automática si una obra de arte digital cumple con todos los requisitos técnicos para ser publicada en una plataforma de venta, aplicando reglas de negocio específicas según el tipo de uso (web o impresión).