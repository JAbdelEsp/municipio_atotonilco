import { useEffect } from "react";
import Image from "../../common/Image";
import { SvgIcon } from "../../common/SvgIcon";
import { useNavigate } from "react-router-dom";
import { NewsData } from "../../common/types";
import {
  BlogMainSmall,
  BlogMainWrapper,
  BlogTitleSmall,
  ButtonIconMain,
  ButtonIconSvg,
  ButtonIconSvgRight,
  CategoryAbsolute,
  CategoryRight,
  CategoryTextLink,
  ColItem101,
  ColItem102,
  ColList3,
  ColListWrapper2,
  ColListWrapper3,
  Container,
  DataFlex,
  DataImage,
  DataInsidde,
  DataText,
  Grid3Cols,
  ImageClip,
  ImageWrap,
  InsidePhoto,
  LatestGrid,
  LatestNewsGrid,
  LightText,
  LineBelow,
  LineNavigation,
  LinePageDivider,
  Section,
  SmallBlock,
  StickyDivWrapper,
  ThirdTitle,
  TopTitle,
  WNode,
} from "./styles";

const OrganizationChart = (data: { data: NewsData[] }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const goTo = (route: string) => {
    navigate(route);
  };
  return (
    <Section className="dark">
      <LinePageDivider />
      <Container>
        <div>
          <Grid3Cols className="grid-3-cols">
            <WNode>
              <StickyDivWrapper>
                <div>
                  <div className="margin_25">
                    <ColListWrapper3>
                      <LatestGrid>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Asamblea Municipal
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Órgano Interno de Control
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Secretaría General
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Agua Potable y Alcantarillado
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Seguridad Pública Municipal
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Tesoreria Municipal
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Planeación
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Desarrollo Rural
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Reglamentos, Comercio y
                                Espectáculos
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Coordinación de Educación
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Instancia Municipal para el Desarrollo de las
                                Mujeres
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Registro de lo Familiar
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Ecología
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                      </LatestGrid>
                    </ColListWrapper3>
                  </div>
                </div>
              </StickyDivWrapper>
            </WNode>

            <WNode>
              <div className="margin_25">
                <ColListWrapper2>
                  <ColList3>
                    <ColItem101>
                      <BlogMainWrapper className="light-color main">
                        <ImageClip>
                          <ImageWrap className="landscape">
                            <img
                              src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                              alt=""
                              className="paralax-image"
                            />
                            <InsidePhoto className="secondInside">
                              <DataFlex>
                                <LineNavigation className="second darker" />
                              </DataFlex>
                              <div className="margin_20">
                                <div>
                                  <div className="color-white">
                                    Sistema DIF Municipal
                                  </div>
                                </div>
                              </div>
                              <div className="margin_25">
                                <CategoryRight className="relativeRight">
                                  <CategoryAbsolute className="relativeLeft color">
                                    Noticia Destacada
                                  </CategoryAbsolute>
                                  <ButtonIconMain className="relativeRight">
                                    <ButtonIconSvgRight />
                                  </ButtonIconMain>
                                </CategoryRight>
                              </div>
                            </InsidePhoto>
                          </ImageWrap>
                        </ImageClip>
                      </BlogMainWrapper>
                    </ColItem101>
                  </ColList3>
                  <ColList3 style={{ marginTop: "3em" }}>
                    <ColItem101>
                      <BlogMainWrapper className="light-color main">
                        <ImageClip>
                          <ImageWrap className="landscape">
                            <img
                              src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                              alt=""
                              className="paralax-image"
                            />
                            <InsidePhoto className="secondInside">
                              <DataFlex>
                                <LineNavigation className="second darker" />
                              </DataFlex>
                              <div className="margin_20">
                                <div>
                                  <div className="color-white">
                                    Dirección de Obras Públicas
                                  </div>
                                </div>
                              </div>
                              <div className="margin_25">
                                <CategoryRight className="relativeRight">
                                  <CategoryAbsolute className="relativeLeft color">
                                    Noticia Destacada
                                  </CategoryAbsolute>
                                  <ButtonIconMain className="relativeRight">
                                    <ButtonIconSvgRight />
                                  </ButtonIconMain>
                                </CategoryRight>
                              </div>
                            </InsidePhoto>
                          </ImageWrap>
                        </ImageClip>
                      </BlogMainWrapper>
                    </ColItem101>
                  </ColList3>
                  <ColList3 style={{ marginTop: "3em" }}>
                    <ColItem101>
                      <BlogMainWrapper className="light-color main">
                        <ImageClip>
                          <ImageWrap className="landscape">
                            <img
                              src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                              alt=""
                              className="paralax-image"
                            />
                            <InsidePhoto className="secondInside">
                              <DataFlex>
                                <LineNavigation className="second darker" />
                              </DataFlex>
                              <div className="margin_20">
                                <div>
                                  <div className="color-white">
                                    Desarrollo Social
                                  </div>
                                </div>
                              </div>
                              <div className="margin_25">
                                <CategoryRight className="relativeRight">
                                  <CategoryAbsolute className="relativeLeft color">
                                    Noticia Destacada
                                  </CategoryAbsolute>
                                  <ButtonIconMain className="relativeRight">
                                    <ButtonIconSvgRight />
                                  </ButtonIconMain>
                                </CategoryRight>
                              </div>
                            </InsidePhoto>
                          </ImageWrap>
                        </ImageClip>
                      </BlogMainWrapper>
                    </ColItem101>
                  </ColList3>
                </ColListWrapper2>
              </div>
            </WNode>
            <WNode id="WNode">
              <StickyDivWrapper>
                <div>
                  <div className="margin_25">
                    <ColListWrapper3>
                      <LatestGrid>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Subidirección de Protección Civil
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Comunicación Social
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección Jurídica
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Conciliador Municipal
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>Tianguis Ganadero</BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Coordinación de Juventud y Deporte
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Mantenimiento Vehicular
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Coordinación de Eventos Especiales
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Archivo General Municipal
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Dirección de Desarrollo Económico, Turismo y
                                Cultura
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Unidad de Transparencia y Acceso a la
                                Información
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                        <ColItem102>
                          <BlogMainSmall className="vertical down">
                            <ImageClip>
                              <ImageWrap className="category-ratio">
                                <img
                                  src="/public/images/main/PHOTO-2025-01-28-15-47-53.jpg"
                                  alt=""
                                  className="paralax-image"
                                />
                                <ButtonIconMain className="right">
                                  <ButtonIconSvg />
                                </ButtonIconMain>
                              </ImageWrap>
                            </ImageClip>
                            <SmallBlock className="change-radius">
                              <DataFlex></DataFlex>
                              <BlogTitleSmall>
                                Coordinación Municipal de Bibliotecas
                              </BlogTitleSmall>
                            </SmallBlock>
                          </BlogMainSmall>
                        </ColItem102>
                      </LatestGrid>
                    </ColListWrapper3>
                  </div>
                </div>
              </StickyDivWrapper>
            </WNode>
          </Grid3Cols>
        </div>
      </Container>
    </Section>
  );
};

export default OrganizationChart;
