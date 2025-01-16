import BlogHero from "../../components/BlogHero";
import DataTableObras from "../../components/DataTableObras";
import NavBarC from "../../components/NavBar";

const Obras = () => {
  return (
    <>
      <BlogHero
        content="Ley de Transparencia y Acceso a la Información."
        title="Obras Públicas"
        subtitle=""
        iconSrc={""}
        src="IMG_0316.jpg"
        srcImgLoc="page"
      />
      <NavBarC />
      <DataTableObras />
    </>
  );
};

export default Obras;
