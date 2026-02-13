// Services data for the pediatric clinic
export const services = [
  {
    slug: "control-crecimiento",
    title: "Control de Crecimiento",
    category: "Crecimiento",
    shortDesc: "Evaluación integral del desarrollo psicomotor para asegurar un crecimiento saludable desde el primer mes.",

    fullDesc: "El control de crecimiento y desarrollo es fundamental para monitorear la salud integral de los niños. Nuestro servicio incluye evaluaciones periódicas que permiten detectar oportunamente cualquier alteración en el crecimiento físico, motor, cognitivo o emocional.",
    image: "/images/service-growth.jpg",
    icon: "baby",
    color: "green",
    features: [
      "Evaluación antropométrica completa (peso, talla, perímetro cefálico)",
      "Gráficas de crecimiento percentilares",
      "Evaluación del desarrollo psicomotor",
      "Detección temprana de trastornos del crecimiento",
      "Asesoría nutricional personalizada",
      "Seguimiento de hitos del desarrollo"
    ],
    benefits: [
      "Detección temprana de problemas de crecimiento",
      "Prevención de complicaciones a largo plazo",
      "Tranquilidad para los padres",
      "Plan de cuidado personalizado",
      "Seguimiento continuo del desarrollo"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Inicial",
        desc: "Realizamos una evaluación completa del estado actual del niño, incluyendo medidas antropométricas y evaluación del desarrollo."
      },
      {
        step: 2,
        title: "Análisis de Resultados",
        desc: "Analizamos los resultados comparándolos con las curvas de crecimiento estándar y evaluamos el progreso."
      },
      {
        step: 3,
        title: "Plan de Seguimiento",
        desc: "Establecemos un plan de seguimiento personalizado con fechas de control y recomendaciones específicas."
      },
      {
        step: 4,
        title: "Controles Periódicos",
        desc: "Realizamos controles periódicos para monitorear el progreso y ajustar el plan según sea necesario."
      }
    ],
    faq: [
      {
        question: "¿Con qué frecuencia debe realizarse el control de crecimiento?",
        answer: "Durante el primer año de vida, se recomienda realizar controles mensuales. Entre el año y los 2 años, cada 2-3 meses. Después de los 2 años, controles semestrales o anuales según la indicación médica."
      },
      {
        question: "¿Qué pasa si mi hijo no sigue la curva de crecimiento normal?",
        answer: "Si detectamos desviaciones en la curva de crecimiento, realizamos evaluaciones adicionales para determinar la causa y establecer un plan de tratamiento oportuno."
      },
      {
        question: "¿El control incluye evaluación del desarrollo mental?",
        answer: "Sí, nuestro control integral incluye evaluación del desarrollo cognitivo, motor, del lenguaje y socio-emocional."
      }
    ],
    price: "Desde S/ 80.00",
    duration: "30-45 minutos",
    schedule: "Lunes a Sábado",
    doctor: "Dr. Ricardo Santos"
  },
  {
    slug: "vacunacion-integral",
    title: "Vacunación Integral",
    category: "Vacunación",
    shortDesc: "Disponemos de todos los esquemas de vacunación nacionales e internacionales en un ambiente seguro.",

    fullDesc: "La vacunación es la herramienta más efectiva para prevenir enfermedades infecciosas. Contamos con un completo esquema de vacunación que sigue estrictamente las recomendaciones del Ministerio de Salud y la OMS.",
    image: "/images/service-vaccine.jpg",
    icon: "syringe",
    color: "blue",
    features: [
      "Esquema completo de vacunación nacional",
      "Vacunas internacionales disponibles",
      "Control de carné de vacunación",
      "Recordatorio de próximas dosis",
      "Ambiente seguro y esterilizado",
      "Personal capacitado en administración de vacunas"
    ],
    benefits: [
      "Protección contra enfermedades prevenibles",
      "Inmunidad colectiva para la comunidad",
      "Prevención de complicaciones graves",
      "Certificación internacional disponible",
      "Tranquilidad para toda la familia"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Pre-vacunación",
        desc: "Evaluamos el estado de salud del niño y revisamos el carné de vacunación para determinar las vacunas pendientes."
      },
      {
        step: 2,
        title: "Administración de Vacunas",
        desc: "Aplicamos las vacunas correspondientes siguiendo todos los protocolos de bioseguridad."
      },
      {
        step: 3,
        title: "Observación Post-vacunación",
        desc: "Mantenemos al niño en observación durante 15-30 minutos para detectar cualquier reacción adversa inmediata."
      },
      {
        step: 4,
        title: "Registro y Seguimiento",
        desc: "Actualizamos el carné de vacunación y programamos las próximas dosis correspondientes."
      }
    ],
    faq: [
      {
        question: "¿Las vacunas son seguras?",
        answer: "Sí, todas las vacunas utilizadas están aprobadas por el Ministerio de Salud y la OMS. Los beneficios de la vacunación superan ampliamente los riesgos mínimos de efectos secundarios."
      },
      {
        question: "¿Puedo vacunar a mi hijo si está resfriado?",
        answer: "Las vacunas pueden aplicarse con un resfriado leve sin fiebre. Si el niño tiene fiebre o una enfermedad más grave, se recomienda posponer la vacunación."
      },
      {
        question: "¿Tienen vacunas para viajes internacionales?",
        answer: "Sí, contamos con vacunas internacionales y emitimos certificados de vacunación válidos para viajes al extranjero."
      }
    ],
    price: "Desde S/ 40.00",
    duration: "20-30 minutos",
    schedule: "Lunes a Sábado",
    doctor: "Dra. Elena Martínez"
  },
  {
    slug: "nutricion-infantil",
    title: "Nutrición Infantil",
    category: "Nutrición",
    shortDesc: "Asesoría especializada en lactancia y alimentación complementaria para un desarrollo óptimo.",

    fullDesc: "La nutrición adecuada es fundamental para el crecimiento y desarrollo saludable de los niños. Nuestro servicio de nutrición infantil ofrece asesoría personalizada para cada etapa del desarrollo.",
    image: "/images/service-nutrition.jpg",
    icon: "apple",
    color: "yellow",
    features: [
      "Asesoría en lactancia materna",
      "Introducción de alimentación complementaria",
      "Plan nutricional personalizado",
      "Manejo de alergias alimentarias",
      "Control de peso y talla",
      "Talleres de nutrición para padres"
    ],
    benefits: [
      "Hábitos alimentarios saludables desde temprana edad",
      "Prevención de obesidad infantil",
      "Desarrollo óptimo del niño",
      "Solución de problemas de alimentación",
      "Tranquilidad para los padres"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Nutricional",
        desc: "Realizamos una evaluación completa del estado nutricional, hábitos alimentarios y antecedentes familiares."
      },
      {
        step: 2,
        title: "Plan Alimentario",
        desc: "Diseñamos un plan alimentario personalizado según la edad, necesidades y preferencias del niño."
      },
      {
        step: 3,
        title: "Educación Nutricional",
        desc: "Brindamos educación a los padres sobre hábitos alimentarios saludables y técnicas de alimentación."
      },
      {
        step: 4,
        title: "Seguimiento",
        desc: "Realizamos controles periódicos para evaluar el progreso y ajustar el plan según sea necesario."
      }
    ],
    faq: [
      {
        question: "¿Cuándo debo iniciar la alimentación complementaria?",
        answer: "La OMS recomienda iniciar la alimentación complementaria a los 6 meses de edad, manteniendo la lactancia materna hasta los 2 años o más."
      },
      {
        question: "¿Cómo sé si mi hijo está comiendo lo suficiente?",
        answer: "Durante la consulta evaluamos el crecimiento, el desarrollo y los hábitos alimentarios para determinar si la nutrición es adecuada."
      },
      {
        question: "¿Atienden casos de niños quisquillosos con la comida?",
        answer: "Sí, tenemos experiencia en manejar niños selectivos con la comida y ofrecemos estrategias para ampliar su repertorio alimentario."
      }
    ],
    price: "Desde S/ 100.00",
    duration: "45-60 minutos",
    schedule: "Lunes a Viernes",
    doctor: "Dr. Ricardo Santos"
  },
  {
    slug: "atencion-recien-nacidos",
    title: "Atención de Recién Nacidos",
    category: "Recién Nacidos",
    shortDesc: "Cuidado experto y preventivo diseñado para los primeros y más importantes días de vida de tu bebé.",

    fullDesc: "Los primeros días de vida son cruciales para la adaptación del bebé al mundo exterior. Ofrecemos atención especializada y cuidados preventivos para garantizar el mejor inicio de vida.",
    image: "/images/service-newborn.jpg",
    icon: "heart-pulse",
    color: "pink",
    features: [
      "Evaluación neonatal completa",
      "Tamizaje neonatal",
      "Control del cordón umbilical",
      "Asesoría en lactancia",
      "Control de ictericia",
      "Seguimiento del peso y crecimiento"
    ],
    benefits: [
      "Detección temprana de problemas de salud",
      "Apoyo en la adaptación a la paternidad",
      "Prevención de complicaciones",
      "Tranquilidad para los padres primerizos",
      "Vínculo saludable padres-hijo"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Inicial",
        desc: "Realizamos una evaluación completa del recién nacido incluyendo examen físico, reflejos y tamizajes."
      },
      {
        step: 2,
        title: "Educación a Padres",
        desc: "Brindamos educación sobre cuidados básicos: alimentación, higiene, sueño y señales de alarma."
      },
      {
        step: 3,
        title: "Controles de Seguimiento",
        desc: "Programamos controles frecuentes durante las primeras semanas para monitorear el crecimiento y desarrollo."
      },
      {
        step: 4,
        title: "Apoyo Continuo",
        desc: "Ofrecemos línea de consulta para resolver dudas y apoyo en la lactancia materna."
      }
    ],
    faq: [
      {
        question: "¿Con qué frecuencia debo llevar a mi recién nacido al médico?",
        answer: "Durante el primer mes, se recomienda controles semanales o cada 15 días. Después, según la indicación médica."
      },
      {
        question: "¿Qué incluye el tamizaje neonatal?",
        answer: "El tamizaje incluye pruebas para detectar enfermedades metabólicas, endocrinas y otros trastornos que pueden tratarse si se detectan temprano."
      },
      {
        question: "¿Atienden emergencias con recién nacidos?",
        answer: "Sí, contamos con atención de urgencias especializada para recién nacidos las 24 horas."
      }
    ],
    price: "Desde S/ 120.00",
    duration: "45-60 minutos",
    schedule: "Lunes a Domingo (24h)",
    doctor: "Dra. Elena Martínez"
  },
  {
    slug: "psicologia-infantil",
    title: "Psicología Infantil",
    category: "Psicología",
    shortDesc: "Apoyo profesional enfocado en el bienestar emocional y el desarrollo conductual saludable.",

    fullDesc: "La salud mental infantil es tan importante como la salud física. Nuestro servicio de psicología infantil ofrece evaluación y tratamiento de problemas emocionales, conductuales y del desarrollo.",
    image: "/images/service-psychology.jpg",
    icon: "brain",
    color: "purple",
    features: [
      "Evaluación psicológica integral",
      "Terapia individual infantil",
      "Terapia familiar",
      "Manejo de problemas de conducta",
      "Apoyo en trastornos del desarrollo",
      "Orientación a padres"
    ],
    benefits: [
      "Desarrollo emocional saludable",
      "Mejora en las relaciones familiares",
      "Herramientas para manejar emociones",
      "Detección temprana de dificultades",
      "Mejor calidad de vida para toda la familia"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Inicial",
        desc: "Realizamos una evaluación completa del desarrollo emocional, conductual y social del niño."
      },
      {
        step: 2,
        title: "Diagnóstico",
        desc: "Establecemos un diagnóstico preciso y explicamos a los padres la situación y opciones de tratamiento."
      },
      {
        step: 3,
        title: "Plan de Intervención",
        desc: "Diseñamos un plan de intervención personalizado que puede incluir terapia individual, familiar o orientación parental."
      },
      {
        step: 4,
        title: "Seguimiento Terapéutico",
        desc: "Realizamos sesiones de seguimiento para evaluar el progreso y ajustar el tratamiento según sea necesario."
      }
    ],
    faq: [
      {
        question: "¿Cómo sé si mi hijo necesita ayuda psicológica?",
        answer: "Algunas señales incluyen: cambios persistentes en el comportamiento, dificultades para socializar, regresiones en el desarrollo, o problemas emocionales que afectan el día a día."
      },
      {
        question: "¿A qué edad pueden iniciar la terapia?",
        answer: "La terapia puede iniciarse desde muy temprana edad, incluso en bebés, adaptando las técnicas según la edad y necesidades del niño."
      },
      {
        question: "¿Los padres participan en la terapia?",
        answer: "Sí, la participación de los padres es fundamental. Dependiendo del caso, pueden participar en sesiones familiares o recibir orientación parental."
      }
    ],
    price: "Desde S/ 100.00",
    duration: "50-60 minutos",
    schedule: "Lunes a Sábado",
    doctor: "Dr. Carlos Ruiz"
  },
  {
    slug: "nebulizaciones",
    title: "Nebulizaciones",
    category: "Respiratorio",
    shortDesc: "Equipamiento de última generación para el tratamiento inmediato de cuadros respiratorios y asma.",

    fullDesc: "Contamos con equipos modernos de nebulización para el tratamiento efectivo de problemas respiratorios en niños. Ofrecemos un ambiente cómodo y seguro para las sesiones de nebulización.",
    image: "/images/service-nebulization.jpg",
    icon: "wind",
    color: "teal",
    features: [
      "Equipos de nebulización modernos",
      "Medicamentos de calidad",
      "Ambiente cómodo y seguro",
      "Monitoreo durante la sesión",
      "Personal capacitado",
      "Disponibilidad inmediata"
    ],
    benefits: [
      "Alivio rápido de síntomas respiratorios",
      "Administración efectiva de medicamentos",
      "Ambiente tranquilo para el niño",
      "Atención sin cita previa para urgencias",
      "Seguimiento del tratamiento"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación",
        desc: "Evaluamos el estado respiratorio del niño y determinamos el medicamento y frecuencia adecuados."
      },
      {
        step: 2,
        title: "Preparación",
        desc: "Preparamos el medicamento y el equipo de nebulización, explicando el procedimiento al niño y padres."
      },
      {
        step: 3,
        title: "Nebulización",
        desc: "Realizamos la sesión de nebulización monitoreando constantemente al paciente."
      },
      {
        step: 4,
        title: "Evaluación Post-tratamiento",
        desc: "Evaluamos la respuesta al tratamiento y proporcionamos indicaciones para el cuidado en casa."
      }
    ],
    faq: [
      {
        question: "¿Qué es una nebulización y cuándo se necesita?",
        answer: "La nebulización es un método para administrar medicamentos directamente a los pulmones. Se usa en casos de asma, bronquitis, neumonía y otros problemas respiratorios."
      },
      {
        question: "¿Es doloroso el tratamiento?",
        answer: "No, la nebulización es indolora. El niño solo necesita respirar normalmente mientras recibe el medicamento en forma de vapor."
      },
      {
        question: "¿Cuánto dura una sesión de nebulización?",
        answer: "Cada sesión dura aproximadamente 10-15 minutos, dependiendo del medicamento y la condición del paciente."
      }
    ],
    price: "Desde S/ 30.00",
    duration: "15-20 minutos",
    schedule: "Lunes a Domingo (24h)",
    doctor: "Dr. Ricardo Santos"
  }
];

// Helper function to get a service by slug
export function getServiceBySlug(slug) {
  return services.find(service => service.slug === slug);
}

// Helper function to get all service slugs for static paths
export function getAllServiceSlugs() {
  return services.map(service => service.slug);
}

// Helper function to get related services
export function getRelatedServices(currentSlug, count = 3) {
  const currentService = getServiceBySlug(currentSlug);
  if (!currentService) return [];
  
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, count);
}

// Get services by color category
export function getServicesByColor(color) {
  return services.filter(service => service.color === color);
}

