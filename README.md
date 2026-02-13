# 🏥 Clínica Pediátrica - Sitio Web Oficial

Sitio web de la **Clínica Pediátrica** especializada en la salud y bienestar de niños en Ayacucho, Perú.

## 📋 Descripción

Página web moderna construida con **Astro** y **Tailwind CSS**, diseñada para informar y educar a los padres sobre los servicios de salud pediátrica disponibles en la región de Ayacucho.

Características principales:
- Información detallada sobre servicios de la clínica
- Presentación del equipo médico especializado
- Datos de contacto y ubicación con Google Maps
- Agendamiento de citas vía WhatsApp
- Blog con artículos de interés sobre salud infantil
- Información corporativa y historia de la clínica
- Sección de equipo médico

## 🚀 Tecnologías

- **Astro 5.17.1** - Framework web moderno de alto rendimiento
- **Tailwind CSS 4.1.18** - Framework de estilos responsivos
- **@astrojs/sitemap 3.7.0** - Generación automática de sitemap

## 📱 Funcionalidades

✅ Sitio completamente responsivo (móvil, tablet, desktop)  
✅ Integración con WhatsApp para agendamiento de citas  
✅ Mapa de ubicación interactivo (Google Maps)  
✅ SEO optimizado con meta tags y Open Graph  
✅ Emergencias disponibles 24/7  
✅ Blog con artículos y categorías  
✅ Animaciones de entrada suaves  
✅ Menú móvil interactivo  
✅ Accesibilidad (skip links, aria labels)  
✅ Integración con Lucide Icons  

## 🚀 Comandos Principales

| Comando          | Acción                                  |
|:-----------------|:----------------------------------------|
| `npm install`    | Instala las dependencias del proyecto  |
| `npm run dev`    | Inicia el servidor de desarrollo en localhost:4321 |
| `npm run build`  | Compila el proyecto para producción    |
| `npm run preview`| Vista previa del build de producción  |
| `npm run astro`  | Ejecuta comandos de Astro CLI          |

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables de Astro
│   ├── Header.astro      # Navegación principal con menú móvil
│   ├── Footer.astro     # Pie de página con información de contacto
│   ├── Hero.astro       # Sección hero de la página de inicio
│   ├── Welcome.astro    # Componente de bienvenida
│   └── prubas.astro     # Componente de pruebas
├── data/                # Datos centralizados del sitio
│   ├── siteConfig.js    # Configuración global (contacto, redes, SEO)
│   ├── services.js      # Datos de los servicios médicos
│   └── blogPosts.js     # Artículos del blog
├── layouts/             # Layouts principales
│   └── Layout.astro     # Layout base con meta tags
├── pages/               # Páginas del sitio
│   ├── index.astro           # Página de inicio
│   ├── nosotros.astro       # Página sobre nosotros
│   ├── servicios.astro      # Lista de servicios
│   ├── servicios/
│   │   └── [slug].astro     # Página de detalle de servicio
│   ├── equipo.astro         # Equipo médico
│   ├── blogs.astro          # Lista de artículos del blog
│   ├── blog/
│   │   └── [slug].astro     # Página de detalle de artículo
│   └── contacto.astro       # Página de contacto
├── styles/              # Estilos globales
│   ├── global.css       # Estilos globales y utilidades
│   └── index.css        # Estilos principales
├── assets/              # Recursos estáticos (imágenes, SVGs)
└── js/                  # Scripts de JavaScript
```

## 🏥 Servicios Médicos (6 servicios disponibles)

La clínica ofrece los siguientes servicios especializados:

1. **Control de Crecimiento** - Evaluaciones integrales del desarrollo psicomotor
2. **Vacunación Integral** - Esquemas de vacunación nacionales e internacionales
3. **Nutrición Infantil** - Asesoría en lactancia y alimentación complementaria
4. **Atención de Recién Nacidos** - Cuidado experto para los primeros días de vida
5. **Psicología Infantil** - Apoyo emocional y desarrollo conductual
6. **Nebulizaciones** - Tratamiento de cuadros respiratorios

Cada servicio incluye:
- Descripción completa
- Características y beneficios
- Proceso de atención
- Preguntas frecuentes (FAQ)
- Información de precio y duración
- Profesional asignado

## 📝 Blog (7 artículos disponibles)

Artículos publicados sobre salud infantil:

1. La Importancia de la Vacunación Infantil
2. Guía de Alimentación Complementaria
3. Hitos del Desarrollo Psicomotor
4. Cuidados Esenciales del Recién Nacido
5. Salud Emocional en la Infancia
6. Prevención de Infecciones Respiratorias
7. Guía Completa sobre Alergias en Niños

Categorías: Vacunación, Nutrición, Desarrollo, Recién Nacidos, Psicología, Respiratorio, Alergias

## 🧭 Navegación del Sitio

| Página           | Ruta              | Descripción                    |
|:-----------------|:------------------|:-------------------------------|
| Inicio           | `/`               | Página principal              |
| Nosotros         | `/nosotros`       | Información de la clínica     |
| Servicios        | `/servicios`      | Lista de servicios médicos    |
| Detalle Servicio | `/servicios/[slug]`| Página de servicio específico|
| Equipo           | `/equipo`         | Equipo médico                 |
| Blogs            | `/blogs`          | Artículos de interés          |
| Detalle Blog     | `/blog/[slug]`    | Artículo específico           |
| Contacto         | `/contacto`       | Información de contacto       |

## 📞 Información de Contacto

- **WhatsApp**: +51 900 000 000
- **Teléfono**: (066) 234 567
- **Email**: informes@clinicapediatrica.com
- **Dirección**: Av. Arenales 123, San Juan Bautista, Huamanga, Ayacucho
- **Google Maps**: https://maps.app.goo.gl/3wAAb2H3X8Y2H7r79

## ⏰ Horarios de Atención

- **Lunes a Viernes**: 08:00 AM - 08:00 PM
- **Sábados**: 09:00 AM - 02:00 PM
- **Domingos**: Cerrado
- **Emergencias**: 24 Horas

## 🌐 Redes Sociales

- Facebook: https://facebook.com/clinica
- Instagram: https://instagram.com/clinica
- TikTok: https://tiktok.com/@clinica
- LinkedIn: https://linkedin.com/company/clinica

## 🔧 Contribuir

1. Clonar el repositorio
2. Ejecutar `npm install` para instalar dependencias
3. Crear una rama para nuevas funcionalidades (`git checkout -b feature/nueva-funcionalidad`)
4. Hacer commit de los cambios
5. Enviar pull request

## 📝 Notas de Desarrollo

### Animaciones de Entrada

El sitio utiliza clases de animación CSS personalizadas que se activan mediante Intersection Observer:

- `.reveal` - Animación de aparición desde abajo
- `.reveal-left` - Animación desde la izquierda
- `.reveal-right` - Animación desde la derecha
- `.reveal-scale` - Animación de escala

### Rutas Dinámicas

- **Blog**: `/blogs` lista artículos, `/blog/[slug]` muestra detalle
- **Servicios**: `/servicios` lista servicios, `/servicios/[slug]` muestra detalle

### Accesibilidad

El sitio incluye:
- Skip links para navegación por teclado
- Labels ARIA en elementos interactivos
- Contraste de colores adecuado
- Navegación por teclado completa

### Integraciones

- **Lucide Icons**: Iconos vectoriales
- **Google Maps**: Embed de ubicación
- **WhatsApp**: Enlaces para agendamiento directo

**Última actualización**: 8 de febrero de 2026
