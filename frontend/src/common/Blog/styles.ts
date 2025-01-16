import styled from "styled-components";

export const Section = styled("section")`
  z-index: 10;
  width: 100%;
  position: relative;
  overflow: clip;
  .is-regular {
    font-size: 2.7em;
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
  .is-service-3-title {
    font-size: 2.2em;
    font-weight: 500;
  }
  .with-margin-bottom {
    margin-bottom: 5em;
  }
  @media screen and (max-width: 991px) {
    .width-margin-bottom {
      margin-bottom: 3em;
    }
  }
  @media screen and (max-width: 479px) {
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
export const Padding = styled("div")`
  width: 100%;
  padding: 5em 0;
`;
export const ContentWidthBlock = styled("div")`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  text-align: center;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 70em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
export const EyebrowOrnament = styled("div")`
  z-index: 10;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
  }
`;
export const EyebrowOrnamentLine = styled("div")`
  background-color: var(--cta-color-6);
  flex: none;
  width: 5em;
  height: 1px;
`;
export const EyebrowOrnamentText = styled("div")`
  color: var(--cta-transparent-90);
  letter-spacing: 0.2em;
  text-indent: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
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
    font-size: min(2.5em, 10vw);
  }
`;
export const Services3Wrapper = styled("div")`
  z-index: 10;
  width: 100%;
  position: relative;
`;
export const Services3List = styled("div")`
  grid-column-gap: 5em;
  grid-row-gap: 5em;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  width: 100%;
  display: grid;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 479px) {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
  }
`;
export const Services3Item = styled("div")`
  z-index: 10;
  flex-flow: column;
  justify-content: flex-end;
  align-items: stretch;
  min-height: 35em;
  display: flex;
  position: relative;
  @media screen and (max-width: 991px) {
    min-height: 29em;
  }
  @media screen and (max-width: 479px) {
    min-height: 25em;
  }
`;
export const Services3Image = styled("div")`
  z-index: 5;
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
  background-color: var(--main-color-2);
  display: none;
  position: absolute;
  inset: 0%;
`;
export const Services3Content = styled("div")`
  z-index: 11;
  grid-column-gap: 1.5em;
  grid-row-gap: 1.5em;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 35em;
  padding-top: 3em;
  padding-left: 3em;
  padding-right: 3em;
  display: flex;
  position: relative;
`;
export const Services3Overlay = styled("div")`
  z-index: 6;
  background-image: linear-gradient(
    180deg,
    var(--transparent),
    var(--main-color-2)
  );
  height: 80%;
  position: absolute;
  inset: auto 0% 0%;
`;
export const Service3Link = styled("a")`
  color: var(--cta-transparent-90);
`;
export const Heading2 = styled("h2")`
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
export const Paragraph = styled("p")`
  z-index: 10;
  font-size: max(16px, 1.3em);
  font-weight: 300;
  line-height: 1.5em;
  position: relative;
  color: var(--white);
`;
