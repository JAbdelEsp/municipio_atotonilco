import DataTableTransparency from "../../common/DataTableTransparency";
import NavBarC from "../../components/NavBar";
import HeroCms from "../../components/HeroCms";
import { useEffect } from "react";

const Transparency = () => {
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
      <HeroCms scrollDown={ScrollDown} title="Transparencia" description="" />
      <NavBarC />
      <DataTableTransparency />
    </>
  );
};

export default Transparency;
