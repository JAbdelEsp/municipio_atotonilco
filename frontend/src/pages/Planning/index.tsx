import DataTablePlanning from "../../components/DataTablePlanning";
import DiscoverArea from "../../components/DiscoverArea";
import HeroCms from "../../components/HeroCms";

const Planning = () => {
  const ScrollDown = () => {
    const element = document.getElementById("noticias") as HTMLDivElement;
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
        title="Dirección de Planeación"
        description=""
      />
      <DiscoverArea />
      <DataTablePlanning />
    </>
  );
};

export default Planning;
