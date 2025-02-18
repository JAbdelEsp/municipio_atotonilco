import { Col, Row } from "antd";
import Image from "../../common/Image";
import {
  AlignCenter,
  BannerGrid,
  BannerSection,
  BlogMainWrapper,
  ButtonIconMain,
  ButtonIconSvg,
  FlexSpaceBetween,
  Footer,
  FooterGridSecond,
  ImageWrap,
  LinePageDividerDark,
  Margin30,
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
            <ThirdTitle>Información Importante</ThirdTitle>
          </AlignCenter>
          <Margin40>
            <BannerGrid>
              {banner &&
                banner.map((item, key) => (
                  <BlogMainWrapper>
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
      <Row>
        <Col span={8}>
          <img
            style={{ width: "220px", display: "block", margin: "0 auto" }}
            src="/public/images/brand/logo.svg"
            alt="Municipio de Atotonilco el Grande"
          />
          <Row>
            <Col span={24} style={{ color: "white" }}>
              &copy; Municipio de Atotonilco el Grande 2024 - 2027
            </Col>
          </Row>
        </Col>
        <Col span={8}></Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Row>
            <Col span={12}>
              <a href="tel:+52911">
                <img
                  style={{ width: "90px" }}
                  src="/public/images/brand/911.png"
                  alt=""
                />
              </a>
            </Col>
            <Col span={12}>
              <a href="tel:911">
                <img
                  style={{ width: "70px" }}
                  src="/public/images/brand/Proteccion-civil-logo-gen.png"
                  alt=""
                />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
