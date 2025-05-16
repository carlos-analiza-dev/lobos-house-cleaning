import Image from "next/image";
import { motion } from "framer-motion";

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

const Objetivos = () => {
  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center mt-10 md:mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h1 className="text-2xl md:text-5xl font-bold">Nuestros Objetivos</h1>
          <div className="mt-5">
            <li className="md:text-lg">
              Garantizar la satisfacción total de nuestros clientes en cada
              servicio.
            </li>
            <li className="md:text-lg">
              Capacitar continuamente a nuestro personal para asegurar
              resultados impecables.
            </li>
            <li className="md:text-lg">
              Ampliar nuestra oferta de servicios a nuevas áreas residenciales,
              comerciales e industriales.
            </li>
            <li className="md:text-lg">
              Implementar prácticas sostenibles y ecológicas en nuestros
              procesos de limpieza.
            </li>
            <li className="md:text-lg">
              Construir relaciones a largo plazo con nuestros clientes basadas
              en la confianza y la calidad.
            </li>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <Image
            src="/images/img1.jpeg"
            width={500}
            height={500}
            alt="quienes-somos"
            className="rounded-xl h-auto w-auto transition-transform duration-300 hover:scale-105 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Objetivos;
