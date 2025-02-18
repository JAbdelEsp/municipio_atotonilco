import {
  BodyContent,
  Container,
  LightText,
  MainTitle,
  Section,
} from "./styles";

const FeaturedTitle = () => {
  return (
    <BodyContent>
      <Section className="featured">
        <Container>
          <div>
            <MainTitle className="center">
              Noticias
              <LightText className="lighter"> Importantes</LightText>
            </MainTitle>
          </div>
        </Container>
      </Section>
    </BodyContent>
  );
};

export default FeaturedTitle;
