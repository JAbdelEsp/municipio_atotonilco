import styled from "styled-components";

export const LinkWithArrows = styled("a")`
  z-index: 10;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  // color: #fff;
  background-image: url(https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg),
    url(https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg);
  background-position: -40%, 100%;
  background-repeat: no-repeat, no-repeat;
  background-size: 1em, 1em;
  padding: 0.5em 1.5em 0.5em 0;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1.1em;
  transition: padding 1s cubic-bezier(0.075, 0.82, 0.165, 1), border-color 0.2s,
    background-position 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: block;
  position: relative;
  cursor: pointer;
  &:hover {
    background-position: 1%, 115%;
    padding-left: 2em;
  }
`;
