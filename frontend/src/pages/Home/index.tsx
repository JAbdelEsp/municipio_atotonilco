import BlogContent from "../../components/BlogContent";
import BlogHero from "../../components/BlogHero";
import Discover from "../../components/Discover";
import HomeHero from "../../components/HomeHero";
import HomeHeroVideo from "../../components/HomeHeroVideo";
import FeaturedPosts from "../../components/FeaturedPosts";
import useFetch from "../../services";
import { NewsData } from "../../common/types";
import Preloader from "../../components/Preloader";
import NotFound from "../Component404";
import Ticker from "../../components/Ticker";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect } from "react";
import { getTextBanner } from "../../slices/bannerSlices";
const Home = () => {
  const url = import.meta.env.VITE_API_URL + "news/records";
  const { data, status, error } = useFetch<NewsData>(url);
  // Define the structure of your news data here
  const dispatch = useAppDispatch();
  const textBanner = useAppSelector((state) => state.banners.textBanner);
  useEffect(() => {
    dispatch(getTextBanner());
  }, [dispatch]);
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
    content = (
      <>
        <NotFound />
      </>
    );
  }
  if (status === "fetched" && data) {
    content = (
      <>
        <FeaturedPosts data={Array.isArray(data) ? data : []} />
        {/* <BlogHero
          content="Turismo: Conoce los Atractivos Turísticos que te Ofrece Atotonilco"
          title={"Las mejores"}
          subtitle={"opciones de Turismo"}
          iconSrc={""}
          src={""}
          srcImgLoc={""}
        /> */}
        <BlogContent data={Array.isArray(data) ? data : []} />
      </>
    );
  }

  return (
    <main>
      {textBanner && (
        <Ticker message={Array.isArray(textBanner) ? textBanner : []} />
      )}
      <HomeHero scrollDown={ScrollDown} title={""} subtitle={""} image={""} />
      <HomeHeroVideo />
      <Discover id="areas" />
      <BlogHero
        content="Noticias: Entérate de lo último acontecido en tu Municipio"
        title={"Las Noticias"}
        subtitle={"Más Recientes"}
        iconSrc={""}
        src={""}
        srcImgLoc={""}
      />
      {content}
    </main>
  );
};

export default Home;
