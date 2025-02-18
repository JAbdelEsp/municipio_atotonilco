import ButtonComponent from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HomeHeroContent,
  HeroEyebrown,
  HomeHeroW,
  HomeHeroWrapper,
  IconBlock,
  Heading,
  BgLines,
  BgLinesGradient,
  BgLine,
} from "./styles";
import { HomeHeroProps } from "./types";

const HomeHero = ({ scrollDown }: HomeHeroProps) => {
  return (
    <HomeHeroW>
      <HomeHeroContent>
        <HomeHeroWrapper>
          <HeroEyebrown>
            <IconBlock>
              <SvgIcon src="logo.svg" width="250px" height="" />
            </IconBlock>
          </HeroEyebrown>
          <Heading>Bienvenidos</Heading>
          <ButtonComponent type="button" onClick={scrollDown}>
            Explorar
          </ButtonComponent>
        </HomeHeroWrapper>
        <BgLines>
          <BgLinesGradient />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
          <BgLine />
        </BgLines>
      </HomeHeroContent>
    </HomeHeroW>
  );
};
export default HomeHero;
