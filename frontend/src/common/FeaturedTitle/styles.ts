import styled from "styled-components";

export const BodyContent = styled("div")`
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
  .featured {
    padding-top: 1%;
    padding-bottom: 2%;
  }
  .center {
    text-align: center;
  }
  .lighter {
    margin-left: 20px;
    font-weight: 300;
    display: inline-block;
  }
`;
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
  position: relative;
`;
export const MainTitle = styled("h1")`
  text-align: left;
  letter-spacing: -5px;
  text-transform: uppercase;
  margin-top: 110px;
  margin-bottom: 0;
  font-size: min(10vw, 10em);
  line-height: 1.1;
  color: var(--gray);
`;
export const LightText = styled("span")`
  font-weight: 400;
`;
