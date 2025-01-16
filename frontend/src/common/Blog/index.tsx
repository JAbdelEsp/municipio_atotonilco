import ButtonComponent from "../Button";
import Image from "../Image";
import TextLink from "../TextLink";
import {
  BgForAnimation,
  Container,
  ContentWidthBlock,
  EyebrowOrnament,
  EyebrowOrnamentLine,
  EyebrowOrnamentText,
  Heading,
  Heading2,
  Padding,
  Paragraph,
  RevealImageTrigger,
  Section,
  Service3Link,
  Services3Content,
  Services3Image,
  Services3Item,
  Services3List,
  Services3Overlay,
  Services3Wrapper,
} from "./styles";

const Blog = ({ id }: any) => {
  const OnClick = () => {};
  return (
    <Section id={id}>
      <Container>
        <Padding>
          <ContentWidthBlock className="with-margin-bottom">
            <EyebrowOrnament>
              <EyebrowOrnamentLine />
              <EyebrowOrnamentText>Text</EyebrowOrnamentText>
              <EyebrowOrnamentLine />
            </EyebrowOrnament>
            <Heading className="is-regular">Title</Heading>
          </ContentWidthBlock>
          <Services3Wrapper>
            <Services3List>
              <Services3Item>
                <Services3Image className="with">
                  <RevealImageTrigger>
                    <Image
                      src="462620438_939996391507390_3919165551938091982_n.jpg"
                      alt=""
                      location="services"
                      cls="cover-image fit-top"
                    />
                    <BgForAnimation />
                  </RevealImageTrigger>
                </Services3Image>
                <Services3Content>
                  <Service3Link>
                    <Heading2 className="is-service-3-title">Title</Heading2>
                  </Service3Link>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Paragraph>
                  <TextLink text="Ver Mas" />
                </Services3Content>
                <Services3Overlay />
              </Services3Item>
            </Services3List>
          </Services3Wrapper>
        </Padding>
      </Container>
    </Section>
  );
};
export default Blog;
