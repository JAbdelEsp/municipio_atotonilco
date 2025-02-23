import { useEffect } from "react";
import DiscoverArea from "../../components/DiscoverArea";
import HeroCms from "../../components/HeroCms";

const Areas = () => {
  const ScrollDown = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const element = document.getElementById("noticias") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <main>
      <HeroCms scrollDown={ScrollDown} />
      <DiscoverArea />
      {/* <Quote /> */}
      {/* <Blog id="noticias" /> */}
    </main>
  );
};

export default Areas;
