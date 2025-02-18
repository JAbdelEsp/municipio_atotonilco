import styled from "styled-components";
export const Wform = styled("div")`
  margin: 0 0 15px;
  .select {
    color: var(--main-color-2);
    background-color: #fff0;
    border: 1px solid #333;
    border-radius: 10px;
    min-height: 56px;
    margin-bottom: 0;
    padding-left: 16px;
    font-size: 15px;
  }
  .ant-select-selector {
    background: transparent !important;
    border: none !important;
  }
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
