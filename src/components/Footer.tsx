import { servicios } from "@/data/serviceData";
import { Facebook, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-6 py-12 md:px-20 md:py-14 lg:px-36 lg:py-24 bg-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="text-lg md:text-xl font-bold text-sky-400">
            Nuestros Servicios
          </p>
          <div className="mt-5">
            {servicios.map((servicio) => (
              <Link
                className="text-white mt-3 block hover:underline"
                key={servicio.href}
                href={servicio.href}
              >
                {servicio.nombre}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold text-sky-400">
            Areas Cubiertas en Tennessee Chattanooga
          </p>
          <div className="mt-5">
            <p className="text-white mt-3">Tennessee Chattanooga Norte</p>
            <p className="text-white mt-3">Tennessee Chattanooga Sur</p>
            <p className="text-white mt-3">Tennessee Chattanooga Este</p>
            <p className="text-white mt-3">Tennessee Chattanooga Oeste</p>
            <p className="text-white mt-3">Tennessee Chattanooga Noreste</p>
            <p className="text-white mt-3">Tennessee Chattanooga Sureste</p>
            <p className="text-white mt-3">Tennessee Chattanooga Centro</p>
          </div>
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold text-sky-400">
            Detalles de la empresa
          </p>
          <div className="mt-5">
            <p className="text-white mt-3 flex gap-2 items-center">
              <MapPin /> 107 Culver St Chattanooga, TN 37415
            </p>
            <p className="text-white mt-3">
              <span className="text-sky-400">Telefono:</span>
              {""} +1 423-208-4947
            </p>
            <p className="text-white mt-3">
              <span className="text-sky-400">Correo Electromico:</span>
              {""} loboshousecleaning@gmail.com
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold text-sky-400">
            Redes Sociales
          </p>
          <div className="mt-5 flex gap-5 text-white">
            <Link
              href="https://www.facebook.com/share/19bd8MEXrB/?mibextid=wwXIfr"
              target="_blank"
            >
              <Facebook className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
