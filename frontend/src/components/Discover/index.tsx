import Image from "../../common/Image";
import TextLink from "../../common/TextLink";
import {
  BgForAnimation,
  ContainerGrid,
  Heading,
  OrnamentVertical,
  OrnamentVerticalDot,
  OrnamentVerticalLine,
  RevealImageTrigger,
  RichText,
  Section,
  ServiceItem,
  ServiceNumberText,
  ServicesList,
  ServiceSmallTitle,
  ServiceSmallTitleBlock,
  ServicesWrapper,
  WNode,
} from "./styles";

const Discover = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <ServicesWrapper>
        <ServicesList>
          <ServiceItem>
            <ContainerGrid className="in-services">
              <ServiceNumberText>01.</ServiceNumberText>
              <WNode className="service-image">
                <RevealImageTrigger>
                  <Image
                    src="462620438_939996391507390_3919165551938091982_n.jpg"
                    alt=""
                    cls="cover-image fit-top paralax-image"
                    location="services"
                  />
                  <BgForAnimation />
                </RevealImageTrigger>
              </WNode>
              <ServiceSmallTitleBlock>
                <ServiceSmallTitle>Paragraph</ServiceSmallTitle>
              </ServiceSmallTitleBlock>
              <WNode className="service-content">
                <Heading className="is-services-title">Obras Publicas</Heading>
                <RichText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis nobis maiores repellat tenetur id iste doloremque
                  eaque earum sit, odio at unde delectus facilis, ad cumque
                  magni sunt accusamus veritatis?
                </RichText>
                <OrnamentVertical className="is-align-left">
                  <OrnamentVerticalLine />
                  <OrnamentVerticalDot />
                  <OrnamentVerticalLine />
                </OrnamentVertical>
                <TextLink text="Ver Mas" />
              </WNode>
            </ContainerGrid>
          </ServiceItem>
        </ServicesList>
      </ServicesWrapper>
    </Section>
  );
};

export default Discover;
