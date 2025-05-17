import { services } from "@/data/serviceData";
import Image from "next/image";
import ButtonContactar from "../ButtonContactar";
import Link from "next/link";

interface Props {
  id: string;
}

const ServicioById = ({ id }: Props) => {
  const servicio = services.find((servi) => servi.category === id);

  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE;

    const message =
      "Hello, I'm interested in your cleaning services. Could you provide me with more information?";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (!servicio) {
    return (
      <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Service not found
        </h1>
        <p className="text-gray-600">
          The requested service is not available at this time.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to start
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 inline-block">{servicio.icon}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {servicio.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicio.detailedDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Benefits of our service
            </h2>
            <ul className="space-y-4">
              {servicio.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">
                    {benefit.replace("✅ ", "")}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <ButtonContactar openWhatsApp={openWhatsApp} />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What does this service include?
              </h3>
              <p className="text-gray-600 mb-6">{servicio.description}</p>

              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src={`/images/${servicio.category}.jpeg`}
                  alt={`Servicio de ${servicio.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicioById;
