import React from "react";

interface Props {
  titulo: string;
  subtitulo: string;
  icono: React.ReactNode;
}

const ServiciosCard = ({ titulo, subtitulo, icono }: Props) => {
  return (
    <div className="flex items-center gap-6 p-4 rounded-2xl shadow bg-white mt-4 transition-transform duration-300 hover:scale-105">
      {icono}
      <div className="block justify-center">
        <p className="text-xl ">{titulo}</p>
        <p>{subtitulo}</p>
      </div>
    </div>
  );
};

export default ServiciosCard;
