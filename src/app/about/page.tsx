"use client";

import Mision from "@/components/about-us/Mision";
import Objetivos from "@/components/about-us/Objetivos";
import Presentation from "@/components/about-us/Presentation";
import QuienesSomos from "@/components/about-us/QuienesSomos";
import Valores from "@/components/about-us/Valores";
import Vision from "@/components/about-us/Vision";
import Estimados from "@/components/Estimados";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <section>
        <Presentation />
      </section>
      <section>
        <QuienesSomos />
      </section>
      <section>
        <Mision />
      </section>
      <section>
        <Objetivos />
      </section>
      <section>
        <Vision />
      </section>
      <section>
        <Valores />
      </section>
      <section>
        <Estimados />
      </section>
    </div>
  );
};

export default AboutUsPage;
