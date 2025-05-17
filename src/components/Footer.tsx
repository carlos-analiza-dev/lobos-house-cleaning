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
            Our Services
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
            Areas Covered in Tennessee Chattanooga
          </p>
          <div className="mt-5">
            <p className="text-white mt-3">Tennessee Chattanooga North</p>
            <p className="text-white mt-3">Tennessee Chattanooga South</p>
            <p className="text-white mt-3">Tennessee Chattanooga East</p>
            <p className="text-white mt-3">Tennessee Chattanooga West</p>
            <p className="text-white mt-3">Tennessee Chattanooga Northeast</p>
            <p className="text-white mt-3">Tennessee Chattanooga Southeast</p>
            <p className="text-white mt-3">Tennessee Chattanooga Center</p>
          </div>
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold text-sky-400">
            Company details
          </p>
          <div className="mt-5">
            <p className="text-white mt-3 flex gap-2 items-center">
              <MapPin /> 107 Culver St Chattanooga, TN 37415
            </p>
            <p className="text-white mt-3">
              <span className="text-sky-400">Phone:</span>
              {""} +1 423-208-4947
            </p>
            <p className="text-white mt-3">
              <span className="text-sky-400">Email:</span>
              {""} loboshousecleaning@gmail.com
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold text-sky-400">
            Social networks
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
