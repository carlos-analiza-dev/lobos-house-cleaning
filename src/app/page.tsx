import Banner from "@/components/Home/Banner";
import DescripcionEmp from "@/components/Home/DescripcionEmp";
import DescServicios from "@/components/Home/DescServicios";
import Elegirnos from "@/components/Home/Elegirnos";
import Estimados from "@/components/Home/Estimados";
import Funcionamiento from "@/components/Home/Funcionamiento";
import InicioHome from "@/components/Home/InicioHome";
import NuestrosServicios from "@/components/Home/NuestrosServicios";
import React from "react";

const HomePage = () => {
  return (
    <div className="md:mt-20">
      <section>
        <InicioHome />
      </section>
      <section>
        <DescripcionEmp />
      </section>
      <section>
        <Funcionamiento />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Elegirnos />
      </section>
      <section>
        <DescServicios />
      </section>
      <section>
        <NuestrosServicios />
      </section>
      <section>
        <Estimados />
      </section>
    </div>
  );
};

export default HomePage;
