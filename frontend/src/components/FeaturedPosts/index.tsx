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

const FeaturedPosts = (data: { data: NewsData[] }) => {
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
              <TopTitle className="no-grid">
                <WNode>
                  <ThirdTitle>
                    Ultimas
                    <LightText> Noticias</LightText>
                  </ThirdTitle>
                </WNode>
              </TopTitle>
              <div className="margin_25">
                <div>
                  {data.data.slice(0, 4).map((item: any, key: number) => {
                    return (
                      <LatestNewsGrid key={key}>
                        <div>
                          <BlogMainWrapper className="video-center">
                            <ImageWrap className="video-ratio">
                              <Image
                                src={item.image}
                                alt={item.title}
                                cls="paralax-image"
                                location={item.path}
                              />
                            </ImageWrap>
                            <ButtonIconMain
                              className="video-category"
                              onClick={() =>
                                goTo("/vermas?noticia=" + item.id_news)
                              }
                            >
                              <ButtonIconSvg />
                            </ButtonIconMain>
                            <CategoryTextLink>
                              <LineBelow />
                            </CategoryTextLink>
                          </BlogMainWrapper>
                        </div>
                      </LatestNewsGrid>
                    );
                  })}
                </div>
              </div>
            </WNode>
            <WNode>
              <TopTitle className="no-grid">
                <WNode>
                  <ThirdTitle>
                    Nota
                    <LightText> Destacada</LightText>
                  </ThirdTitle>
                </WNode>
              </TopTitle>
              <div className="margin_25">
                <ColListWrapper2>
                  <ColList3>
                    {data.data.slice(0, 1).map((item: any, key: number) => {
                      if (item.featured == true) {
                        return (
                          <ColItem101 key={key}>
                            <BlogMainWrapper className="light-color main">
                              <ImageClip>
                                <ImageWrap className="landscape">
                                  <Image
                                    src={item.image}
                                    alt={item.image}
                                    cls="paralax-image"
                                    location={item.path}
                                  />
                                  <InsidePhoto className="secondInside">
                                    <DataFlex>
                                      <DataInsidde>
                                        <DataImage className="invert">
                                          <SvgIcon
                                            src="calendar-data-light.svg"
                                            width="15px"
                                            height=""
                                          />
                                        </DataImage>
                                        <DataText>{item.date}</DataText>
                                      </DataInsidde>
                                      <LineNavigation className="second darker" />
                                      <DataInsidde>
                                        <DataImage className="invert">
                                          <SvgIcon
                                            src="eaf_time-light.svg"
                                            width="15px"
                                            height=""
                                          />
                                        </DataImage>
                                        <DataText>{item.time}</DataText>
                                      </DataInsidde>
                                    </DataFlex>
                                    <div className="margin_20">
                                      <div>
                                        <div className="color-white">
                                          {item.title}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="margin_25">
                                      <CategoryRight className="relativeRight">
                                        <CategoryAbsolute className="relativeLeft color">
                                          Noticia Destacada
                                        </CategoryAbsolute>
                                        <ButtonIconMain
                                          className="relativeRight"
                                          onClick={() =>
                                            goTo(
                                              "/vermas?noticia=" + item.id_news
                                            )
                                          }
                                        >
                                          <ButtonIconSvgRight />
                                        </ButtonIconMain>
                                      </CategoryRight>
                                    </div>
                                  </InsidePhoto>
                                </ImageWrap>
                              </ImageClip>
                            </BlogMainWrapper>
                          </ColItem101>
                        );
                      }
                    })}
                  </ColList3>
                </ColListWrapper2>
              </div>
            </WNode>
            <WNode id="WNode">
              <StickyDivWrapper>
                <div>
                  <TopTitle className="no-grid">
                    <WNode>
                      <ThirdTitle>
                        Lo Mas
                        <LightText> Popular</LightText>
                      </ThirdTitle>
                    </WNode>
                  </TopTitle>
                  <div className="margin_25">
                    <ColListWrapper3>
                      <LatestGrid>
                        <ColItem102>
                          {/* limit 3 */}
                          {data.data
                            .slice(0, 4)
                            .map((item: any, key: number) => {
                              if (item.views > 20) {
                                return (
                                  <BlogMainSmall
                                    className="vertical down"
                                    key={key}
                                  >
                                    <ImageClip>
                                      <ImageWrap className="category-ratio">
                                        <Image
                                          src={item.image}
                                          alt={item.image}
                                          cls="paralax-image"
                                          location={item.path}
                                        />
                                        <ButtonIconMain
                                          className="right"
                                          onClick={() =>
                                            goTo(
                                              "/vermas?noticia=" + item.id_news
                                            )
                                          }
                                        >
                                          <ButtonIconSvg />
                                        </ButtonIconMain>
                                      </ImageWrap>
                                    </ImageClip>
                                    <SmallBlock className="change-radius">
                                      <DataFlex>
                                        <DataInsidde>
                                          <DataImage>
                                            <SvgIcon
                                              src="eaf_time-light.svg"
                                              width="15px"
                                              height=""
                                            />
                                          </DataImage>
                                          <DataText>
                                            {item.time} Lectura
                                          </DataText>
                                        </DataInsidde>
                                      </DataFlex>
                                      <BlogTitleSmall>
                                        {item.title}
                                      </BlogTitleSmall>
                                    </SmallBlock>
                                  </BlogMainSmall>
                                );
                              }
                            })}
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

export default FeaturedPosts;
