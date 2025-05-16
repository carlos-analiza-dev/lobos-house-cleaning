import Link from "next/link";
import React from "react";

interface Props {
  icon: React.ReactNode;
  titulo: string;
  subtitulo: string;
  button_title: string;
  href: string;
}

const CardServices = ({
  icon,
  titulo,
  subtitulo,
  button_title,
  href,
}: Props) => {
  return (
    <div className="bg-white shadow rounded-2xl p-4 ">
      <div className="p-2 rounded-md bg-sky-50 text-sky-500 h-12 w-12 flex justify-center items-center">
        {icon}
      </div>
      <div className="mt-4">
        <h1 className="md:text-xl font-bold">{titulo}</h1>
      </div>
      <div className="mt-4">
        <p> {subtitulo}</p>
      </div>
      <div className="mt-4 mb-0 md:mb-5">
        <Link
          href={href}
          className="justify-center bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-2xl cursor-pointer flex items-center gap-2 transition-colors duration-200 w-full"
        >
          {button_title}
        </Link>
      </div>
    </div>
  );
};

export default CardServices;
