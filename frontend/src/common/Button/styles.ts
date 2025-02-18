import styled from "styled-components";

export const Button = styled("button")`
  z-index: 10;
  grid-column-gap: 0.3em;
  grid-row-gap: 0.3em;
  border: 1px solid #9c202a;
  color: #040404;
  text-align: center;
  border-radius: 50em;
  flex-flow: row;
  flex: none;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  text-decoration: none;
  transition: background-color 0.2s;
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .button-icon {
    width: 1em;
    height: 1em;
    font-size: 1.5em;
    display: none;
  }
`;
export const ButtonBackground = styled("div")`
  z-index: 10;
  grid-column-gap: 0.7em;
  grid-row-gap: 0.7em;
  background: linear-gradient(#9c202a 0 0) right / var(--p, 100%) no-repeat;
  transition: ease-in-out 0.5s, background-position 6s;
  color: #eaeaf6;
  text-align: center;
  border-radius: 50em;
  flex-flow: row;
  flex: none;
  justify-content: center;
  align-items: center;
  padding: 0.7em 1.6em;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
  &:hover {
    --p: 0%;
    color: #040404;
  }
`;
export const ButtonText = styled("div")`
  z-index: 10;
  font-family: var(--serif-font);
  font-size: 1.6em;
  font-weight: 500;
  line-height: 1em;
  position: relative;
`;
