import { useEffect } from "react";
import HeroCms from "../../components/HeroCms";

const Archivo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
