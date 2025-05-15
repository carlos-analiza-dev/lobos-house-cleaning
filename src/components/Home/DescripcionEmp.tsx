"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

const DescripcionEmp = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "anticipate" },
    },
  };

  const openWhatsApp = () => {
    const phoneNumber = "+14232084947";

    const message =
      "Hola, estoy interesado en sus servicios de limpieza. ¿Podrían proporcionarme más información?";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 gap-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col justify-center"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            variants={itemVariants}
          >
            Servicios de limpieza profesionales en Tenesse, Personal{" "}
            <span className="text-blue-600">certificado y de confianza</span> en
            los que puedes confiar.
          </motion.h1>

          <motion.div className="mt-5" variants={itemVariants}>
            <h3 className="text-lg font-bold md:text-xl">
              Reserva servicios de limpieza en cuestion de segundos con los
              mejores profesionales en el area, todos los servicios en un solo
              lugar.
            </h3>
          </motion.div>

          <motion.div className="mt-5" variants={itemVariants}>
            <motion.button
              className="bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-2xl cursor-pointer flex items-center gap-2 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
            >
              Consultar precios y disponibilidad
              <Phone size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-full min-h-[400px] w-full"
          variants={imageVariants}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/h1.jpeg"
              alt="HouseClean1"
              fill
              className="object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DescripcionEmp;
