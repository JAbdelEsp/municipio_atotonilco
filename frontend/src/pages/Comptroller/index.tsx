import HeroCms from "../../components/HeroCms";
import NavBarC from "../../components/NavBar";

const Comptroller = () => {
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
      <HeroCms scrollDown={ScrollDown} title="Contraloria" description="" />
      <NavBarC />
    </>
  );
};

export default Comptroller;
