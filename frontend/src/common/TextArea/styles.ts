import styled from "styled-components";

export const FormFieldW = styled("textarea")`
  z-index: 5;
  border-style: solid;
  border-width: 2px 2px 1px;
  border-color: var(--transparent) var(--transparent) var(--cta-color-2);
  background-color: var(--transparent);
  color: var(--cta-color-6);
  text-transform: uppercase;
  align-self: stretch;
  width: 100%;
  min-height: 3em;
  margin-bottom: 0.3em;
  padding: 0.8em 0;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.1em;
  transition: border-color 0.2s;
  position: relative;
`;
