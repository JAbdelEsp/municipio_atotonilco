import styled from "styled-components";

export const Section = styled("section")`
  opacity: 1;
  background: transparent;
  color: rgb(23, 23, 23);
  box-shadow: none;
  margin-bottom: 3em;
`;

export const MuiGridContainer = styled("div")`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
`;

export const MuiGridItem = styled("div")`
  flex-basis: 24.6444%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 33.3333%;
  padding-left: 3em;
  padding-top: 3em;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 100%;
    padding-left: 3em;
    padding-right: 2em;
  }
`;

export const MuiBoxRoot = styled("div")`
  margin-top: 24px;
  opacity: 1;
  background: transparent;
  color: rgb(23, 23, 23);
  box-shadow: none;
`;

export const MuiPaperRoot = styled("div")`
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  box-shadow: rgba(0, 0, 0, 0.05) 0rem 0.0625rem 0.125rem 0rem;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border-width: 0.0625rem;
  border-style: solid;
  border-color: rgb(229, 229, 229);
  border-image: initial;
  border-radius: 0.5rem;
  overflow: visible;
  &:hover .card-header {
    transform: translate3d(0px, -50px, 0px);
  }
`;

export const CardHeader = styled("div")`
  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  opacity: 1;
  background: transparent;
  color: rgb(23, 23, 23);
  border-radius: 0.375rem;
  box-shadow: none;
  transition: transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
  img {
    width: 100%;
    height: 25em;
    object-fit: cover;
    position: relative;
    z-index: 1;
    opacity: 1;
    background: transparent;
    color: rgb(23, 23, 23);
    border-radius: 0.375rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,
      rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
  }
`;

export const ImageRevealTrigger = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 1;
  color: rgb(23, 23, 23);
  box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,
    rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
  transform: scale(0.94);
  filter: blur(12px);
  background: url("/material-dashboard-pro-react/static/media/product-1-min.a4c2bc133076d3b7c517.jpg")
    0% 0% / cover transparent;
  border-radius: 0.375rem;
`;

export const CardContent = styled("div")`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  opacity: 1;
  background: transparent;
  color: rgb(23, 23, 23);
  box-shadow: none;
`;

export const CardButton = styled("div")`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: -64px;
  opacity: 1;
  background: transparent;
  color: rgb(23, 23, 23);
  box-shadow: none;
`;

export const MinParaIcon = styled("p")`
  margin: 0px 24px;
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(233, 30, 99);
  cursor: pointer;
`;

export const MinPara = styled("p")`
  margin: 12px 0px 8px;
  font-family: Inter, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(115, 115, 115);
  font-weight: 400;
  font-size: 14px;
`;

export const Span = styled("span")`
  padding-top: 2.5px;
  user-select: none;
  width: 1em;
  height: 1em;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  flex-shrink: 0;
  font-size: inherit !important;
`;

export const MinTitle = styled("h5")`
  margin: 32px 0px 0px;
  font-size: 1.25rem;
  line-height: 1.375;
  font-family: Inter, Helvetica, Arial, sans-serif;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(23, 23, 23);
  font-weight: 700;
`;

export const Divider = styled("div")`
  flex-shrink: 0;
  border-top: 0px solid rgba(0, 0, 0, 0.12);
  border-right: 0px solid rgba(0, 0, 0, 0.12);
  border-left: 0px solid rgba(0, 0, 0, 0.12);
  background-color: transparent;
  height: 0.0625rem;
  margin: 1rem 0px;
  border-bottom: none;
  opacity: 0.25;
  background-image: linear-gradient(
    to right,
    rgba(23, 23, 23, 0),
    rgba(23, 23, 23, 0.4),
    rgba(23, 23, 23, 0)
  ) !important;
`;

export const CardLocation = styled("div")`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
  line-height: 1;
  opacity: 1;
  background: transparent;
  color: rgb(23, 23, 23);
  box-shadow: none;
`;

export const CardLocContent = styled("div")`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  opacity: 1;
  background: transparent;
  color: rgb(115, 115, 115);
  box-shadow: none;
`;
