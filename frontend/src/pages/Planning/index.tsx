import BlogHero from "../../components/BlogHero";
import NavBarC from "../../components/NavBar";
import OrganizationChart from "../../components/OrganizationChart";

const Planning = () => {
  return (
    <>
      <BlogHero
        content="Ley de Transparencia y Acceso a la Información."
        title="Dirección de Planeación"
        subtitle=""
        iconSrc={""}
        src="IMG_0316.jpg"
        srcImgLoc="page"
      />
      <NavBarC />
      <OrganizationChart data={[]} />
    </>
  );
};

export default Planning;
