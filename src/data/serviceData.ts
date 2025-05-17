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
    title: "Basic Cleaning",
    category: "basic",
    description: "Regular cleaning to keep your home spotless.",
    detailedDescription:
      "Need professional basic cleaning in Chattanooga, Tennessee? Our regular service will keep your home sparkling with eco-friendly products and certified techniques.",
    benefits: [
      "✅ Specialists in weekly or biweekly cleaning",
      "✅ Pet-safe eco-friendly products",
      "✅ Online booking in minutes",
      "✅ Thousands of satisfied customers in Chattanooga, Tennessee",
    ],
    icon: "🧹",
    href: "/services/basic",
    cta: "Book your basic cleaning now",
  },
  {
    id: 2,
    title: "Deep Cleaning",
    category: "deep",
    description: "Thorough cleaning to remove built-up dirt.",
    detailedDescription:
      "Need professional deep cleaning in Chattanooga, Tennessee? Book online in minutes and let our experts clean your home to perfection.",
    benefits: [
      "✅ Experienced deep cleaning specialists",
      "✅ Easy online booking - no phone calls needed",
      "✅ Complete home refresh: kitchens, bathrooms and more",
      "✅ Thousands trust us in Chattanooga, Tennessee",
    ],
    icon: "✨",
    href: "/services/deep",
    cta: "Schedule your deep cleaning",
  },
  {
    id: 3,
    title: "Kitchen Cleaning",
    category: "kitchen",
    description: "Professional degreasing and disinfection.",
    detailedDescription:
      "Greasy or disorganized kitchen? Our specialized service will restore shine to your kitchen with professional techniques.",
    benefits: [
      "✅ Complete grease and bacteria removal",
      "✅ Disinfection of all surfaces",
      "✅ Space and pantry organization",
      "✅ Food-safe professional products",
    ],
    icon: "🍳",
    href: "/services/kitchen",
    cta: "Clean your kitchen today",
  },
  {
    id: 4,
    title: "Floor Care",
    category: "floors",
    description: "Professional treatment for all floor types.",
    detailedDescription:
      "Dull or damaged floors? Our professional treatment restores shine and protects your surfaces.",
    benefits: [
      "✅ Treatment for wood, tile, marble and more",
      "✅ Removal of scratches and tough stains",
      "✅ Sealing and long-lasting protection",
      "✅ Manufacturer-certified techniques",
    ],
    icon: "🏠",
    href: "/services/floors",
    cta: "Refresh your floors now",
  },
  {
    id: 5,
    title: "Laundry Service",
    category: "laundry",
    description: "Professional washing, drying and folding.",
    detailedDescription:
      "Piles of dirty laundry? We pick up, wash and deliver your clothes impeccably clean and folded.",
    benefits: [
      "✅ Hypoallergenic detergents",
      "✅ Temperature-controlled drying",
      "✅ Professional folding or ironing",
      "✅ Express service available",
    ],
    icon: "👕",
    href: "/services/laundry",
    cta: "Schedule laundry pickup",
  },
  {
    id: 6,
    title: "Garage Cleaning",
    category: "garage",
    description: "Organization and cleaning of storage spaces.",
    detailedDescription:
      "Cluttered garage? We transform your storage space into a functional, clean area.",
    benefits: [
      "✅ Removal of built-up dust and dirt",
      "✅ Tool and item organization",
      "✅ Floor and wall cleaning",
      "✅ Custom storage solutions",
    ],
    icon: "🚗",
    href: "/services/garage",
    cta: "Reclaim your garage",
  },
  {
    id: 7,
    title: "Post-Construction Cleaning",
    category: "construction",
    description: "Debris and post-construction waste removal.",
    detailedDescription:
      "Finished a remodel? We remove all traces of construction dust, debris and leftover materials.",
    benefits: [
      "✅ Professional construction dust removal",
      "✅ Debris and leftover material disposal",
      "✅ Deep cleaning of all surfaces",
      "✅ Move-in or decoration preparation",
    ],
    icon: "🏗️",
    href: "/services/construction",
    cta: "Immediate post-construction cleaning",
  },
  {
    id: 8,
    title: "Airbnb Cleaning",
    category: "airbnb",
    description: "Turnover service with hotel standards.",
    detailedDescription:
      "Manage an Airbnb in Chattanooga, Tennessee? We guarantee impeccable cleaning between guests with included photographic checklist.",
    benefits: [
      "✅ 52-point inspection checklist",
      "✅ Basic amenities restocking",
      "✅ Bedding and towel washing included",
      "✅ Flexible scheduling based on your bookings",
    ],
    icon: "🏠",
    href: "/services/airbnb",
    cta: "Coordinate Airbnb cleaning",
  },
  {
    id: 9,
    title: "Moving & Organization",
    category: "moving",
    description: "Complete moving and belongings organization service.",
    detailedDescription:
      "Planning a move? We offer a comprehensive service including packing, transportation, unloading and organization, with post-move cleaning included.",
    benefits: [
      "✅ Professional packing with quality materials",
      "✅ Safe transportation with equipped vehicles",
      "✅ Space organization in your new home",
      "✅ Included post-move deep cleaning",
    ],
    icon: "🚛",
    href: "/services/moving",
    cta: "Get a moving quote",
  },
  {
    id: 10,
    title: "Office Cleaning",
    category: "office",
    description: "Daily or nighttime maintenance for corporate spaces.",
    detailedDescription:
      "Professional office cleaning service in Chattanooga, Tennessee, adapted to your business hours with discreet, efficient staff.",
    benefits: [
      "✅ Before opening or after closing hours",
      "✅ Common area and bathroom disinfection",
      "✅ Workspace and equipment cleaning",
      "✅ Recycling service included",
    ],
    icon: "🏢",
    href: "/services/office",
    cta: "Get an office cleaning quote",
  },
];

export const servicios = [
  { nombre: "Basic Cleaning", href: "/services/basic" },
  { nombre: "Deep Cleaning", href: "/services/deep" },
  { nombre: "Kitchen Cleaning", href: "/services/kitchen" },
  { nombre: "Floor Cleaning and Care", href: "/services/floors" },
  { nombre: "Laundry service", href: "/services/laundry" },
  { nombre: "Garage Cleaning", href: "/services/garage" },
  { nombre: "Construction Cleaning", href: "/services/construction" },
  { nombre: "Airbnb Cleaning", href: "/services/airbnb" },
  { nombre: "Office Cleaning", href: "/services/office" },
  { nombre: "Moving and Organization", href: "/services/moving" },
];
