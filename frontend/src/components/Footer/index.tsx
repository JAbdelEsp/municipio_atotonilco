import Image from "../../common/Image";
import {
  AlignCenter,
  BannerGrid,
  BannerSection,
  BlogMainWrapper,
  ButtonIconMain,
  ButtonIconSvg,
  Footer,
  FooterGridSecond,
  ImageWrap,
  LinePageDividerDark,
  Margin30,
  Margin40,
  ThirdTitle,
} from "./styles";
const FooterComponent = () => {
  return (
    <Footer>
      <BannerSection>
        <div>
          <AlignCenter>
            <ThirdTitle>Información Importante</ThirdTitle>
          </AlignCenter>
          <Margin40>
            <BannerGrid>
              <BlogMainWrapper>
                <ImageWrap>
                  <img
                    src="public/images/banner/473594057_1030751205749473_2101976893090831221_n.jpg"
                    alt=""
                    className="paralax-image2"
                  />
                  {/* <ButtonIconMain>
                    <ButtonIconSvg />
                  </ButtonIconMain> */}
                </ImageWrap>
              </BlogMainWrapper>
            </BannerGrid>
          </Margin40>
        </div>
      </BannerSection>
      <LinePageDividerDark />
      <div>
        <FooterGridSecond>
          <Margin30>
            <img
              src="public/images/brand/logo.svg"
              alt="Municipio de Atotonilco el Grande"
            />
          </Margin30>
          <p>&copy; 2025 Municipio de Atotonilco el Grande </p>
        </FooterGridSecond>
      </div>
    </Footer>
  );
};

export default FooterComponent;
