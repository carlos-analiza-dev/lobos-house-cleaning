"use client";
import { motion } from "framer-motion";
import { BrushCleaning, Phone, Smile, User } from "lucide-react";
import FuncionamientoServices from "./components/FuncionamientoServices";

const Funcionamiento = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
  };

  return (
    <motion.div
      className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <motion.div className="mt-5 flex justify-center" variants={titleVariants}>
        <h1 className="text-xl md:text-5xl font-bold">
          ¿Cómo funciona nuestro servicio de limpieza?
        </h1>
      </motion.div>

      <motion.div
        className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
      >
        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Reserva via WhatsApp"
            numero={1}
            icono={<Phone className="hidden sm:block" size={20} />}
            subtitulo="Contáctanos fácilmente por WhatsApp para agendar la limpieza de tu hogar. Solo envíanos un mensaje con la fecha y hora que prefieras: sin llamadas ni complicaciones."
          />
        </motion.div>

        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Consulta administrador"
            numero={2}
            icono={<User className="hidden sm:block" size={20} />}
            subtitulo="Podrás comunicarte de forma que el administrador contestará cada una de tus consultas acerca del servicio que deseas contratar."
          />
        </motion.div>

        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Listos para la limpieza"
            numero={3}
            icono={<BrushCleaning className="hidden sm:block" size={20} />}
            subtitulo="Nuestro equipo llegará listo para dejar impecable cada rincón de tu hogar. Desde quitar el polvo hasta fregar, seguimos una lista de verificación detallada."
          />
        </motion.div>

        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Casa Limpia y fresca"
            numero={4}
            icono={<Smile className="hidden sm:block" size={20} />}
            subtitulo="Relájate mientras dejamos tu casa impecable. ¿Quieres mantenerla siempre así? Agenda limpiezas regulares cada semana, cada dos semanas o cuando más te convenga."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Funcionamiento;
