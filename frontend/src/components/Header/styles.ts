import styled from "styled-components";

export const NavBar = styled("nav")`
  z-index: 500;
  border: 1px solid #040404;
  background-color: #fff;
  width: 100%;
  min-height: 4em;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  z-index: 9999;
`;

export const NavBarInner = styled("div")`
  z-index: 20;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding-right: 10em;
  display: flex;
  position: relative;

  .button-for-open-menu {
    z-index: 500;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    border: 1px solid #040404;
    background: linear-gradient(rgb(219, 25, 34) 0 0) right / var(--p, 100%)
      no-repeat;
    transition: ease-in-out 0.5s, background-position 6s;
    cursor: pointer;
    flex-flow: row;
    justify-content: center;
    align-self: stretch;
    align-items: center;
    width: 10em;
    height: 3.99em;
    padding: 0.5em 2em;
    display: flex;
    position: fixed;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%;
    overflow: hidden;
    .burger-menu {
      z-index: 10;
      flex-direction: column;
      flex: none;
      justify-content: space-between;
      align-items: stretch;
      width: 2em;
      height: 14px;
      display: flex;
      position: relative;
      .burger-menu-line {
        background-color: #3c394d;
        width: 100%;
        height: 2px;
        display: block;
        position: relative;
      }
    }
    .burger-menu-bg {
      z-index: 1;
      background-color: #040404;
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0%;
      bottom: auto;
      left: 0%;
      right: 0%;
    }
  }
  .button-for-open-menu:hover {
    --p: 0%;
  }
  .logo-wrapper {
    z-index: 10;
    flex-direction: column;
    flex: none;
    justify-content: center;
    align-items: stretch;
    width: 10em;
    display: flex;
    position: relative;
    .logo {
      z-index: 10;
      object-fit: contain;
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
    }
  }
`;

export const MenuWrapper = styled("div")`
  flex-flow: row;
  flex: 1;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  display: flex;
  position: static;
`;
export const NavLinks = styled("div")`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  align-self: stretch;
  margin-left: auto;
  padding-left: 2.5em;
  padding-right: 2.5em;
  display: flex;
  // media queries for modile devices
  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavLink = styled("div")`
  border-bottom-color: red;
  opacity: 1;
  font-weight: 700;
`;

export const CustomNavLink = styled(NavLink)`
  z-index: 10;
  // border-bottom: 3px solid #040404;
  opacity: 0.7;
  color: #040404;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding-top: 3px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
  display: flex;
  position: relative;
  top: 1px;
  overflow: hidden;
`;

export const Span = styled("span")`
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 0.9em;
  line-height: 1.1em;
`;

export const BrandLogo = styled("div")`
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  border-right: 1px solid #040404;
  color: #040404;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em 2.5em;
  transition: background-color 0.2s;
  display: flex;
`;
