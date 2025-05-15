import React from "react";

interface Props {
  numero: number;
  titulo: string;
  icono: React.ReactNode;
  subtitulo: string;
}

const FuncionamientoServices = ({
  numero,
  titulo,
  icono,
  subtitulo,
}: Props) => {
  return (
    <div className="bg-white rounded-xl p-4 md:p-8 shadow-xl h-full">
      <div className="h-12 w-12 rounded-full bg-sky-600 text-white flex items-center justify-center">
        <p className="font-bold">{numero}</p>
      </div>
      <div className="mt-4 flex items-center gap-4 text-base md:text-xl">
        <h3>{titulo}</h3>
        {icono}
      </div>
      <div className="mt-5">
        <p className="text-gray-700">{subtitulo}</p>
      </div>
    </div>
  );
};

export default FuncionamientoServices;
