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
              lo más
              <LightText className="lighter"> relevante</LightText>
            </MainTitle>
          </div>
        </Container>
      </Section>
    </BodyContent>
  );
};

export default FeaturedTitle;
