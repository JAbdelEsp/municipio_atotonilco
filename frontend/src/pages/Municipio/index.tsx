import HeroCms from "../../components/HeroCms";
import Municipio from "../../components/Municipio";

const TuMunicipio = () => {
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
        title="Tú Municipio"
        description="Atotonilco el Grande"
      />
      <Municipio />
    </>
  );
};

export default TuMunicipio;
