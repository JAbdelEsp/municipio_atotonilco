import styled from "styled-components";
export const Section = styled("section")`
  z-index: 10;
  width: 100%;
  position: relative;
  overflow: clip;
  .is-article-section {
    overflow: visible;
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
`;
export const HeroImage = styled("div")`
  height: 30em;
  min-height: 60vh;
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
  background-color: #040404;
  display: none;
  position: absolute;
  inset: 0%;
`;
