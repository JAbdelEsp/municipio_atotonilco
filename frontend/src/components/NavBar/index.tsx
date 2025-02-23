import { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import {
  DropDownList,
  DropDownToggle,
  NavBar,
  NavBarButtonIconLine,
  NavBarButtonIconWrapper,
  NavDropDown,
  NavLinkImageWrapper,
  TextBlock,
} from "./styles";
import { Link } from "react-router-dom";

const NavBarC = () => {
  const [open, setOpen] = useState(false);
  const _handleClick = () => {
    setOpen(!open);
  };
  return (
    <NavBar>
      <NavDropDown>
        <DropDownToggle onClick={_handleClick}>
          <NavBarButtonIconWrapper>
            <NavBarButtonIconLine />
            <NavBarButtonIconLine />
            <NavBarButtonIconLine />
          </NavBarButtonIconWrapper>
          <div>Navegación</div>
        </DropDownToggle>
        <DropDownList
          className={open ? `w--open w-dropdown-list` : "w-dropdown-list"}
        >
          <Link className="link" to="/transparencia/contraloria">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Órgano Interno de Control</TextBlock>
          </Link>
          <Link className="link" to="/transparencia/obras">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Obras Públicas</TextBlock>
          </Link>
          <Link className="link" to="/transparencia/tesoreria">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Tesorería</TextBlock>
          </Link>
          <Link className="link" to="/direcciones/#PlaneacionInfoPub">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Dirección de Planeación</TextBlock>
          </Link>
          <Link className="link" to="/transparencia/archivo">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Archivo Municipal</TextBlock>
          </Link>
        </DropDownList>
      </NavDropDown>
    </NavBar>
  );
};

export default NavBarC;
