import styled from "styled-components";

export const Section = styled("section")`
  z-index: 10;
  background-color: var(--dark);
  padding: 0% 2%;
  position: relative;
  .margin_25 {
    margin-top: 25px;
  }
  .margin_20 {
    margin-top: 20px;
  }
  .no-grid {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
  .video-center {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .light-color {
    color: var(--second-color);
    height: 100%;
  }
  .main {
    min-height: 766px;
  }
  .video-ratio {
    aspect-ratio: auto;
    min-height: 180px;
  }
  .landscape {
    aspect-ratio: auto;
    height: 100%;
    min-height: 766px;
  }
  .category-ratio {
    aspect-ratio: 2;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .video-category {
    width: 48px;
    height: 48px;
    position: absolute;
    inset: auto;
    overflow: hidden;
  }
  .relative {
    background-color: var(--second-color);
    color: var(--dark);
    position: relative;
    top: 0;
    right: 0;
  }
  .right {
    inset: auto 5px 5px auto;
  }
  .is-absolute {
    z-index: 2;
    position: absolute;
    transform: translate(-30px);
  }
  .white {
    background-color: var(--white);
    margin-top: 4px;
  }
  .secondInside {
    max-width: none;
    inset: auto 15px 15px;
  }
  .second {
    height: 16px;
  }
  .relativeRight {
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    top: 0;
    right: 0;
  }
  .relativeLeft {
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
  }
  .color {
    background-color: var(--second-color);
    color: var(--dark);
    font-weight: 600;
  }
  .vertical {
    color: #c1c1be;
    flex-flow: row;
    justify-content: center;
    align-items: stretch;
    line-height: 1.3;
    display: flex;
  }
  .down {
    flex-flow: column;
  }
  .change-radius {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .color-white {
    color: var(--white);
  }
  @media screen and (max-width: 991px) {
    #WNode {
      grid-area: span 1 / span 2 / span 1 / span 2;
    }
    .grid-3-cols {
      grid-column-gap: 40px;
      grid-row-gap: 30px;
      grid-template-columns: 1fr 2fr;
    }
  }

  @media screen and (max-width: 767px) {
    .grid-3-cols {
      grid-row-gap: 50px;
      grid-template-columns: 1fr;
    }
  }
`;
export const LinePageDivider = styled("div")`
  opacity: 1;
  background-color: #333;
  width: 100%;
  height: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
`;
export const Container = styled("div")`
  z-index: 20;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
export const Grid3Cols = styled("div")`
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2.5fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
`;
export const WNode = styled("div")`
  @media screen and (max-width: 767px) {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
`;
export const TopTitle = styled("div")`
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  place-items: end;
  display: grid;
  @media screen and (max-width: 991px) {
    grid-column-gap: 5%;
    grid-row-gap: 5%;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }
  @media screen and (max-width: 767px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const ThirdTitle = styled("h2")`
  text-align: left;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.1;
  color: var(--white);
`;
export const LightText = styled("span")`
  font-weight: 400;
`;
export const LatestNewsGrid = styled("div")`
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  display: grid;
`;

export const WDynItem = styled("div")``;
export const BlogMainWrapper = styled("a")`
  color: var(--third-color);
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
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
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  &:hover .paralax-image {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ButtonIconMain = styled("div")`
  cursor: pointer;
  background-color: var(--white);
  color: var(--second-color);
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  display: flex;
  position: absolute;
  inset: 15px 15px auto auto;
  overflow: hidden;
  transform: none;
  transition: padding 1s cubic-bezier(0.075, 0.82, 0.165, 1), border-color 0.2s,
    background-position 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const ButtonIconSvg = styled("div")`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-image: url(https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg),
    url(https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg);
  background-position: -180%, 60%;
  background-repeat: no-repeat, no-repeat;
  background-size: 1em, 1em;
  padding: 0.5em 1.5em 0.5em 0;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1.1em;
  transition: padding 1s cubic-bezier(0.075, 0.82, 0.165, 1), border-color 0.2s,
    background-position 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: block;
  position: relative;
  &:hover {
    background-position: 50%, 135%;
    padding-left: 2em;
  }
`;

export const ButtonIconSvgRight = styled("div")`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-image: url(https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg),
    url(https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg);
  background-position: -180%, 60%;
  background-repeat: no-repeat, no-repeat;
  background-size: 1em, 1em;
  padding: 1.2em 1.5em 0.5em 0;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1.1em;
  transition: padding 1s cubic-bezier(0.075, 0.82, 0.165, 1), border-color 0.2s,
    background-position 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: block;
  position: relative;
  &:hover {
    background-position: 20%, 135%;
    padding-left: 2em;
  }
`;

export const CategoryTextLink = styled("div")`
  z-index: 2;
  color: var(--white);
  mix-blend-mode: lighten;
  font-size: 18px;
  position: absolute;
  top: 18px;
  left: 15px;
`;

export const LineBelow = styled("div")`
  background-color: var(--main-color);
  width: 100%;
  height: 1px;
  margin-top: 0;
`;

export const ColLisWrapper2 = styled("div")`
  height: 100%;
`;

export const ColListWrapper2 = styled("div")`
  height: 100%;
`;
export const ColItem101 = styled("div")`
  height: 100%;
`;

export const ImageClip = styled("div")`
  width: 100%;
  height: 100%;
`;

export const InsidePhoto = styled("div")`
  background-color: var(--dark);
  border-radius: 10px;
  max-width: 500px;
  padding: 40px 25px;
  position: absolute;
  inset: 15px auto auto 15px;
`;

export const DataFlex = styled("div")`
  grid-column-gap: 14px;
  grid-row-gap: 14px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

export const DataInsidde = styled("div")`
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

export const DataImage = styled("div")`
  justify-content: space-between;
  align-items: center;
  width: 14px;
  height: 14px;
  margin-right: 6px;
  display: flex;
`;

export const DataText = styled("p")`
  margin-bottom: 0;
  font-size: 14px;
  color: var(--white);
`;

export const LineNavigation = styled("div")`
  background-color: #333;
  width: 1px;
  height: 30px;
`;

export const CategoryRight = styled("div")`
  grid-column-gap: 7px;
  grid-row-gap: 7px;
  display: flex;
  position: absolute;
  inset: 15px 15px auto auto;
`;

export const CategoryAbsolute = styled("div")`
  background-color: var(--dark);
  color: var(--second-color);
  border-radius: 6px;
  padding: 7px 9px;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  inset: 15px auto auto 15px;
`;

export const StickyDivWrapper = styled("div")`
  height: 100%;
  padding-bottom: 62px;
`;
export const ColListWrapper3 = styled("div")`
  height: 100%;
`;
export const LatestGrid = styled("div")`
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  height: 100%;
  display: grid;
`;
export const ColItem102 = styled("div")`
  height: 100%;
`;

export const ColList3 = styled("div")`
  height: 100%;
`;

export const BlogMainSmall = styled("a")`
  color: #121212;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  position: relative;
  overflow: hidden;
`;

export const SmallBlock = styled("div")`
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  background-color: #191919;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-flow: column;
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  display: flex;
`;

export const BlogTitleSmall = styled("div")`
  font-size: 0.7em;
`;
