import styled from "styled-components";
export const Footer = styled("section")`
  background-color: var(--dark);
  min-height: 100vh;
  padding-left: 2%;
  padding-right: 2%;
  position: relative;
  overflow: hidden;
  // margin-top: 3em;
  .banner {
    padding-top: 130px;
    padding-bottom: 0;
  }
  .flex-center {
    color: var(--second-color);
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 21px;
    font-weight: 500;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  @media screen and (max-width: 991px) {
    min-height: auto;
    padding-bottom: 30px;
  }
`;
export const BannerSection = styled("div")`
  padding-top: 120px;
  padding-bottom: 120px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 50px;
    padding-left: 0%;
    padding-right: 0%;
  }
`;
export const AlignCenter = styled("div")`
  text-align: center;
`;
export const ThirdTitle = styled("h3")`
  color: var(--white);
  text-align: center;
`;
export const Margin40 = styled("div")`
  margin-top: 40px;
  position: relative;
`;
export const BannerGrid = styled("div")`
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  @media screen and (max-width: 991px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 479px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: 1fr 1fr;
  }
`;
export const BlogMainWrapper = styled("a")`
  color: var(--dark);
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
  &:hover .paralax-image2 {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const ButtonIconMain = styled("div")`
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
export const LinePageDividerDark = styled("div")`
  background-color: var(--white);
  opacity: 1;
  width: 100%;
  height: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
`;
export const FooterGridSecond = styled("div")`
  z-index: 4;
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  position: relative;
  color: var(--white);
  p {
    padding-top: 9em;
    text-align: right;
  }
  @media screen and (max-width: 991px) {
    grid-row-gap: 40px;
    flex-flow: column-reverse;
    grid-template-columns: 2fr;
    display: flex;
  }
  @media screen and (max-width: 767px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: 2fr 0.25fr;
  }
  @media screen and (max-width: 479px) {
    grid-template-columns: 2fr;
    p {
      text-align: center !important;
      order: -1;
    }
  }
`;
export const Margin30 = styled("div")`
  margin-top: 30px;
  img {
    width: 220px;
  }
  @media screen and (max-width: 479px) {
    img {
      display: block;
      margin: 0 auto;
    }
  }
`;
