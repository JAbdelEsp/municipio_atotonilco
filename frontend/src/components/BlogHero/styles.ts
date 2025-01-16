import styled from "styled-components";

export const BlogHeroW = styled("div")`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  border-bottom: 1px solid var(--main-color-4);
  text-align: center;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10em 5em 5em;
  display: flex;
  .is-large,
  .is-medium {
    font-size: 1.5em;
  }
  .blog-hero-icon {
    z-index: 10;
    vertical-align: bottom;
    width: 1em;
    height: 1em;
    margin-right: 0.1em;
    font-size: 10em;
    display: inline;
    position: relative;
  }
  .is-blog-hero-title {
    font-family: var(--serif-font);
    text-transform: uppercase;
    font-size: 9em;
    font-weight: 700;
    line-height: 1.1em;
    display: inline;
  }
  @media screen and (max-width: 991px) {
    padding: 5em 2.2em 5em;
    .is-blog-hero-title {
      font-size: min(4em, 10vw);
    }
    .is-large {
      font-size: min(2em, 10vw);
    }
  }
  @media screen and (max-width: 479px) {
    .is-blog-hero-title {
      font-size: min(6em, 8vw);
    }
    .is-large {
      font-size: min(1em, 10vw);
    }
  }
`;
export const Paragraph = styled("p")`
  z-index: 10;
  font-size: max(16px, 1.3em);
  font-weight: 300;
  line-height: 1.5em;
  position: relative;
  color: var(--main-color-2);
`;
export const BlogHeroContent = styled("div")`
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
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
  @media screen and (max-width: 991px) {
    font-size: min(4em, 10vw);
  }
  @media screen and (max-width: 479px) {
    font-size: min(3em, 5.6vw) !important;
  }
`;
export const BlogHeroContentInner = styled("div")``;
export const BlogHeroImage = styled("div")`
  z-index: 10;
  vertical-align: text-bottom;
  width: 13em;
  height: 7em;
  margin-left: 2.4em;
  display: inline-block;
  position: relative;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
    height: 10em;
    margin-left: 0;
  }
`;
export const RevealImageTrigger = styled("div")`
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const BgForAnimation = styled("div")`
  z-index: 20;
  background-color: var(--main-color-2);
  display: none;
  position: absolute;
  inset: 0%;
`;
