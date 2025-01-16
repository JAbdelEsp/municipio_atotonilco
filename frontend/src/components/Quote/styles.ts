import styled from "styled-components";

export const Section = styled("section")`
  z-index: 10;
  width: 100%;
  position: relative;
  overflow: clip;
  .with-borders {
    border-top: 1px solid #4c4766;
    border-bottom: 1px solid #4c4766;
  }
  .is-align-left {
    inset: 0% auto 0% 0%;
  }
  .is-2nd {
    background-color: #63111a;
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
`;
export const QuoteWrapper = styled("div")`
  z-index: 10;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    min-height: 50em;
  }
  @media screen and (max-width: 479px) {
    min-height: 30em;
  }
`;
