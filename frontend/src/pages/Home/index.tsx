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
import { useEffect, useState } from "react";
import { getTextBanner } from "../../slices/bannerSlices";
const Home = () => {
  const url = import.meta.env.VITE_API_URL + "news/records";
  const { data, status, error } = useFetch<NewsData>(url);
  const [mute, setMute] = useState(false);
  // Define the structure of your news data here
  const dispatch = useAppDispatch();
  const textBanner = useAppSelector((state) => state.banners.textBanner);
  useEffect(() => {
    dispatch(getTextBanner());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1600) {
        setMute(true);
      } else {
        setMute(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <HomeHeroVideo mute={mute} />
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
