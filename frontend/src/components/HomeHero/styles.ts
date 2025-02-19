import styled from "styled-components";

export const HomeHeroW = styled("div")`
  z-index: 10;
  border-bottom: 1px solid #3c394d;
  flex-flow: column;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  background-image: url("./images/main/IMG_0912.jpg");
  background-size: cover;
  margin-top: 5em;
`;
export const HomeHeroContent = styled("div")`
  z-index: 10;
  width: 100%;
  padding-top: 8.5em;
  padding-bottom: 5em;
  position: relative;
`;
export const HomeHeroWrapper = styled("div")`
  z-index: 20;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  text-align: center;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 80em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
`;
export const HeroEyebrown = styled("div")`
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  text-align: left;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const IconBlock = styled("div")`
  z-index: 10;
  border-radius: 3px;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 25em;
  display: flex;
  position: relative;
  border-radius: 10px;
  img {
  }
`;
export const Heading = styled("h1")`
  z-index: 10;
  font-family: var(--sans-font);
  margin-top: 0;
  margin-bottom: 0;
  font-size: 9em;
  font-weight: 600;
  line-height: 1.1em;
  position: relative;
  color: var(--white);
  text-shadow: 2px 5px 6px #000000;
  @media screen and (max-width: 991px) {
    font-size: min(4em, 10vw);
  }
  @media screen and (max-width: 479px) {
    font-size: min(8em, 13vw);
  }
`;
export const HomeHeroButton = styled("div")`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  text-align: left;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const ButtonWrapper = styled("a")`
  z-index: 10;
  grid-column-gap: 0.2em;
  grid-row-gap: 0.2em;
  border: 1px solid #181720;
  border-radius: 50em;
  background-color: #a7dee4;
  color: #181720;
  text-align: center;
  text-transform: uppercase;
  flex-flow: row;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0.1em;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
`;
export const ButtonLayout = styled("div")`
  z-index: 10;
  grid-column-gap: 0.6em;
  grid-row-gap: 0.6em;
  border: 1px solid #4b6366;
  border-radius: 50em;
  background-color: #a7dee4;
  color: #181720;
  text-align: center;
  text-transform: uppercase;
  flex: none;
  justify-content: space-between;
  align-items: center;
  min-height: 3.3em;
  padding: 0.8em 1.5em;
  text-decoration: none;
  transition: color 0.2s, background-color 0.2s;
  display: flex;
  position: relative;
  overflow: hidden;
`;
export const ButtonText = styled("div")`
  z-index: 10;
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 800;
  line-height: 1em;
  position: relative;
  top: 0.1em;
  &:hover {
    transform: translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;
  }
`;
export const ButtonBg = styled("div")`
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  display: none;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;
export const ButtonIconBlock = styled("div")`
  z-index: 10;
  border: 1px solid #181720;
  background-color: #a7dee4;
  border-radius: 50%;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 3.3em;
  height: 3.3em;
  padding: 0.5em;
  transition: background-color 0.2s;
  display: flex;
  position: relative;
  &:hover {
    background-color: #f2f2f6;
  }
`;

export const BgLines = styled("div")`
  z-index: 6;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: hidden;
`;
export const BgLinesGradient = styled("div")`
  z-index: 5;
  background-image: linear-gradient(
    180deg,
    #ccc 20%,
    rgba(255, 255 255, 0) 100%
  );
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;
export const BgLine = styled("div")`
  z-index: 1;
  background-color: #ccc;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 100%;
  display: flex;
  position: relative;
`;
