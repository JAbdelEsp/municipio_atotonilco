import styled from "styled-components";

export const NavBar = styled("nav")`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  border-bottom: 1px solid var(--main-color-4);
  text-align: center;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 5em 5em;
  display: flex;
  .w-dropdown {
    text-align: left;
    z-index: 900;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    position: relative;
  }
  .w-dropdown-toggle {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    padding-right: 40px;
    display: inline-block;
  }
  .w-dropdown-list {
    background: var(--dark);
    min-width: 20em;
    display: none;
    position: absolute;
  }
  .w--open {
    display: block !important;
    background-color: var(--dark);
    border-radius: 20px;
    min-width: 20em;
    min-height: 10em;
    padding-top: 20px;
    padding-left: 20px;
  }
  .w-dropdown-btn,
  .w-dropdown-toggle,
  .w-dropdown-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    position: relative;
  }
  .w-dropdown-list {
    background: var(--dark);
    min-width: 20em;
    display: none;
    position: absolute;
    z-index: 99;
  }
`;
export const NavDropDown = styled("div")`
  margin-left: 0;
  margin-right: auto;
`;
export const DropDownToggle = styled("div")`
  grid-column-gap: 19px;
  grid-row-gap: 19px;
  background-color: var(--dark);
  color: var(--white);
  border-radius: 80px;
  padding: 16px 25px;
  display: flex;
`;
export const NavBarButtonIconWrapper = styled("div")`
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-right: 0;
`;
export const NavBarButtonIconLine = styled("div")`
  background-color: var(--white);
  width: 17px;
  height: 2px;
  margin-bottom: 5px;
`;
export const DropDownList = styled("nav")`
  background-color: var(--dark);
`;
export const DropDownLink = styled("a")`
  grid-column-gap: 18px;
  grid-row-gap: 18px;
  color: var(--white);
  margin-bottom: 32px;
  text-decoration: none;
  display: flex;
`;
export const NavLinkImageWrapper = styled("div")``;
export const TextBlock = styled("div")``;
