import styled from "styled-components";

export const CmsHero = styled("div")`
  z-index: 20;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  min-height: 100vh;
  padding-top: 15em;
  padding-bottom: 5em;
  display: flex;
  position: relative;
  .is-cms-hero-title {
    z-index: 5;
    color: #eaeaf6;
    text-align: center;
    font-size: 8em;
    font-weight: 700;
    line-height: 1em;
  }
  .is-large,
  .is-medium {
    font-size: 1.5em;
  }
  .fit-top {
    object-position: 50% 25%;
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
  @media screen and (max-width: 991px) {
    .is-cms-hero-title {
      font-size: min(10vw, 10em);
    }
  }
  @media screen and (max-width: 479px) {
    padding-top: 10em;
    padding-bottom: 10em;
  }
`;
export const Container = styled("div")`
  z-index: 10;
  width: 100%;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3em;
  padding-right: 3em;
  position: relative;
`;
export const CmsHeroLayout = styled("div")`
  z-index: 10;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`;
export const Heading = styled("h1")`
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
export const OrnamentHorizontal = styled("div")`
  z-index: 10;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 15em;
  height: 1px;
  display: flex;
  position: relative;
`;
export const OrnamentLine = styled("div")`
  background-color: #eaeaf6;
  opacity: 0.8;
  flex: 1;
  height: 1px;
`;
export const OrnamentLineDot = styled("div")`
  background-color: #eaeaf6;
  opacity: 0.8;
  border-radius: 50%;
  width: 4px;
  height: 4px;
`;
export const CmsHeroContent = styled("div")`
  grid-column-gap: 1.3em;
  grid-row-gap: 1.3em;
  text-align: center;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 50em;
  display: flex;
  color: #eaeaf6;
`;
export const Paragraph = styled("p")`
  z-index: 10;
  font-size: max(16px, 1.3em);
  font-weight: 300;
  line-height: 1.5em;
  position: relative;
`;
export const CmsHeroBg = styled("div")`
  z-index: 1;
  position: absolute;
  inset: 0%;
`;
export const CmsHeroOverlay = styled("div")`
  z-index: 10;
  background-image: linear-gradient(180deg, #fff0, #040404 75%);
  position: absolute;
  inset: 0%;
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
