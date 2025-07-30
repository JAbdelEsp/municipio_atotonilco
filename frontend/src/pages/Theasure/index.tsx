import { useEffect } from "react";
import HeroCms from "../../components/HeroCms";
import NavBarC from "../../components/NavBar";
import DataTablesTheasure from "../../components/DataTablesTheasure";

const Theasure = () => {
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
      <HeroCms scrollDown={ScrollDown} title="Tesorería" description="" />
      <NavBarC />
      <DataTablesTheasure />
    </>
  );
};

export default Theasure;
