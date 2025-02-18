import styled from "styled-components";

export const QuoteBlockW = styled("div")`
  z-index: 10;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  text-align: left;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  color: #fff;
  border-radius: 3px;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  max-width: 35em;
  margin: 5em auto 5em 3em;
  padding: 3em;
  display: flex;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-top: auto;
    margin-bottom: 3em;
  }
  @media screen and (max-width: 479px) {
    grid-column-gap: 0.9em;
    grid-row-gap: 0.9em;
    width: 70%;
    margin-bottom: 1.5em;
    margin-left: 8vw;
    padding: 4vw;
  }
`;
export const QuoteTitle = styled("p")`
  font-family: var(--serif-font);
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: 100;
  line-height: 1.4em;
  @media screen and (max-width: 479px) {
    font-size: min(1.5em, 5vw);
  }
`;
export const QuoteName = styled("p")`
  opacity: 0.6;
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 400;
`;
export const OrnamentVertical = styled("div")`
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 1px;
  height: 100%;
  display: flex;
  position: absolute;
`;
export const OrnamentVerticalLine = styled("div")`
  background-color: #4c4766;
  flex: 1;
  width: 1px;
`;
export const OrnamentVertticalDot = styled("div")`
  background-color: #4c4766;
  border-radius: 50%;
  flex: none;
  width: 5px;
  height: 5px;
`;
