import { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import {
  DropDownLink,
  DropDownList,
  DropDownToggle,
  NavBar,
  NavBarButtonIconLine,
  NavBarButtonIconWrapper,
  NavDropDown,
  NavLinkImageWrapper,
  TextBlock,
} from "./styles";

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
          <DropDownLink href="/transparencia/contraloria">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Contraloría</TextBlock>
          </DropDownLink>
          <DropDownLink href="/transparencia/obras">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Obras Públicas</TextBlock>
          </DropDownLink>
          <DropDownLink href="/transparencia/tesoreria">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Tesorería</TextBlock>
          </DropDownLink>
          <DropDownLink href="/direcciones/#PlaneacionInfoPub">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Dirección de Planeación</TextBlock>
          </DropDownLink>
          <DropDownLink href="/transparencia/archivo">
            <NavLinkImageWrapper>
              <SvgIcon src="" width="" height="" />
            </NavLinkImageWrapper>
            <TextBlock>Archivo Municipal</TextBlock>
          </DropDownLink>
        </DropDownList>
      </NavDropDown>
    </NavBar>
  );
};

export default NavBarC;
