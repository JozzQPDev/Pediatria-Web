# Plan de Implementación: Secciones Equipo Médico y FAQ

## Información Recopilada:
- **index.astro**: Página principal con Hero, Servicios, Infraestructura, Testimonios, Galería y CTA
- **equipo.astro**: Contiene array de doctores con fotos, nombres, especialidades
- **services.js**: Contiene datos FAQ dentro de cada servicio

## Plan de Implementación:

### 1. Sección Equipo Médico
- **Ubicación**: Después de la sección de Infraestructura, antes de Testimonios
- **Datos**: Reutilizar estructura de doctores de equipo.astro
- **Diseño**: Grid de tarjetas con:
  - Foto del doctor
  - Nombre
  - Especialidad
  - Estilo consistente con el resto de la página

### 2. Sección Preguntas Frecuentes (FAQ)
- **Ubicación**: Después de Testimonios, antes de Galería
- **Datos**: Crear array de FAQs generales de la clínica
- **Diseño**: Acordeón interactivo con preguntas y respuestas

## Archivos a Editar:
- `src/pages/index.astro` - Agregar las dos nuevas secciones

## Pasos:
1. Agregar array de doctores (reutilizable desde equipo.astro)
2. Agregar array de FAQs
3. Insertar Sección Equipo Médico
4. Insertar Sección FAQ

