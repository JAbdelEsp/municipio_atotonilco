import { useEffect, useState } from "react";
import DataTablePlanning from "../../components/DataTablePlanning";
import DiscoverArea from "../../components/DiscoverArea";
import HeroCms from "../../components/HeroCms";
import useFetch from "../../services";
import Preloader from "../../components/Preloader";
const Planning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [info, setInfo] = useState([]);
  let content;
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "planning/records/public")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .finally();
  }, []);
  const { data, status, error } = useFetch(
    import.meta.env.VITE_API_URL + "planning/records"
  );
  const ScrollDown = () => {
    const element = document.getElementById("noticias") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  if (status === "loading") {
    content = <Preloader />;
  }
  if (error) {
    content = (
      <>
        <h1>Algo a ocurrido!</h1>
      </>
    );
  }
  if (status === "fetched" && data) {
    content = (
      <>
        <HeroCms
          scrollDown={ScrollDown}
          title="Dirección de Planeación"
          description=""
        />
        <DiscoverArea data={info} />
        <DataTablePlanning data={data} />
      </>
    );
  }
  return <main>{content}</main>;
};

export default Planning;
