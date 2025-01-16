import styled from "styled-components";
export const Section = styled("section")`
  z-index: 10;
  width: 100%;
  position: relative;
  overflow: clip;
  .form-grid {
    grid-column-gap: 0em;
    grid-row-gap: 0em;
    grid-template-rows: auto;
    place-items: center;
    width: 100%;
  }
  .is-contact-form-title {
    width: 100%;
    margin-bottom: 0.5em;
    font-size: 2.4em;
  }
  .is-2nd {
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: sticky;
    top: 0;
    place-self: start stretch;
  }
  .custom-list-icon {
    z-index: 10;
    object-fit: contain;
    width: 1em;
    height: 1em;
    font-size: 1.8em;
    position: absolute;
  }
  .is-align-left {
    inset: 0% auto 0% 0%;
  }
`;
export const WLayout = styled("div")`
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;
export const FormBlock = styled("div")`
  justify-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5em 8vw;
  display: flex;
  position: relative;
`;
export const FormLayout = styled("div")`
  grid-column-gap: 4em;
  grid-row-gap: 4em;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 30em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
export const FormImage = styled("div")`
  z-index: 10;
  border: 1px solid #4c4766;
  border-radius: 3px;
  width: 100%;
  height: 30em;
  position: relative;
  @media screen and (max-width: 991px) {
    height: 25em;
  }
  @media screen and (max-width: 479px) {
    height: 20em;
  }
`;
export const RevealImageTrigger = styled("div")`
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
`;
export const BgForAnimation = styled("div")`
  z-index: 20;
  background-color: #211f33;
  display: none;
  position: absolute;
  inset: 0%;
`;
export const Form = styled("div")`
  z-index: 10;
  font-family: var(--serif-font);
  text-align: left;
  flex: none;
  width: 100%;
  margin-bottom: 0;
  position: relative;
`;
export const FormInner = styled("form")`
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  display: flex;
`;
export const Heading = styled("p")`
  z-index: 10;
  font-family: var(--serif-font);
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 5em;
  font-weight: 200;
  line-height: 1.1em;
  position: relative;
`;
export const ContactFormParagraph = styled("p")`
  opacity: 0.75;
  margin-bottom: 1.5em;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.3em;
`;
export const CustomList = styled("div")`
  max-width: 28em;
`;
export const CustomListItem = styled("div")`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2em 0;
  display: flex;
  position: relative;
  overflow: hidden;
`;
export const CustomListIconBlock = styled("div")`
  flex-direction: column;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 2.2em;
  height: 2.2em;
  margin-right: 2.5em;
  display: flex;
  position: relative;
`;
export const CustomListIconBg = styled("div")`
  z-index: 2;
  border: 1px solid #66534b;
  border-radius: 3px;
  background-color: #e4b9a71a;
  position: absolute;
  inset: 0%;
`;
export const CustomListContent = styled("div")`
  grid-column-gap: 0.7em;
  grid-row-gap: 0.7em;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;
export const ListTitle = styled("p")`
  font-family: var(--serif-font);
  font-size: 1.9em;
  font-weight: 300;
  line-height: 1.2em;
  color: #fff;
`;
export const ListParagraph = styled("p")`
  color: #9c99b4;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
`;
export const ListLine = styled("div")`
  background-color: #4c4766;
  height: 1px;
  position: absolute;
  inset: auto 0% 0%;
`;
