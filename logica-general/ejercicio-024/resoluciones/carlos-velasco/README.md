# Logica general 024 - filtros por condiciones

## Sistema de Categorización de Inventario

Este script procesa un inventario de motocicletas para asignarles una categoría comercial basada en su potencia (cilindraje), estado físico y precio de venta. Es una herramienta diseñada para organizar catálogos de ventas de manera automática.

* **Descripción del proceso:**
* **Iteración**: Recorre cada objeto dentro del arreglo de motocicletas utilizando `.map()`.
* **Lógica de categorización**:
* **Alta Gama**: Motos con cilindraje mayor a 600cc.
* **Económica**: Motos con cilindraje menor o igual a 200cc y precio menor a 5000.
* **Oportunidad**: Motos usadas con precio menor a 3000.
* **Estándar**: Categoría por defecto si no se cumplen los criterios anteriores.


* **Inmutabilidad**: Retorna un nuevo objeto combinando la información original con la nueva propiedad `categoria`.


* **Tecnologías:**
* JavaScript (método de array `.map()` y condicionales).

---

### Explicación técnica

1. **Programación Funcional**: El uso de `.map()` y el *spread operator* (`...moto`) asegura que no mutemos el arreglo original `stock`. Esto es una práctica crítica en aplicaciones modernas para prevenir errores de estado global.
2. **Jerarquía de Categorías**: Las condiciones están estructuradas para que la categoría de "Alta Gama" tome prioridad. Si una moto tuviera un cilindraje de 700cc pero fuera muy barata, se marcaría como Alta Gama primero, lo cual es correcto según la lógica de negocio implementada.
3. **Extensibilidad**: El código es fácilmente escalable; si se decidiera añadir una categoría de "Colección" (basada en el año de fabricación, por ejemplo), bastaría con añadir un bloque `else if` adicional.

### Lógica del Código

```javascript
const filtrarInventario = (inventario) => {
    return inventario.map(moto => {
        let categoria = "Estándar";
        
        // Prioridad de categorización
        if (moto.cilindraje > 600) {
            categoria = "Alta Gama";
        } else if (moto.cilindraje <= 200 && moto.precio < 5000) {
            categoria = "Económica";
        } else if (moto.estado === "usada" && moto.precio < 3000) {
            categoria = "Oportunidad";
        }
        
        // Retorna un nuevo objeto con la categoría añadida
        return { ...moto, categoria };
    });
};

```

### Salida Esperada

```text
[
  { marca: 'Yamaha', cilindraje: 700, estado: 'nueva', precio: 12000, categoria: 'Alta Gama' },
  { marca: 'Honda', cilindraje: 150, estado: 'nueva', precio: 2500, categoria: 'Económica' },
  { marca: 'Suzuki', cilindraje: 250, estado: 'usada', precio: 2000, categoria: 'Oportunidad' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-024/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco