import { useEffect, useRef, useState } from "react";
import { LightText } from "../FeaturedTitle/styles";
import Image from "../Image";
import { SvgIcon } from "../SvgIcon";
import parse from "html-react-parser";
import {
  Container,
  BlogMainWrapper,
  HorizontalGrid,
  ImageClip,
  ImageWrap,
  ListItem,
  Section,
  VerticalGrid,
  WNode,
  CategoryAbsolute,
  ButtonIconMain,
  ButtonIconSvg,
  HorizontalContent,
  DataFlex,
  DataInsidde,
  DataImage,
  DataText,
  LineNavigation,
  BlogTitle,
  PaginationWrapper,
  ButtonPagination,
  ButtonIconMainForPagination,
  ButtonIconMainForPaginationP,
  StickyBar,
  StickyContent,
  BannerSideBar,
  AuthorImage,
  ThirdTitle,
  ButtonPaginationN,
} from "./styles";
import Modal from "../Modal";
import useFetch from "../../services";
import { NewsData } from "../types";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
const AddTop = () => {
  const startRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const goTo = (route: string) => {
    navigate(route);
  };
  const url = "https://k753lncj-9000.usw3.devtunnels.ms/news/records";
  const { data, status, error } = useFetch<NewsData>(url);
  const [isShow, setIsShow] = useState(false);
  const [next, setNext] = useState(2);
  const [prev, setPrev] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const _handleClick = (item: any) => {
    const len = Array.isArray(data) && data.length;
    const element = document.getElementById("start");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    if (prev == 2) {
      setDisabledPrev(true);
      setDisabledNext(false);
    }
    switch (item) {
      case "next":
        setDisabledPrev(false);
        if (typeof len === "number" && len - 1 === next) {
          setDisabledNext(true);
        }
        setPrev(prev + 2);
        setNext(next + 2);
        break;
      case "prev":
        setPrev(prev - 2);
        setNext(next - 2);
        break;
    }
  };
  return (
    <Section className="add-top">
      <Modal show={isShow} set={setIsShow} />
      <Container>
        <div>
          <WNode>
            <VerticalGrid className="flip">
              <WNode>
                <div>
                  <div className="w-dyn-list" id="start">
                    <HorizontalGrid>
                      {Array.isArray(data) &&
                        data.slice(prev, next).map((item: any) => (
                          <ListItem>
                            <BlogMainWrapper className="horizontal">
                              <ImageClip>
                                <ImageWrap className="">
                                  <Image
                                    src={item.image}
                                    alt={item.image}
                                    location={item.path}
                                    cls="paralax-image"
                                  />
                                  <CategoryAbsolute>Noticias</CategoryAbsolute>
                                  <ButtonIconMain
                                    onClick={() =>
                                      goTo("/vermas?noticia=" + item.id_news)
                                    }
                                  >
                                    <ButtonIconSvg>
                                      <SvgIcon
                                        src="read-svgrepo-com.svg"
                                        width="20px"
                                        height=""
                                      />
                                    </ButtonIconSvg>
                                  </ButtonIconMain>
                                </ImageWrap>
                              </ImageClip>
                              <HorizontalContent>
                                <div>
                                  <DataFlex>
                                    <DataInsidde>
                                      <DataImage>
                                        <SvgIcon
                                          src="calendar-data-light.svg"
                                          width="15px"
                                          height=""
                                        />
                                      </DataImage>
                                      <DataText>{item.date}</DataText>
                                    </DataInsidde>
                                    <LineNavigation className="second" />
                                    <DataInsidde>
                                      <DataImage>
                                        <SvgIcon
                                          src="eaf_time-light.svg"
                                          width="15px"
                                          height=""
                                        />
                                      </DataImage>
                                      <DataText>{item.time}</DataText>
                                    </DataInsidde>
                                  </DataFlex>
                                </div>
                                <div className="margin-20px">
                                  <BlogTitle className="for-horizontal">
                                    {item.title}
                                  </BlogTitle>
                                </div>
                                <div className="margin-30px">
                                  {parse(
                                    item.content.length > 350
                                      ? item.content.slice(0, 350 - 1) +
                                          "&hellip;"
                                      : item.content
                                  )}
                                </div>
                              </HorizontalContent>
                            </BlogMainWrapper>
                          </ListItem>
                        ))}
                    </HorizontalGrid>
                    <PaginationWrapper className="margin-30px">
                      <ButtonPagination
                        disabled={disabledPrev}
                        onClick={() => {
                          _handleClick("prev");
                        }}
                        className="previous"
                      >
                        <ButtonIconMainForPagination className="for-pagination">
                          <ButtonIconSvg className="icon-pagination is-absolute w-embed rotate">
                            <SvgIcon
                              src="arrow-next-svgrepo-com.svg"
                              width="20px"
                              height=""
                            />
                          </ButtonIconSvg>
                        </ButtonIconMainForPagination>
                        <div className="w-inline-block">Anterior</div>
                      </ButtonPagination>
                      <ButtonPaginationN
                        disabled={disabledNext}
                        onClick={() => {
                          _handleClick("next");
                        }}
                      >
                        <div className="w-inline-block">Siguiente</div>
                        <ButtonIconMain className="for-pagination">
                          <ButtonIconSvg className="icon-pagination is-absolute w-embed">
                            <SvgIcon
                              src="arrow-next-svgrepo-com.svg"
                              width="20px"
                              height=""
                            />
                          </ButtonIconSvg>
                        </ButtonIconMain>
                      </ButtonPaginationN>
                    </PaginationWrapper>
                  </div>
                </div>
              </WNode>
              <WNode>
                <StickyBar>
                  <StickyContent className="._80">
                    <BannerSideBar>
                      <AuthorImage />
                      <div className="margin-15px">
                        <ThirdTitle className="for-author">
                          Lic. Elba Leticia
                          <LightText> Chapa Guerrero</LightText>
                        </ThirdTitle>
                        <ThirdTitle className="for-author">
                          Presidenta
                          <LightText> Municipal</LightText>
                        </ThirdTitle>
                      </div>
                      <ButtonIconMain
                        onClick={() => {
                          setIsShow(true);
                        }}
                      >
                        <ButtonIconSvg>
                          <SvgIcon
                            src="read-svgrepo-com.svg"
                            width="20px"
                            height=""
                          />
                        </ButtonIconSvg>
                      </ButtonIconMain>
                      <div className="margin-10px">
                        <h4>Querido Pueblo Atotonilquense: </h4>
                        <p>
                          Nuestro Municipio Atotonilco el Grande, esta viviendo
                          una etapa historica que sin duda se quedará en la
                          memoria de todas y todos ustedes, por primera vez el
                          rumbo de nuestro municipio esta en manos de una
                          mujer...
                        </p>
                      </div>
                    </BannerSideBar>
                    <div className="margin-60px"></div>
                  </StickyContent>
                </StickyBar>
              </WNode>
            </VerticalGrid>
          </WNode>
        </div>
      </Container>
    </Section>
  );
};

export default AddTop;
