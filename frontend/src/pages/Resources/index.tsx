import DataTableResources from "../../components/DataTableResources";
import HeroCms from "../../components/HeroCms";
import Preloader from "../../components/Preloader";
import useFetch from "../../services";
import NotFound from "../404";

const Resources = () => {
  const { data, status, error } = useFetch(
    import.meta.env.VITE_API_URL + "resources/records"
  );
  let content;
  const ScrollDown = () => {
    const element = document.getElementById("data") as HTMLDivElement;
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
    content = <NotFound />;
  }

  if (status === "fetched" && data) {
    content = (
      <>
        <HeroCms
          scrollDown={ScrollDown}
          title="Trámites y Servicios"
          description=""
        />
        <DataTableResources dataSource={Array.isArray(data) ? data : []} />
      </>
    );
  }
  return <main>{content}</main>;
};

export default Resources;
