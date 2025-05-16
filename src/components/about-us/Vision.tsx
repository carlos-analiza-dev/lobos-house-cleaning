import Image from "next/image";
import { motion } from "framer-motion";

const Vision = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch mt-10 md:mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
          className="h-full order-2 md:order-1"
        >
          <div className="relative w-full h-full min-h-[350px]">
            <Image
              src="/images/Vision.jpg"
              fill
              alt="mision"
              className="rounded-xl object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
            />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="h-full flex flex-col justify-center order-1 md:order-2"
        >
          <h1 className="text-xl md:text-5xl font-bold">Nuestra Visión</h1>
          <p className="mt-5 md:text-lg">
            Ser la empresa líder en servicios de limpieza en nuestra región,
            reconocida por la excelencia, la confianza y la innovación en
            nuestras soluciones, expandiéndonos a nuevos sectores sin perder la
            esencia de nuestro compromiso con el cliente.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
