import { useEffect } from "react";
import DataTableObras from "../../components/DataTableObras";
import HeroCms from "../../components/HeroCms";
import NavBarC from "../../components/NavBar";

const Obras = () => {
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
      <HeroCms scrollDown={ScrollDown} title="Obras Públicas" description="" />
      <NavBarC />
      <DataTableObras />
    </>
  );
};

export default Obras;
