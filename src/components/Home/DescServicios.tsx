"use client";
import {
  BrushCleaning,
  Bus,
  CircleCheckBig,
  House,
  Star,
  TrendingUp,
  User,
} from "lucide-react";
import React from "react";
import ServiciosCard from "./components/ServiciosCard";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const DescServicios = () => {
  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-sky-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
        className="flex justify-center"
      >
        <h1 className="text-2xl md:text-4xl text-center">
          Some cleaning services we offer in{" "}
          <span className="text-blue-600 font-bold">
            Lobo&#39;s House Cleaning
          </span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="justify-center"
        >
          <h1>
            <span className="text-blue-600 font-bold">
              Lobo&#39;s House Cleaning
            </span>{" "}
            It&#39;s a reliable platform that connects you with professional
            cleaning and moving services in your area...
          </h1>

          <div className="mt-5 space-y-4">
            <ServiciosCard
              titulo="Basic Cleaning"
              subtitulo="Professional basic cleaning services."
              icono={<CircleCheckBig size={40} className="text-green-600" />}
            />
            <ServiciosCard
              titulo="
Deep cleaning"
              subtitulo="Deep cleaning for those hard-to-reach places
"
              icono={<BrushCleaning size={40} className="text-green-600" />}
            />
            <ServiciosCard
              titulo="Moving and organizing
"
              subtitulo="Professional end-of-lease cleaning services
"
              icono={<Bus size={40} className="text-green-600" />}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          {[
            {
              color: "bg-red-200",
              icon: <TrendingUp />,
              value: "10+",
              label: "Available services",
            },
            {
              color: "bg-yellow-200",
              icon: <House />,
              value: "500+",
              label: "Cleaned Houses",
            },
            {
              color: "bg-sky-200",
              icon: <User />,
              value: "10+",
              label: "Professional cleaners",
            },
            {
              color: "bg-green-200",
              icon: <Star />,
              value: "1k+",
              label: "Satisfied customers",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={idx + 2}
              className={`h-auto w-full ${item.color} p-4 rounded-lg shadow`}
            >
              <div className="flex justify-end w-full">
                {React.cloneElement(item.icon, {
                  size: 30,
                  className: "text-gray-500",
                })}
              </div>
              <div className="flex justify-center mt-5">
                <p className="text-3xl md:text-5xl font-bold">{item.value}</p>
              </div>
              <div className="flex justify-center mt-5 mb-5">
                <p>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescServicios;
