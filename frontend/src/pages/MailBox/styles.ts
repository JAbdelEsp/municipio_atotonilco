import styled from "styled-components";
export const Section = styled("section")`
  z-index: 10;
  background-color: var(--dark);
  padding: 0% 2%;
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
  margin-top: 5em;
  position: relative;
`;
export const MainTitle = styled("h1")`
  text-align: left;
  letter-spacing: -5px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12vw;
  line-height: 1.1;
  color: #b3b2af;
`;
export const Lighter = styled("span")`
  margin-left: 20px;
  font-weight: 300;
  display: inline-block;
`;
export const ContactGrid = styled("div")`
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1.3fr;
  grid-auto-columns: 1fr;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
`;
export const InquiryGrid = styled("div")`
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1px 1fr;
  grid-auto-columns: 1fr;
  place-items: start;
  width: 80%;
  display: grid;
`;
export const InquiryFlex = styled("div")`
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
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
export const LightText = styled("span")`
  font-weight: 400;
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
export const InquiryDivider = styled("div")`
  background-color: #333;
  width: 1px;
  height: 90px;
`;
export const Wform = styled("div")`
  margin: 0 0 15px;
`;
export const FieldGrid = styled("div")`
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
`;
export const TextField = styled("input")`
  color: var(--main-color-2);
  background-color: #fff0;
  border: 1px solid #333;
  border-radius: 10px;
  min-height: 56px;
  margin-bottom: 0;
  padding-left: 16px;
  font-size: 15px;
`;
export const TextArea = styled("textarea")`
  grid-area: span 1 / span 2 / span 1 / span 2;
  color: var(--main-color-2);
  background-color: #fff0;
  border: 1px solid #333;
  border-radius: 10px;
  min-height: 56px;
  margin-bottom: 0;
  padding-left: 16px;
  font-size: 15px;
`;
