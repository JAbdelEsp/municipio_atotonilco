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

const NotFound = () => {
  return (
    <main>
      <CmsHero>
        <Container>
          <CmsHeroLayout>
            <Heading className="is-cms-hero-title">
              Ohhhh no!!.... página no encontrada.
            </Heading>
            <OrnamentHorizontal>
              <OrnamentLine />
              <OrnamentLineDot />
              <OrnamentLine />
            </OrnamentHorizontal>
            <CmsHeroContent>
              <Paragraph className="is-large"></Paragraph>
            </CmsHeroContent>
          </CmsHeroLayout>
        </Container>
        <CmsHeroBg>
          <CmsHeroOverlay />
          <RevealImageTrigger>
            <img
              src="/images/main/IMG_0349.jpg"
              alt="Ex-convento de San Agustín, Atotonilco el Grande"
              className="cover-image fit-top"
            />
          </RevealImageTrigger>
        </CmsHeroBg>
      </CmsHero>
    </main>
  );
};

export default NotFound;
