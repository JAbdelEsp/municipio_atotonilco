import { Col, Row } from "antd";
import {
  AlignCenter,
  BannerGrid,
  BannerSection,
  BannerSectionSecond,
  BlogMainWrapper,
  Footer,
  ImageWrap,
  LinePageDividerDark,
  Margin40,
  ThirdTitle,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect } from "react";
import { getBanner } from "../../slices/bannerSlices";
const FooterComponent = () => {
  const dispatch = useAppDispatch();
  const banner = useAppSelector((state) => state.banners.banner);
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);
  return (
    <Footer>
      <BannerSection>
        <div>
          <AlignCenter>
            <ThirdTitle>Avisos</ThirdTitle>
          </AlignCenter>
          <Margin40>
            <BannerGrid>
              {banner.length > 0 &&
                banner.map((item, key) => (
                  <BlogMainWrapper key={key}>
                    <ImageWrap>
                      <img
                        src={
                          import.meta.env.VITE_API_URL +
                          "public/banners/" +
                          item.title +
                          "/" +
                          item.picture
                        }
                        alt={item.title}
                        className="paralax-image2"
                      />
                    </ImageWrap>
                  </BlogMainWrapper>
                ))}
            </BannerGrid>
          </Margin40>
        </div>
      </BannerSection>
      <LinePageDividerDark />
      <BannerSectionSecond>
        <Row>
          <Col lg={24} md={24} xs={24} sm={24}>
            <img
              style={{ width: "220px", display: "block", margin: "0 auto" }}
              src="/images/brand/logo.svg"
              alt="Municipio de Atotonilco el Grande"
            />
          </Col>
          <Col xs={24} sm={24} md={4} lg={4}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="image">
                <a href="tel:911">
                  <img
                    style={{ width: "90px" }}
                    src="/images/brand/911.png"
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="image">
                <a href="tel:7747432002">
                  <img
                    style={{ width: "70px" }}
                    src="/images/brand/Proteccion-civil-logo-gen.png"
                    alt=""
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={20}
            lg={20}
            style={{ textAlign: "right", color: "white", marginTop: "5em" }}
          >
            &copy; Municipio de Atotonilco el Grande 2024 - 2027
          </Col>
        </Row>
      </BannerSectionSecond>
    </Footer>
  );
};

export default FooterComponent;
