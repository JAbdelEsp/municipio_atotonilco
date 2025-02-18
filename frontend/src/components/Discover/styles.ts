import styled from "styled-components";

export const Section = styled("section")`
  z-index: 10;
  width: 100%;
  position: relative;
  overflow: clip;
  .service-image {
    z-index: 10;
    border-radius: 3px;
    width: 100%;
    height: 30em;
    position: relative;
    overflow: hidden;
  }
  .in-services {
    grid-column-gap: 1em;
    grid-row-gap: 5em;
    place-items: start;
  }
  .cover-image {
    z-index: 5;
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    inset: 0%;
  }
  .fit-top {
    object-position: 50% 25%;
  }
  img {
    vertical-align: middle;
    max-width: 100%;
    display: inline-block;
  }
  .is-services-title {
    letter-spacing: -0.0333em;
    margin-bottom: 0.3em;
    font-size: 5em;
    font-weight: 400;
    line-height: 1.1em;
  }
  .service-content {
    z-index: 10;
    grid-column-gap: 0.6em;
    grid-row-gap: 0.6em;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-left: 3.3em;
    display: flex;
    position: relative;
  }
  .is-align-left {
    inset: 0% auto 0% 0%;
  }
`;
export const ServicesWrapper = styled("div")``;
export const ServicesList = styled("div")``;
export const ServiceItem = styled("div")`
  grid-column-gap: 5em;
  grid-row-gap: 5em;
  border-bottom: 1px solid var(--main-color-4);
  flex-flow: column;
  width: 100%;
  padding-top: 8em;
  padding-bottom: 8em;
  display: flex;
  @media screen and (max-width: 991px) {
    padding-top: 3em;
    padding-bottom: 3em;
    .in-services {
      grid-column-gap: 2em;
      grid-row-gap: 2em;
    }
    .service-image {
      grid-area: span 1 / span 1 / span 1 / span 1;
    }
    .service-item:first-child {
      border-top: 1px solid var(--main-color-4);
    }
  }
  @media screen and (max-width: 479px) {
    .in-services {
      grid-column-gap: 1.5em;
      grid-row-gap: 1.5em;
    }
    .service-image {
      height: 15em;
    }
    .container-grid {
      padding-left: 8vw;
      padding-right: 8vw;
    }
    .is-services-title {
      text-indent: 0;
      font-size: min(2.3em, 7vw);
      line-height: 1.1em;
    }
  }
`;
export const ContainerGrid = styled("div")`
  z-index: 10;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
  grid-auto-columns: 1fr;
  place-items: start;
  width: 100%;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3em;
  padding-right: 3em;
  display: grid;
  position: relative;
  @media screen and (max-width: 991px) {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-columns: 1fr;
  }
`;
export const ServiceNumberText = styled("p")`
  font-family: var(--serif-font);
  color: #d7d5ec;
  font-size: 4em;
  font-weight: 300;
  line-height: 1em;
  @media screen and (max-width: 479px) {
    font-size: min(10vw, 2.5em);
  }
`;
export const WNode = styled("div")``;
export const RevealImageTrigger = styled("div")`
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
  img {
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  &:hover .paralax-image {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const BgForAnimation = styled("div")`
  z-index: 20;
  background-color: #211f33;
  display: none;
  position: absolute;
  inset: 0%;
`;
export const ServiceSmallTitleBlock = styled("div")`
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 23em;
  display: flex;
  @media screen and (max-width: 991px) {
    max-width: 28em;
    padding-left: 3.3em;
  }
  @media screen and (max-width: 479px) {
    padding-left: 8vw;
  }
`;
export const ServiceSmallTitle = styled("p")`
  font-family: var(--serif-font);
  color: #d7d5ec;
  font-size: 1.8em;
  font-weight: 300;
  line-height: 1.4em;
  @media screen and (max-width: 991px) {
    margin-bottom: 1em;
  }
`;
export const ServiceContent = styled("div")`
  grid-area: 2/2/3/3;
  @media screen and (max-width: 991px) {
    grid-area: span 2 / span 1 / span 2 / span 1;
  }
  @media screen and (max-width: 479px) {
    padding-left: 8vw;
  }
`;
export const Heading = styled("h2")`
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
export const RichText = styled("div")`
  line-height: 1.7em;
  ::before {
    content: " ";
    grid-area: 1/1/2/2;
    display: table;
  }
  ::after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table;
  }
  p {
    margin-top: 0;
    margin-bottom: 1.5em;
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1.7em;
  }
`;
export const OrnamentVertical = styled("div")`
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 1px;
  height: 100%;
  display: flex;
  position: absolute;
`;
export const OrnamentVerticalLine = styled("div")`
  background-color: #4c4766;
  flex: 1;
  width: 1px;
`;
export const OrnamentVerticalDot = styled("div")`
  background-color: #4c4766;
  border-radius: 50%;
  flex: none;
  width: 5px;
  height: 5px;
`;
