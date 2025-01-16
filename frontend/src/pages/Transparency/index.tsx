import BlogHero from "../../components/BlogHero";
import DataTableTransparency from "../../common/DataTableTransparency";
import NavBarC from "../../components/NavBar";

const Transparency = () => {
  return (
    <>
      <BlogHero
        content="Ley de Transparencia y Acceso a la Información."
        title="Unidad de Transparencia Municipal"
        subtitle=""
        iconSrc={""}
        src="IMG_0316.jpg"
        srcImgLoc="page"
      />
      <NavBarC />
      <DataTableTransparency />
    </>
  );
};

export default Transparency;
