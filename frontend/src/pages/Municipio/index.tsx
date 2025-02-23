import { useEffect } from "react";
import HeroCms from "../../components/HeroCms";
import Municipio from "../../components/Municipio";

const TuMunicipio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ScrollDown = () => {
    const element = document.getElementById("data") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <>
      <HeroCms
        scrollDown={ScrollDown}
        title="Tu Municipio"
        description="Atotonilco el Grande"
      />
      <Municipio />
    </>
  );
};

export default TuMunicipio;
