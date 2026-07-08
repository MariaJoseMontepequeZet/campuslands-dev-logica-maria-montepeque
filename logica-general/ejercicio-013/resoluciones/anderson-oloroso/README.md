# Plantilla de solucion

## Analisis

- Entrada: Recibirá un objeto js con los datos del saltador (nombre, edad, peso, certificación médica, curso básico completado, velocidad del viento).
- Proceso: Se evaluará cada requisito de seguridad mediante un ciclo que recorre un array de reglas. Si un requisito no se cumple, se acumula el motivo de rechazo en un array. Al final, se determina si el saltador está APTO o NO APTO según la cantidad de motivos acumulados.
- Salida: Objeto con el resultado (APTO/NO APTO), nombre del saltador, detalle del resultado y lista de motivos de rechazo (vacía si es APTO).

## Reglas identificadas

1. Edad mínima requerida: 18 años
2. Peso permitido: entre 40 kg y 110 kg (inclusive)
3. Certificación médica obligatoria
4. Curso básico de paracaidismo obligatorio
5. Velocidad del viento debe ser menor a 30 km/h
6. Si falla al menos un requisito → NO APTO
7. Si falla varios requisitos → NO APTO con todos los motivos listados
8. Si no hay datos válidos → error de validación

## Pruebas

### Caso normal

Entrada:
``` js
const saltador = {
  nombre: "Carlos",
  edad: 25,
  peso: 75,
  certificacionMedica: true,
  cursoBasico: true,
  velocidadViento: 15
};

```

Resultado esperado:
{resultado: 'APTO', nombre: 'Carlos', detalle: 'Carlos cumple todos los requisitos de seguridad', motivosRechazo: Array(0)}

### Caso borde

Entrada:
``` js
const saltadorNoApto = {
  nombre: "Luis",
  edad: 30,
  peso: 120,
  certificacionMedica: false,
  cursoBasico: true,
  velocidadViento: 35
};
```

Resultado esperado:
{resultado: 'NO APTO', nombre: 'Luis', detalle: 'Luis no cumple con 3 requisito(s)', motivosRechazo: Array(3)}

## Explicacion final

La aplicacion funciona recibiendo un objeto con datos del paracaidista y en la misma, se definen una serie de reglas en las cuales valida que los datos del objeto sean correctas y si todo cumple entonces si es apto para el paracaidismo