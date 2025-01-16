import BlogContent from "../../components/BlogContent";
import BlogHero from "../../components/BlogHero";
import Discover from "../../components/Discover";
import HomeHero from "../../components/HomeHero";
import HomeHeroVideo from "../../components/HomeHeroVideo";
import FeaturedPosts from "../../components/FeaturedPosts";
import useFetch from "../../services";
import { NewsData } from "../../common/types";
import Preloader from "../../components/Preloader";
const Home = () => {
  const url = "https://k753lncj-9000.usw3.devtunnels.ms/news/records";
  const { data, status, error } = useFetch<NewsData>(url);
  // Define the structure of your news data here
  let content;
  const ScrollDown = () => {
    const element = document.getElementById("areas") as HTMLDivElement;
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
    console.log("error: ", error);
    content = (
      <>
        <h1>Something went wrong!</h1>
      </>
    );
  }
  if (status === "fetched" && data) {
    content = (
      <>
        <HomeHero scrollDown={ScrollDown} title={""} subtitle={""} image={""} />
        <HomeHeroVideo />
        <Discover id="areas" />
        <BlogHero
          content="Noticias: Entérate de lo ultimo acontecido en tu Municipio"
          title={"Las Noticias"}
          subtitle={"Más Recientes"}
          iconSrc={""}
          src={""}
          srcImgLoc={""}
        />
        <FeaturedPosts data={Array.isArray(data) ? data : []} />
        <BlogHero
          content="Turismo: Conoce los Atractivos Turísticos que te Ofrece Atotonilco"
          title={"Las mejores"}
          subtitle={"opciones de Turismo"}
          iconSrc={""}
          src={""}
          srcImgLoc={""}
        />
        <BlogContent />
      </>
    );
  }

  return <main>{content}</main>;
};

export default Home;
