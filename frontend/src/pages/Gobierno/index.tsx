import { useEffect } from "react";
import HeroCms from "../../components/HeroCms";
import OrgChart from "../../components/OrgChart";

const Gobierno = () => {
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
        title="Gobierno 2024 - 2027"
        description="Atotonilco el Grande"
      />
      <OrgChart />
    </>
  );
};

export default Gobierno;
