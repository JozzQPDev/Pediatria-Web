// Services data for the pediatric clinic - Updated with Modern Medical Style
export const services = [
  {
    slug: "control-crecimiento",
    title: "Crecimiento y Desarrollo (CRED)",
    category: "Pediatría Preventiva",
    shortDesc: "Monitoreo científico del potencial físico y neurocognitivo de tu hijo.",
    fullDesc: "Más que un chequeo de rutina, es una evaluación integral basada en estándares internacionales. Supervisamos el carril de crecimiento, hitos motores y el desarrollo del lenguaje para asegurar que tu pequeño alcance su máximo potencial.",
    image: "/images/service-growth.jpg",
    icon: "fa-solid fa-baby", // Font Awesome 6
    color: "green",
    features: [
      "Evaluación antropométrica con software de precisión",
      "Seguimiento de hitos del desarrollo neurosensorial",
      "Detección de anemia y deficiencias nutricionales",
      "Evaluación del desarrollo psicomotor (EEDP/TEPSI)",
      "Asesoría en crianza respetuosa y vínculos",
      "Tamizaje de agudeza visual y auditiva"
    ],
    benefits: [
      "Intervención temprana en trastornos del desarrollo",
      "Optimización del carril de crecimiento genético",
      "Guía experta para cada etapa de la infancia",
      "Prevención de enfermedades crónicas infantiles",
      "Soporte emocional para los padres"
    ],
    process: [
      {
        step: 1,
        title: "Screening Inicial",
        desc: "Medición exacta de peso, talla y perímetros con equipos calibrados."
      },
      {
        step: 2,
        title: "Mapeo del Desarrollo",
        desc: "Evaluación de habilidades motoras, sociales y del lenguaje según la edad."
      },
      {
        step: 3,
        title: "Consulta Médica",
        desc: "Examen físico detallado y revisión de sistemas por la especialista."
      },
      {
        step: 4,
        title: "Hoja de Ruta",
        desc: "Entrega de informe de progreso y recomendaciones nutricionales."
      }
    ],
    faq: [
      {
        question: "¿Por qué es importante el control si mi hijo se ve sano?",
        answer: "Muchos desafíos del desarrollo no son visibles a simple vista. El CRED permite detectar sutiles desviaciones antes de que se conviertan en problemas mayores."
      },
      {
        question: "¿Qué debo llevar a la cita de CRED?",
        answer: "Es fundamental traer el carné de vacunación, el historial de alimentación reciente y anotar cualquier duda sobre el sueño o comportamiento que hayas notado."
      },
      {
        question: "¿Con qué frecuencia debe acudir mi hijo?",
        answer: "En el primer año es mensual. A partir del segundo año las citas se espacian según las recomendaciones de la Dra. Amalia para monitorear hitos específicos."
      }
    ],
    price: "S/ 80.00",
    duration: "40 min",
    schedule: "Lun - Sáb",
    doctor: "Dra. Amalia Luque"
  },
  {
    slug: "vacunacion-integral",
    title: "Inmunización Inteligente",
    category: "Protección",
    shortDesc: "Esquemas de vacunación de alta calidad con protocolos de mínimo dolor.",
    fullDesc: "Protección avanzada con vacunas de última generación. Manejamos tanto el esquema nacional (MINSA) como vacunas complementarias internacionales, garantizando la cadena de frío y una aplicación humanizada.",
    image: "/images/service-vaccine.jpg",
    icon: "fa-solid fa-syringe",
    color: "blue",
    features: [
      "Vacunas acelulares (menor riesgo de fiebre)",
      "Esquema nacional e internacional completo",
      "Recordatorios automáticos de próximas dosis",
      "Técnicas de distracción para reducir el estrés",
      "Certificación digital de vacunas",
      "Stock permanente de vacunas especiales"
    ],
    benefits: [
      "Máxima eficacia inmunológica",
      "Protocolos de bioseguridad rigurosos",
      "Ambiente diseñado para reducir el miedo",
      "Prevención de enfermedades graves y brotes",
      "Asesoría post-vacunal inmediata"
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
    price: "Variable",
    duration: "20 min",
    schedule: "Lun - Sáb",
    doctor: "Lic. Especialista"
  },
  {
    slug: "nutricion-infantil",
    title: "Nutrición e Inmunonutrición",
    category: "Bienestar",
    shortDesc: "Alimentación basada en ciencia para fortalecer el sistema inmune.",
    fullDesc: "Transformamos la alimentación en medicina preventiva. Especialistas en Lactancia, Baby Led Weaning (BLW) y manejo de selectividad alimentaria, enfocándonos en la microbiota y salud digestiva.",
    image: "/images/service-nutrition.jpg",
    icon: "fa-solid fa-apple-whole",
    color: "yellow",
    features: [
      "Asesoría certificada en lactancia materna",
      "Talleres de alimentación complementaria (BLW/Papillas)",
      "Tratamiento de anemia y desnutrición",
      "Protocolos para alergias alimentarias (APLV)",
      "Análisis de composición corporal",
      "Suplementación nutricional personalizada"
    ],
    benefits: [
      "Fortalecimiento del sistema inmunológico",
      "Relación saludable con la comida desde el inicio",
      "Prevención de obesidad y diabetes futura",
      "Mejora en el rendimiento escolar y energía",
      "Menos enfermedades digestivas"
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
    price: "S/ 100.00",
    duration: "60 min",
    schedule: "Lun - Vie",
    doctor: "Nutricionista Pediátrica"
  },
  {
    slug: "atencion-recien-nacidos",
    title: "Neonatología Especializada",
    category: "Recién Nacidos",
    shortDesc: "Cuidado experto para los momentos más frágiles y hermosos.",
    fullDesc: "Acompañamos el aterrizaje de tu bebé al mundo. Expertos en los desafíos del primer mes: desde el cuidado del cordón hasta la detección temprana de patologías neonatales con enfoque en medicina regenerativa.",
    image: "/images/service-newborn.jpg",
    icon: "fa-solid fa-heart-pulse",
    color: "pink",
    features: [
      "Tamizaje metabólico y cardiológico",
      "Manejo avanzado de ictericia neonatal",
      "Evaluación de frenillo lingual (lactancia)",
      "Cuidado del cordón umbilical",
      "Neurodesarrollo del prematuro",
      "Soporte 24/7 para emergencias neonatales"
    ],
    benefits: [
      "Detección precoz de cardiopatías",
      "Éxito garantizado en la lactancia",
      "Reducción de reingresos hospitalarios",
      "Tranquilidad absoluta para padres primerizos",
      "Crecimiento estable desde la semana 1"
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
    price: "S/ 120.00",
    duration: "50 min",
    schedule: "Lun - Dom",
    doctor: "Dra. Amalia Luque"
  },
  {
    slug: "psicologia-infantil",
    title: "Psicología y Neurodesarrollo",
    category: "Salud Mental",
    shortDesc: "Equilibrio emocional y cognitivo para niños felices y resilientes.",
    fullDesc: "Abordamos el mundo emocional de los niños con terapias basadas en el juego y la evidencia. Especialistas en neurodiversidad, manejo de ansiedad infantil y pautas de crianza efectiva.",
    image: "/images/service-psychology.jpg",
    icon: "fa-solid fa-brain",
    color: "purple",
    features: [
      "Evaluación de Coeficiente Intelectual y Madurez",
      "Detección de TDAH y espectro autista (TEA)",
      "Terapia para ansiedad y miedos infantiles",
      "Modificación de conducta con disciplina positiva",
      "Orientación vocacional y apoyo escolar",
      "Talleres de habilidades sociales"
    ],
    benefits: [
      "Mejora en la armonía familiar",
      "Autoestima sólida en el niño",
      "Mejor rendimiento y adaptación escolar",
      "Herramientas de regulación emocional",
      "Detección temprana de rezagos cognitivos"
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
    price: "S/ 100.00",
    duration: "50 min",
    schedule: "Lun - Sáb",
    doctor: "Psicólogo Pediátrico"
  },
  {
    slug: "nebulizaciones",
    title: "Terapia Respiratoria",
    category: "Urgencias",
    shortDesc: "Alivio inmediato para crisis respiratorias con tecnología ultrasónica.",
    fullDesc: "Atención rápida para cuadros de asma, bronquitis y laringitis. Contamos con equipos de alta eficiencia que reducen el tiempo de tratamiento y mejoran la absorción del medicamento.",
    image: "/images/service-nebulization.jpg",
    icon: "fa-solid fa-wind",
    color: "teal",
    features: [
      "Nebulizadores ultrasónicos y tipo mesh",
      "Oxigenoterapia de flujo controlado",
      "Aspiración de secreciones si es necesario",
      "Monitoreo de saturación de oxígeno",
      "Personal experto en manejo de crisis",
      "Ambiente lúdico para evitar ansiedad"
    ],
    benefits: [
      "Resolución rápida de la dificultad respiratoria",
      "Evita traslados innecesarios a emergencias",
      "Instrucción clara en uso de inhaladores",
      "Seguimiento médico post-crisis",
      "Atención preferencial inmediata"
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
    price: "S/ 40.00",
    duration: "20 min",
    schedule: "24/7 Urgencias",
    doctor: "Staff Médico"
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

