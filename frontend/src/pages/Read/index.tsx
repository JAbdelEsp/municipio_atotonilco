import { useEffect } from "react";
import Article from "../../components/Article";
import useFetch from "../../services";
import Preloader from "../../components/Preloader";
const Read = () => {
  let content;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const queryParameters = new URLSearchParams(window.location.search);
  const id_news = queryParameters.get("noticia");
  const options = {
    method: "GET",
  };
  const url = import.meta.env.VITE_API_URL + "news/recordsBy?id=" + id_news;
  const { data, status, error } = useFetch(url, options);
  if (status === "loading") {
    content = <Preloader />;
  }
  if (error) {
  }
  if (status === "fetched" && data) {
    content = <Article id="article" values={data} />;
  }
  return <main>{content}</main>;
};

export default Read;
