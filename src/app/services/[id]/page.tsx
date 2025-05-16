"use client";

import Estimados from "@/components/Estimados";
import Funcionamiento from "@/components/Home/Funcionamiento";
import Description from "@/components/servicios/Description";
import Preguntas from "@/components/servicios/Preguntas";
import ServicioById from "@/components/servicios/ServicioById";

import { useParams } from "next/navigation";
import React from "react";

const PageServicesName = () => {
  const params = useParams();

  return (
    <div>
      <section>
        <ServicioById id={`${params.id}`} />
      </section>
      <section>
        <Funcionamiento />
      </section>
      <section>
        <Description />
      </section>
      <section>
        <Estimados />
      </section>
      <section>
        <Preguntas />
      </section>
    </div>
  );
};

export default PageServicesName;
