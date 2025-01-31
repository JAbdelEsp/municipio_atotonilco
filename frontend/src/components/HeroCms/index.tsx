import ButtonComponent from "../../common/Button";
import Image from "../../common/Image";
import {
  CmsHero,
  CmsHeroBg,
  CmsHeroContent,
  CmsHeroLayout,
  CmsHeroOverlay,
  Container,
  Heading,
  OrnamentHorizontal,
  OrnamentLine,
  OrnamentLineDot,
  Paragraph,
  RevealImageTrigger,
} from "./styles";

const HeroCms = ({ scrollDown, title, description }: any) => {
  return (
    <CmsHero>
      <Container>
        <CmsHeroLayout>
          <Heading className="is-cms-hero-title">{title}</Heading>
          <OrnamentHorizontal>
            <OrnamentLine />
            <OrnamentLineDot />
            <OrnamentLine />
          </OrnamentHorizontal>
          <CmsHeroContent>
            <Paragraph className="is-large">{description}</Paragraph>
            <ButtonComponent onClick={scrollDown} type={"button"}>
              Explorar
            </ButtonComponent>
          </CmsHeroContent>
        </CmsHeroLayout>
      </Container>
      <CmsHeroBg>
        <CmsHeroOverlay />
        <RevealImageTrigger>
          <img
            src="/images/main/IMG_0372.jpg"
            alt=""
            className="cover-image fit-top"
          />{" "}
        </RevealImageTrigger>
      </CmsHeroBg>
    </CmsHero>
  );
};

export default HeroCms;
