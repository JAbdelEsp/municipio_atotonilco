import DataTableResources from "../../components/DataTableResources";
import HeroCms from "../../components/HeroCms";

const Resources = () => {
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
        title="Tramites y Servicios"
        description=""
      />
      <DataTableResources />
    </>
  );
};

export default Resources;
