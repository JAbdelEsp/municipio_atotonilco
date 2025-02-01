import HeroCms from "../../components/HeroCms";

const NotFound = () => {
  const ScrollDown = () => {
    const element = document.getElementById("noticias") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <main>
      <HeroCms scrollDown={ScrollDown} title="Ohhhh!!! Pagina No Encontrada!" />
    </main>
  );
};

export default NotFound;
