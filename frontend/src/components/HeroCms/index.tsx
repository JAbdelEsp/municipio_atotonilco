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

const HeroCms = ({ scrollDown }: any) => {
  return (
    <CmsHero>
      <Container>
        <CmsHeroLayout>
          <Heading className="is-cms-hero-title">Obras Publicas</Heading>
          <OrnamentHorizontal>
            <OrnamentLine />
            <OrnamentLineDot />
            <OrnamentLine />
          </OrnamentHorizontal>
          <CmsHeroContent>
            <Paragraph className="is-large">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              vel rem porro sapiente fuga accusamus ea, consequatur recusandae
              iure nihil, dolor id voluptate quis a cum dolores officia ab
              aperiam!
            </Paragraph>
            <ButtonComponent onClick={scrollDown} type={"button"}>
              Explorar
            </ButtonComponent>
          </CmsHeroContent>
        </CmsHeroLayout>
      </Container>
      <CmsHeroBg>
        <CmsHeroOverlay />
        <RevealImageTrigger>
          <Image
            src="462620438_939996391507390_3919165551938091982_n.jpg"
            alt=""
            location="services"
            cls="cover-image fit-top"
          />
        </RevealImageTrigger>
      </CmsHeroBg>
    </CmsHero>
  );
};

export default HeroCms;
