# Ejercicio 030 - Viajes y Turismo

**Camper:** Antonio Canux

## Análisis

- **Entrada:** La función recibe tres parámetros del turista: `haLeidoInstrucciones` (booleano), `traeMascota` (booleano) y `tipoCamara` (cadena de texto: "celular", "profesional", etc.).
- **Proceso:** Se utiliza una secuencia de evaluación condicional estricta. La lectura de instrucciones funciona como un bloqueador de paso; si no se cumple, el resto de los datos no importan. Si avanza, se filtran las prohibiciones (mascotas) y finalmente se evalúan los casos que requieren acciones adicionales (cámaras profesionales).
- **Salida:** Un objeto con un booleano `accesoPermitido` que indica si puede entrar, y una `indicacion` de texto que le da instrucciones claras al personal de turismo sobre qué hacer con ese visitante.

## Reglas identificadas

1. Es obligatorio que el turista confirme haber leído las instrucciones. Si es `false`, el proceso se detiene inmediatamente.
2. Existe una política de cero tolerancia para el ingreso con mascotas debido a la preservación del lugar histórico.
3. El ingreso de cámaras de categoría "profesional" no prohíbe el acceso, pero condiciona al turista a realizar un paso administrativo extra.
4. Si el turista cumple el reglamento, no lleva animales y porta equipo aficionado, ingresa directamente.

## Pruebas

### Caso normal

Entrada: `haLeidoInstrucciones: true`, `traeMascota: false`, `tipoCamara: "celular"`

Resultado esperado: 
```text
accesoPermitido: true
indicacion: "Acceso estándar permitido. Proceda a la sala de espera para el inicio del recorrido guiado."
```

### Caso borde
Entrada: `haLeidoInstrucciones: false, traeMascota: false, tipoCamara: "celular"`

Resultado esperado:

```text
accesoPermitido: false
indicacion: "Proceso detenido: El turista debe leer y aceptar el reglamento interno antes de continuar."
```

## Explicacion final
La solución funciona porque emula el proceso de verificación de un punto de control en la vida real. Al traducir "lectura de instrucciones" a código, el flujo se diseña de manera restrictiva: se empieza asumiendo que el acceso debe ganarse cumpliendo condiciones. Al poner el requisito más básico de primero (leer el reglamento), el código es eficiente y evita procesar lógicas secundarias (como el tipo de cámara que trae el turista) si este ni siquiera ha cumplido con el paso fundamental para iniciar el tour.