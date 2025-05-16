export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  icon: string;
  href: string;
  cta: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Limpieza Básica",
    category: "basic",
    description: "Limpieza regular para mantener tu hogar impecable.",
    detailedDescription:
      "¿Necesita una limpieza básica profesional en Londres? Nuestro servicio regular mantendrá su hogar reluciente con productos ecológicos y técnicas certificadas.",
    benefits: [
      "✅ Especialistas en limpieza semanal o quincenal",
      "✅ Productos ecológicos y seguros para mascotas",
      "✅ Reserva online en minutos",
      "✅ Miles de clientes satisfechos en Londres",
    ],
    icon: "🧹",
    href: "/services/basic",
    cta: "Reserva tu limpieza básica ahora",
  },
  {
    id: 2,
    title: "Limpieza Profunda",
    category: "deep",
    description: "Limpieza exhaustiva para eliminar suciedad acumulada.",
    detailedDescription:
      "¿Necesita una limpieza profunda profesional en Londres? Reserve en línea en minutos y deje que nuestros expertos limpien su hogar a la perfección.",
    benefits: [
      "✅ Especialistas experimentados en limpieza profunda",
      "✅ Reserva online sencilla: sin necesidad de llamadas",
      "✅ Renovación completa del hogar: cocinas, baños y más",
      "✅ Miles de personas confían en nosotros en Londres",
    ],
    icon: "✨",
    href: "/services/deep",
    cta: "Programa tu limpieza profunda",
  },
  {
    id: 3,
    title: "Limpieza de Cocinas",
    category: "kitchen",
    description: "Eliminación profesional de grasa y desinfección.",
    detailedDescription:
      "¿Cocina grasienta o desorganizada? Nuestro servicio especializado devolverá el brillo a tu cocina con técnicas profesionales.",
    benefits: [
      "✅ Eliminación completa de grasa y bacterias",
      "✅ Desinfección de todas las superficies",
      "✅ Organización de espacios y despensas",
      "✅ Productos profesionales seguros para alimentos",
    ],
    icon: "🍳",
    href: "/services/kitchen",
    cta: "Limpia tu cocina hoy",
  },
  {
    id: 4,
    title: "Limpieza y Cuidado de Pisos",
    category: "floors",
    description: "Tratamiento profesional para todo tipo de pisos.",
    detailedDescription:
      "¿Pisos opacos o dañados? Nuestro tratamiento profesional devuelve el brillo y protege tus superficies.",
    benefits: [
      "✅ Tratamiento para madera, cerámica, mármol y más",
      "✅ Eliminación de rayones y manchas difíciles",
      "✅ Sellado y protección duradera",
      "✅ Técnicas certificadas por fabricantes",
    ],
    icon: "🏠",
    href: "/services/floors",
    cta: "Renueva tus pisos ahora",
  },
  {
    id: 5,
    title: "Servicio de Lavandería",
    category: "laundry",
    description: "Lavado, secado y doblado profesional.",
    detailedDescription:
      "¿Pilas de ropa sin lavar? Recogemos, lavamos y entregamos tus prendas impecablemente limpias y dobladas.",
    benefits: [
      "✅ Lavado con detergentes hipoalergénicos",
      "✅ Secado a temperatura controlada",
      "✅ Doblado profesional o planchado",
      "✅ Servicio express disponible",
    ],
    icon: "👕",
    href: "/services/laundry",
    cta: "Programa recogida de lavandería",
  },
  {
    id: 6,
    title: "Limpieza de Garaje",
    category: "garage",
    description: "Organización y limpieza de espacios de almacenamiento.",
    detailedDescription:
      "¿Garaje lleno de desorden? Transformamos tu espacio de almacenamiento en un área funcional y limpia.",
    benefits: [
      "✅ Eliminación de polvo y suciedad acumulada",
      "✅ Organización de herramientas y objetos",
      "✅ Limpieza de suelos y paredes",
      "✅ Soluciones de almacenamiento personalizadas",
    ],
    icon: "🚗",
    href: "/services/garage",
    cta: "Recupera tu garaje",
  },
  {
    id: 7,
    title: "Limpieza de Construcción",
    category: "construction",
    description: "Eliminación de escombros y residuos post-obra.",
    detailedDescription:
      "¿Terminó una remodelación? Eliminamos todo rastro de polvo, escombros y materiales de construcción.",
    benefits: [
      "✅ Eliminación profesional de polvo de construcción",
      "✅ Retiro de escombros y materiales sobrantes",
      "✅ Limpieza profunda de todas las superficies",
      "✅ Preparación para mudanza o decoración",
    ],
    icon: "🏗️",
    href: "/services/construction",
    cta: "Limpieza post-obra inmediata",
  },
  {
    id: 8,
    title: "Limpieza para Airbnb",
    category: "airbnb",
    description: "Servicio entre huéspedes con estándares hoteleros.",
    detailedDescription:
      "¿Administra un Airbnb en Londres? Garantizamos una limpieza impecable entre huéspedes con checklist fotográfico incluido.",
    benefits: [
      "✅ Checklist de 52 puntos de inspección",
      "✅ Reposición de amenities básicos",
      "✅ Lavado de ropa de cama y toallas incluido",
      "✅ Horarios flexibles según sus reservas",
    ],
    icon: "🏠",
    href: "/services/airbnb",
    cta: "Coordinar limpieza Airbnb",
  },
  {
    id: 9,
    title: "Mudanza y Organización",
    category: "moving",
    description:
      "Servicio completo de traslado y organización de pertenencias.",
    detailedDescription:
      "¿Planeando una mudanza? Ofrecemos un servicio integral que incluye embalaje, transporte, descarga y organización, con limpieza post-mudanza incluida.",
    benefits: [
      "✅ Embalaje profesional con materiales de calidad",
      "✅ Transporte seguro con vehículos equipados",
      "✅ Organización de espacios en el nuevo hogar",
      "✅ Limpieza profunda post-mudanza incluida",
    ],
    icon: "🚛",
    href: "/services/moving",
    cta: "Cotizar mi mudanza",
  },
  {
    id: 10,
    title: "Limpieza de Oficinas",
    category: "office",
    description: "Mantenimiento diario o nocturno para espacios corporativos.",
    detailedDescription:
      "Servicio profesional de limpieza para oficinas en Londres, adaptado a su horario comercial con personal discreto y eficiente.",
    benefits: [
      "✅ Horario antes de apertura o después de cierre",
      "✅ Desinfección de áreas comunes y baños",
      "✅ Limpieza de zonas de trabajo y equipos",
      "✅ Servicio de reciclaje incluido",
    ],
    icon: "🏢",
    href: "/services/office",
    cta: "Cotizar limpieza de oficina",
  },
];

export const servicios = [
  { nombre: "Limpieza Básica", href: "/services/basic" },
  { nombre: "Limpieza Profunda", href: "/services/deep" },
  { nombre: "Limpieza de Cocinas", href: "/services/kitchen" },
  { nombre: "Limpieza y Cuidado de Pisos", href: "/services/floors" },
  { nombre: "Servicio de Lavandería", href: "/services/laundry" },
  { nombre: "Limpieza de Garaje", href: "/services/garage" },
  { nombre: "Limpieza de Construcción", href: "/services/construction" },
  { nombre: "Limpieza de Airbnb", href: "/services/airbnb" },
  { nombre: "Limpieza de Oficina", href: "/services/office" },
  { nombre: "Mudanza y Organizacion", href: "/services/moving" },
];
