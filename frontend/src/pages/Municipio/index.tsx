import HeroCms from "../../components/HeroCms";

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
    </>
  );
};

export default TuMunicipio;
