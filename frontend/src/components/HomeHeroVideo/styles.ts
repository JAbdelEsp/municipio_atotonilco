import styled from "styled-components";

export const HomeHeroVideoContainer = styled("div")`
  z-index: 10;
  width: 100%;
  margin-top: 1%;
  min-height: 50em;
  position: relative;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 991px) {
    min-height: 30em;
  }
  @media screen and (max-width: 479px) {
    min-height: 10em;
  }
`;
