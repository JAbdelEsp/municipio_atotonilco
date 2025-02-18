import styled from "styled-components";

export const TickerContainer = styled("div")`
  position: relative;
  top: 5em;
  left: 0;
  z-index: 1000;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  background: #be1622;
  opacity: 0.6;
  @keyframes Slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const TickerContent = styled("div")`
  display: flex;
  padding-top: 16px;
  animation: Slide 45s linear infinite;
`;

export const TextPara = styled("p")`
  display: inline-block;
  white-space: nowrap;
  color: white;
`;

export const Span = styled("span")``;
