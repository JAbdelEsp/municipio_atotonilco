import { useEffect } from "react";
import BlogContent from "../../components/BlogContent";
import BlogHero from "../../components/BlogHero";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BlogHero
        content=" Noticias: Los ultimos eventos, noticias y actualizaciones de Atotonilco
        el Grande."
        title="Explora las Ultimas"
        subtitle="Noticias del Municipio."
        iconSrc={""}
        src="IMG_0316.jpg"
        srcImgLoc="page"
      />
      <BlogContent />
    </>
  );
};
export default Blog;
