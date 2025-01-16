import styled from "styled-components";

export const Section = styled("section")`
  z-index: 10;
  background-color: var(--dark);
  padding: 0% 2%;
  position: relative;
  p {
    font-size: min(14px, 2em);
    font-weight: normal;
  }
  .add-top {
    padding-top: 2%;
  }
  .second {
    height: 16px;
  }
  .for-horizontal {
    font-size: 37px;
    line-height: 1.1;
  }
  .w-pagination-previous,
  .w-pagination-next {
    color: #333;
    background-color: #fafafa;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 9px 20px;
    font-size: 14px;
    display: block;
  }
  .for-pagination {
    background-color: var(--white);
    color: var(--dark);
    width: 32px;
    height: 32px;
    position: relative;
    top: 0;
    right: 0;
  }
  .rotate {
    transform: rotate(-180deg);
    margin-top: 5px;
    margin-left: 9px;
  }
  .flip {
    flex-flow: column-reverse;
  }
  .icon-pagination {
    width: 14px;
  }
  ._80 {
    max-width: 75%;
  }
  .margin-60px {
    margin-top: 60px;
  }
  .margin-20px {
    margin-top: 20px;
  }
  .margin-30px {
    margin-top: 30px;
  }
  .for-author {
    text-align: center;
    font-size: 18px;
    color: var(--gray);
  }
  .relative {
    background-color: var(--second-color);
    color: var(--dark);
    position: relative;
    top: 0;
    right: 0;
  }
  .for-modal {
    cursor: pointer;
    position: absolute;
    inset: 5px 5px auto auto;
  }
  .subrcribe-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 991px) {
    .horizontal {
      grid-column-gap: 35px !important;
      grid-row-gap: 35px !important;
    }
    .for-horizontal {
      font-size: 34px;
      line-height: 1.1;
    }
    ._80 {
      margin-right: auto;
    }
  }
  @media screen and (max-width: 767px) {
    padding-left: 3%;
    padding-right: 3%;
  }
  @media screen and (max-width: 479px) {
    .horizontal {
      flex-flow: column;
    }
  }
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
export const WNode = styled("div")``;
export const VerticalGrid = styled("div")`
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-rows: auto;
  grid-template-columns: 1.6fr 1fr;
  grid-auto-columns: 1fr;
  align-items: start;
  width: 100%;
  display: grid;
  @media screen and (max-width: 991px) {
    grid-column-gap: 60px;
    grid-row-gap: 60px;
    flex-flow: column;
    align-items: stretch;
    display: flex;
  }
`;
export const HorizontalGrid = styled("div")`
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  flex-flow: column;
  display: flex;
  @media screen and (max-width: 991px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
  @media screen and (max-width: 479px) {
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
`;
export const ListItem = styled("div")``;
export const BlogMainWrapper = styled("a")`
  color: var(--main-color-2);
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  position: relative;
  overflow: hidden;
`;
export const ImageClip = styled("div")`
  width: 100%;
  height: 100%;
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
  @media screen and (max-width: 991px) {
    width: min(16em, 480px);
  }
  @media screen and (max-width: 767px) {
    width: min(10em, 480px);
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
export const CategoryAbsolute = styled("div")`
  background-color: var(--dark);
  color: var(--main-color-2);
  border-radius: 6px;
  padding: 7px 9px;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  inset: 15px auto auto 15px;
`;
export const ButtonIconMain = styled("div")`
  cursor: pointer;
  background-color: var(--dark);
  color: var(--main-color-2);
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  display: flex;
  position: absolute;
  inset: 15px 15px auto auto;
  overflow: hidden;
  transform: none;
`;
export const ButtonIconSvg = styled("div")`
  justify-content: center;
  align-items: center;
  width: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  .w-embed:before,
  .w-embed:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  .w-embed:after {
    clear: both;
  }
`;
export const HorizontalContent = styled("div")`
  min-width: 400px;
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
`;
export const LineNavigation = styled("div")`
  background-color: #333;
  width: 1px;
  height: 30px;
`;
export const BlogTitle = styled("div")``;
export const PaginationWrapper = styled("div")`
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
`;
export const ButtonPaginationN = styled("a")<{ disabled?: boolean }>`
  cursor: pointer;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: var(--main-color-2);
  color: var(--dark);
  border-style: none;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 5px 15px;
  font-size: 16px;
  font-weight: 600;
  margin: 0px 20px;
  display: ${(props) =>
    props.disabled ? "none!important" : "flex !important"};
`;
export const ButtonPagination = styled("a")<{ disabled?: boolean }>`
  cursor: pointer;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: var(--main-color-2) !important;
  color: var(--dark);
  border-style: none;
  border-radius: 10px !important;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 5px 5px;
  font-size: 16px;
  font-weight: 600;
  display: ${(props) => (props.disabled ? "none" : "flex !important")};
`;
export const ButtonIconMainForPaginationP = styled("div")<{
  disabled?: boolean;
}>`
  background-color: var(--dark);
  color: var(--main-color-2);
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  position: absolute;
  inset: 15px 15px auto auto;
  overflow: hidden;
  transform: none;
`;
export const ButtonIconMainForPagination = styled("div")`
  background-color: var(--dark);
  color: var(--main-color-2);
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  display: "flex;
  position: absolute;
  inset: 15px 15px auto auto;
  overflow: hidden;
  transform: none;
`;
export const WinlineBlock = styled("div")`
  max-width: 100%;
  display: inline-block;
`;
export const StickyBar = styled("div")`
  position: sticky;
  top: 150px;
  h4 {
    color: var(--main-color-2);
  }
  @media screen and (max-width: 991px) {
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    top: 0;
  }
`;
export const StickyContent = styled("div")`
  max-width: 70%;
  margin-left: auto;
  p {
    color: var(--main-color-2);
  }
  @media screen and (max-width: 991px) {
    margin-left: 0;
  }
  @media screen and (max-width: 479px) {
    max-width: 95%;
  }
`;
export const BannerSideBar = styled("div")`
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  text-align: center;
  background-color: #222;
  border-radius: 10px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 22px 33px;
  display: flex;
`;
export const AuthorImage = styled("div")`
  background-image: url("/images/main/PHOTO-2024-11-16-13-29-34.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  min-width: 110px;
  min-height: 110px;
  @media screen and (max-width: 479px) {
    min-width: 220px;
    min-height: 220px;
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
`;
export const SubscribeModalWrapper = styled("div")`
  z-index: 9999;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  inset: 0%;
`;
export const SubscribeModal = styled("div")`
  z-index: 10;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: var(--dark);
  border-radius: 10px;
  grid-template-rows: auto;
  grid-template-columns: 420px 1fr;
  grid-auto-columns: 1fr;
  width: 100%;
  max-width: 940px;
  display: grid;
  position: relative;
  overflow: hidden;
`;
export const ModalContent = styled("div")`
  color: var(--main-color-2);
  flex-flow: column;
  justify-content: space-between;
  padding: 30px 40px;
  display: flex;
`;
