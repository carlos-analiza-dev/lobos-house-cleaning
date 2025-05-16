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
      titulo: "Limpieza Basica",
      subtitulo:
        "La limpieza regular del hogar que ayuda a mantener el orden y la higiene diaria o semanal, adaptado a tus necesidades.",
      button_title: "Ver Limpieza Basica",
      href: "/services/basic",
    },
    {
      icon: <CheckCheck />,
      titulo: "Limpieza Profunda",
      subtitulo:
        "Una limpieza detallada del hogar que va más allá de lo superficial, ideal para eliminar suciedad acumulada y alcanzar áreas difíciles, adaptada a tus necesidades.",
      button_title: "Ver Limpieza Profunda",
      href: "/services/deep",
    },
    {
      icon: <AlignVerticalDistributeStart />,
      titulo: "Limpieza de Cocinas",
      subtitulo:
        "Servicio especializado para dejar tu cocina reluciente, eliminando grasa, residuos y desinfección de superficies, adaptado a tus necesidades.",
      button_title: "Ver Limpieza de Cocinas",
      href: "/services/kitchen",
    },
    {
      icon: <BrickWall />,
      titulo: "Limpieza y Cuidado de Pisos",
      subtitulo:
        "Servicio enfocado en la limpieza profunda y mantenimiento de todo tipo de pisos, dejando las superficies brillantes, limpias y protegidas según tus necesidades.",
      button_title: "Ver Limpieza y Cuidado de Pisos",
      href: "/services/floors",
    },
    {
      icon: <Shredder />,
      titulo: "Servicio de Lavandería ",
      subtitulo:
        "Lavado, secado y doblado de tu ropa con cuidado profesional. Ahorra tiempo y disfruta de prendas limpias, frescas y bien cuidadas.",
      button_title: "Ver Servicio de Lavandería ",
      href: "/services/laundry",
    },
    {
      icon: <Truck />,
      titulo: "Mudanza y Organización",
      subtitulo:
        "Traslados seguros y organizados, con apoyo en el embalaje, transporte y acomodo de tus pertenencias. Nos encargamos de que tu mudanza sea rápida, ordenada y sin estrés.",
      button_title: "Ver Mudanza y Organización",
      href: "/services/moving",
    },
    {
      icon: <Warehouse />,
      titulo: "Limpieza de Garaje",
      subtitulo:
        "Eliminamos el desorden, limpiamos a fondo y organizamos tu garaje para que recuperes espacio y funcionalidad. Ideal para mantenerlo limpio, seguro y libre de acumulaciones innecesarias.",
      button_title: "Ver Limpieza de Garaje",
      href: "/services/garage",
    },
    {
      icon: <Pickaxe />,
      titulo: "Limpieza de Construcción",
      subtitulo:
        "Limpieza detallada después de una obra o remodelación. Eliminamos polvo, escombros y residuos para dejar el espacio listo, seguro y habitable. Ideal para obras nuevas o renovaciones.",
      button_title: "Ver Limpieza de Construcción",
      href: "/services/construction",
    },
    {
      icon: <LampDesk />,
      titulo: "Limpieza de Oficinas",
      subtitulo:
        "Mantenimiento diario/nocturno para espacios corporativos con personal discreto y eficiente.",
      button_title: "Ver Limpieza de Oficinas",
      category: "oficinas",
      href: "/services/office",
    },
    {
      icon: <Calendar />,
      titulo: "Limpieza para Airbnb",
      subtitulo:
        "Servicio entre huéspedes con estándares hoteleros y checklist fotográfico incluido.",
      button_title: "Ver Servicio Airbnb",
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
          Nuestros Servicios de Limpieza
        </h1>
      </motion.div>

      <motion.div
        className="mt-4 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl text-gray-700 text-center">
          Ofrecemos varios servicios de limpieza profesional para cubrir todas
          tus necesidades, realizados por expertos capacitados y de confianza.
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
