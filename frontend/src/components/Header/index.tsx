import { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import { useNavigate } from "react-router-dom";
import FullScreenMenu from "../FullScreenMenu";
import { HashLink } from "react-router-hash-link";
import {
  NavBar,
  NavBarInner,
  MenuWrapper,
  NavLinks,
  CustomNavLink,
  BrandLogo,
  Span,
} from "./styles";

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const history = useNavigate();
  const goTo = (path: string) => history(path);
  const toggleMenu = () => setVisibility(!visible);
  return (
    <>
      <FullScreenMenu toggleMenu={toggleMenu} visible={visible} />
      <NavBar>
        <NavBarInner>
          <CustomNavLink>
            <BrandLogo>
              <SvgIcon src="logo_2.svg" width="80px" height="" />
            </BrandLogo>
          </CustomNavLink>
          <MenuWrapper>
            <NavLinks>
              <CustomNavLink onClick={() => goTo("/")}>
                <Span>Inicio</Span>
              </CustomNavLink>
              <CustomNavLink onClick={() => goTo("/sevac")}>
                <Span>SEVAC</Span>
              </CustomNavLink>
              <CustomNavLink>
                <HashLink to={"/direcciones/#PlaneacionInfoPub"}>
                  <Span>Planeación</Span>
                </HashLink>
              </CustomNavLink>
              <CustomNavLink onClick={() => goTo("/transparencia")}>
                <Span>Transparencia</Span>
              </CustomNavLink>
              <CustomNavLink onClick={() => goTo("/tramites")}>
                <Span>Tramites y Servicios</Span>
              </CustomNavLink>
              <CustomNavLink onClick={() => goTo("/noticias")}>
                <Span>Noticias</Span>
              </CustomNavLink>
              <CustomNavLink onClick={() => goTo("/municipio")}>
                <Span>Tu Municipio</Span>
              </CustomNavLink>
              <CustomNavLink onClick={() => goTo("/contacto")}>
                <Span>Contacto</Span>
              </CustomNavLink>
            </NavLinks>
            <div className="button-for-open-menu" onClick={() => toggleMenu()}>
              <div
                className="burger-menu"
                style={{ width: "2em", height: "1.3em" }}
              >
                <div className="burger-menu-line"></div>
                <div className="burger-menu-line"></div>
                <div className="burger-menu-line"></div>
              </div>
              <div
                className="burger-menu-bg"
                style={{
                  display: "none",
                  transform:
                    "translate3d(-0%, 0px, 0px) scale3d(3, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              ></div>
            </div>
          </MenuWrapper>
        </NavBarInner>
      </NavBar>
    </>
  );
};
export default Header;
