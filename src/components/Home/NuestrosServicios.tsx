"use client";
import {
  AlignVerticalDistributeStart,
  BrickWall,
  Calendar,
  CheckCheck,
  House,
  LampDesk,
  Pickaxe,
  Shredder,
  Truck,
  Warehouse,
} from "lucide-react";
import React from "react";
import CardServices from "./components/CardServices";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const NuestrosServicios = () => {
  const servicios = [
    {
      icon: <House />,
      titulo: "Basic Cleaning",
      subtitulo:
        "Regular home cleaning that helps maintain order and hygiene daily or weekly, tailored to your needs.",
      button_title: "See Basic Cleaning",
      href: "/services/basic",
    },
    {
      icon: <CheckCheck />,
      titulo: "Deep Cleaning",
      subtitulo:
        "A detailed home cleaning that goes beyond the superficial, ideal for removing accumulated dirt and reaching difficult areas, tailored to your needs.",
      button_title: "See Deep Cleaning",
      href: "/services/deep",
    },
    {
      icon: <AlignVerticalDistributeStart />,
      titulo: "Kitchen Cleaning",
      subtitulo:
        "Specialized service to leave your kitchen sparkling clean, removing grease and residue and disinfecting surfaces, tailored to your needs.",
      button_title: "See Kitchen Cleaning",
      href: "/services/kitchen",
    },
    {
      icon: <BrickWall />,
      titulo: "Floor Cleaning and Care",
      subtitulo:
        "Service focused on deep cleaning and maintenance of all types of floors, leaving surfaces shiny, clean, and protected according to your needs.",
      button_title: "See Floor Cleaning and Care",
      href: "/services/floors",
    },
    {
      icon: <Shredder />,
      titulo: "Laundry service",
      subtitulo:
        "Professional washing, drying, and folding of your clothes. Save time and enjoy clean, fresh, and well-cared-for garments.",
      button_title: "See Laundry Service ",
      href: "/services/laundry",
    },
    {
      icon: <Truck />,
      titulo: "Moving and Organization",
      subtitulo:
        "Safe and organized transfers, with support for packing, transporting, and arranging your belongings. We make sure your move is quick, organized, and stress-free.",
      button_title: "See Moving and Organizing",
      href: "/services/moving",
    },
    {
      icon: <Warehouse />,
      titulo: "Garage Cleaning",
      subtitulo:
        "We eliminate clutter, thoroughly clean, and organize your garage to restore space and functionality. Ideal for keeping it clean, safe, and free of unnecessary clutter.",
      button_title: "See Garage Cleaning",
      href: "/services/garage",
    },
    {
      icon: <Pickaxe />,
      titulo: "Construction Cleaning",
      subtitulo:
        "Detailed cleaning after construction or remodeling. We remove dust, debris, and waste to leave the space ready, safe, and habitable. Ideal for new construction or renovations.",
      button_title: "See Construction Cleaning",
      href: "/services/construction",
    },
    {
      icon: <LampDesk />,
      titulo: "Office Cleaning",
      subtitulo:
        "Daily/nightly maintenance for corporate spaces with discreet and efficient staff.",
      button_title: "See Office Cleaning",
      category: "oficinas",
      href: "/services/office",
    },
    {
      icon: <Calendar />,
      titulo: "Cleaning for Airbnb",
      subtitulo:
        "Guest service with hotel standards and photo checklist included.",
      button_title: "See Airbnb Service",
      category: "airbnb",
      href: "/services/airbnb",
    },
  ];

  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-green-50">
      <motion.div
        className="flex justify-center mt-5 mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-5xl font-bold">
          Our Cleaning Services
        </h1>
      </motion.div>

      <motion.div
        className="mt-4 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl text-gray-700 text-center">
          We offer a variety of professional cleaning services to cover all your
          needs, performed by trained and trusted experts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-8 gap-3 md:gap-8">
        {servicios.map((servicio, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CardServices
              icon={servicio.icon}
              titulo={servicio.titulo}
              subtitulo={servicio.subtitulo}
              button_title={servicio.button_title}
              href={servicio.href}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NuestrosServicios;
