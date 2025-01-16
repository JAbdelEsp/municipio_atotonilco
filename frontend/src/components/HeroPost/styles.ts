import styled from "styled-components";

export const HeroPostW = styled("div")`
  padding-top: 10em;
  padding-bottom: 5em;
  overflow: hidden;
  .is-large {
    font-size: 1.5em;
  }
  .is-hero-title {
    font-size: 4.4em;
    font-weight: 500;
    line-height: 1.3em;
  }
  @media screen and (max-width: 479px) {
    padding-top: 5em;
    padding-bottom: 3em;
    .is-large {
      font-size: min(5vw, 1.3em);
    }
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
  @media screen and (max-width: 479px) {
    padding-left: 8vw;
    padding-right: 8vw;
  }
`;
export const HeroPostLayout = styled("div")`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  text-align: center !important;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 80em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
export const HeroPostAuthor = styled("div")`
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
export const HeroPostAuthorImage = styled("div")`
  z-index: 10;
  border-radius: 50%;
  width: 4em;
  height: 4em;
  position: relative;
  overflow: hidden;
`;
export const Paragraph = styled("p")`
  z-index: 10;
  font-size: max(16px, 1.3em);
  font-weight: 300;
  line-height: 1.5em;
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
  @media screen and (max-width: 479px) {
    font-size: min(10vw, 2.3em);
  }
`;
