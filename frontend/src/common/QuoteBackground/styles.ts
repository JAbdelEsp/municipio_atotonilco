import styled from "styled-components";

export const QuoteBackgroundW = styled("div")`
  z-index: 1;
  position: absolute;
  inset: 0%;
`;
export const ParallaxTrigger = styled("div")`
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  inset: 0%;
  overflow: hidden;
`;
export const ParallaxLayout = styled("div")`
  z-index: 1;
  opacity: 1;
  object-fit: cover;
  width: 100%;
  height: 130%;
  position: absolute;
  left: 0%;
  right: 0%;
`;
export const BgForAnimation = styled("div")`
  z-index: 20;
  background-color: var(--main-color-2);
  display: none;
  position: absolute;
  inset: 0%;
`;
