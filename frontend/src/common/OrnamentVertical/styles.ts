import styled from "styled-components";
export const OrnamentVerticalW = styled("div")`
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
export const OrnamentVerticalDot = styled("div")`
  background-color: #4c4766;
  border-radius: 50%;
  flex: none;
  width: 5px;
  height: 5px;
`;
