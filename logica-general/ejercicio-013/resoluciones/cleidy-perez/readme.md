# Lógica general 013 - resolución de casos

## Análisis

**Entrada:**

* Un arreglo con los participantes de paracaidismo que contiene su nombre, edad, peso y si tienen certificado médico.

**Proceso:**

* Recorrer la lista de participantes.
* Verificar que cada uno cumpla con las reglas para realizar el salto.
* Contar cuántos participantes fueron aprobados.

**Salida:**

* Mostrar si cada participante puede o no realizar el salto.
* Mostrar el total de participantes aprobados.

## Reglas identificadas

* Si no hay participantes, mostrar un mensaje.
* El participante debe tener **18 años o más**.
* El participante debe pesar **90 kg o menos**.
* Debe contar con **certificado médico**.
* Si cumple todas las condiciones, puede realizar el salto.

## Pruebas

### Caso normal

**Entrada:**

* Juan: 22 años, 75 kg, certificado médico.
* María: 17 años, 60 kg, certificado médico.
* Carlos: 30 años, 95 kg, sin certificado médico.
* Ana: 25 años, 68 kg, certificado médico.

**Resultado esperado:**

* Juan y Ana pueden realizar el salto.
* María y Carlos no pueden realizar el salto.
* Total de aprobados: 2.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay participantes registrados."

## Explicación final

La solución funciona porque recorre todos los participantes, verifica que cada uno cumpla las reglas establecidas y cuenta cuántos fueron aprobados. Al finalizar, muestra el resultado de cada participante y el total de personas que pueden realizar el salto.
