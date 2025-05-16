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

const Valores = () => {
  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <div className=" mt-10 md:mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h1 className="text-2xl md:text-5xl font-bold">Nuestros Valores</h1>
          <div className="mt-5">
            <li className=" md:text-xl mt-4">
              Garantizar la satisfacción total de nuestros clientes en cada
              servicio.
            </li>
            <li className=" md:text-xl mt-4">
              Capacitar continuamente a nuestro personal para asegurar
              resultados impecables.
            </li>
            <li className=" md:text-xl mt-4">
              Ampliar nuestra oferta de servicios a nuevas áreas residenciales,
              comerciales e industriales.
            </li>
            <li className=" md:text-xl mt-4">
              Implementar prácticas sostenibles y ecológicas en nuestros
              procesos de limpieza.
            </li>
            <li className=" md:text-xl mt-4">
              Construir relaciones a largo plazo con nuestros clientes basadas
              en la confianza y la calidad.
            </li>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Valores;
