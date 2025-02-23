import { useEffect } from "react";
import AddTop from "../../common/AddTop";
import FeaturedTitle from "../../common/FeaturedTitle";

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FeaturedTitle />
      <AddTop />
    </>
  );
};
export default Articles;
