import { useEffect, useState } from "react";
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
import Preloader from "../../components/Preloader";
const AddTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const goTo = (route: string) => {
    navigate(route);
  };
  const url = import.meta.env.VITE_API_URL + "news/records";
  const { data, status, error } = useFetch<NewsData>(url);

  const items = Array.isArray(data) ? data : [];

  const [isShow, setIsShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    const element = document.getElementById("start");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    if (startIndex + itemsPerPage < items.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    const element = document.getElementById("start");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  let content;
  if (status === "loading") {
    content = <Preloader />;
  }
  if (error) {
    content = <></>;
  }
  if (status === "fetched" && data) {
    content = (
      <Container>
        <div>
          <WNode>
            <VerticalGrid className="flip">
              <WNode>
                <div>
                  <div className="w-dyn-list" id="start">
                    <HorizontalGrid>
                      {visibleItems.map((item: any, key: number) => (
                        <ListItem key={key}>
                          <BlogMainWrapper className="horizontal">
                            <ImageClip>
                              <ImageWrap className="">
                                <Image
                                  src={item.id_news + "/" + item.image}
                                  alt={item.image}
                                  location={item.path}
                                  cls="paralax-image"
                                />
                                <CategoryAbsolute>
                                  {item.neighborhood}
                                </CategoryAbsolute>
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
                        disabled={currentPage === 0}
                        onClick={prevPage}
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
                        disabled={startIndex + itemsPerPage >= items.length}
                        onClick={nextPage}
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
              <WNode className="sticky">
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
    );
  }

  return (
    <Section className="add-top">
      <Modal show={isShow} set={setIsShow} />
      {content}
    </Section>
  );
};

export default AddTop;
