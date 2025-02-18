import HeroCms from "../../components/HeroCms";

const Archivo = () => {
  const ScrollDown = () => {
    const element = document.getElementById(
      "Archivo Municipal"
    ) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <main>
      <HeroCms
        scrollDown={ScrollDown}
        title="Archivo Municipal"
        description=""
      />
    </main>
  );
};

export default Archivo;
