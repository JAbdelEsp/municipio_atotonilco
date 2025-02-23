import styled from "styled-components";
export const Container = styled("div")`
  margin: 2em 0;
  display: grid;
  place-items: center;
  width: 100%;
`;
export const TeamGrid = styled("div")`
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;
export const PrincipalTeamWrapper = styled("div")`
  grid-area: span 1 / span 4 / span 1 / span 1;
`;
export const TeamWrapper = styled("div")`
  margin-top: 2em;
  grid-area: span 1 / span 1 / span 1 / span 1;
`;
export const TeamImageWrapper = styled("div")`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;
export const ImageWrap = styled("div")`
  box-sizing: border-box;
  aspect-ratio: 1;
  border-radius: 10px;
  width: 100%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const TeamImageOverlay = styled("div")`
  background-image: linear-gradient(#0006, #0006);
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 0%;
`;
export const TeamNameWrapper = styled("div")``;
export const ThirdTitle = styled("div")`
  text-align: left;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.1;
`;
export const LightText = styled("span")`
  font-weight: 400;
`;
