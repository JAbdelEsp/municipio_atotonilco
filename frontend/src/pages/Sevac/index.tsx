import DataTableSevac from "../../components/DataTableSevac";
import HeroCms from "../../components/HeroCms";
const Sevac = () => {
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
      <HeroCms scrollDown={ScrollDown} title="Sevac" description="" />
      <DataTableSevac />
    </>
  );
};

export default Sevac;
