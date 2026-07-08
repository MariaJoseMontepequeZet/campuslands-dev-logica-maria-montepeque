# 1. IDENTIFICAR ENTRADAS (Inputs)

print("=== SISTEMA DE AUDITORIA Y DIAGNOSTIVO: ESTUDIO DE TATUAJES ===")

# Capturamos la informacion critica de la sesion y el perfil del cliente
nombre_cliente = input("Nombre del cliente: ").strip()
edad_cliente = int(input("Edad del cliente: "))
tiene_autorizacion = input("Cuenta con autorizacion firmada de tutores (Si/No): ").strip().capitalize()
tipo_tinta = input ("Tipo de tinta a utilizar (Negra / Color / UV):").strip().capitalize()
alergico_mentales = input(" El cliente padece alergia a metales/ niquel (Si/No): ").strip().capitalize()

# 2. PROCESAMIENTO (Algoritmico de Diganostico de errores)

# Definimos las banderas logicas de error mediante variables booleanas claras 
error_minoridad_critico = (edad_cliente < 18 and tiene_autorizacion == "No")
error_restriccion_salud = (tipo_tinta == "Color" and alergico_mentales == "Si")

# Motor condicional jerarquico para el aislamiento de anonmalias en la orden 
if error_minoridad_critico and error_restriccion_salud:
    estado_auditoria = "DIGANOSTICO: BLOQUEO CRITICO MULTIPLE"
    detalles_error = "Infraccion legal y medica simultanea: el cliente es menor de edad no autorizado y corre riesgo de choque alergico por el pigmento de color."
    permite_sesion = False

elif error_minoridad_critico:
    estado_auditoria = "DIAGNOSTICO: RECHAZADO POR REQUISITO LEGAL"
    detalles_error = f"No se puede agendar la sesion para {nombre_cliente}. Ley de proteccion al menor activa: Falta la firma de los padres o tutores legales."
    permite_sesion = False

elif error_restriccion_salud:
    estado_auditoria = "DIAGNOSTICO: ADVERTENCIA MEDICA DE MATERIALES"
    detalles_error = "Alerta de salud: Las tintas de color contienen trazas metalicas altas. Se sugiere cambiar el diseno a Tinta Negra pura para evitar reacciones cutaneas."
    permite_sesion = True

else:
    # Caso ideal: No se encendio ninguna bandera de error o advertencia
    estado_auditoria = "DIAGNOSTIVO: ORDEN VERIFICADA CON EXITO"
    detalles_error = "Todos los parametros legales, sanitarios y de insumos son consistentes. El procedimiento puede iniciar."
    permite_sesion = True

# 3. ENTREGAR RESULTADO VERIFICABLE (Output)

print("\n-----------------------------------------")
print("=== REPORTE FINAL DEL CONTROL DE CALIDAD ===")
print(f"Cliente Evaluado:    {nombre_cliente}")
print(f"Estado de Auditoría: {estado_auditoria}")
print(f"Detalles Técnicos:   {detalles_error}")
print(f"¿Iniciar Procedimiento?: {'SÍ, PROCEDER CON SEGURIDAD' if permite_sesion else 'NO, SESIÓN CANCELADA'}")
print("-----------------------------------------")
