import styled from "styled-components";
import { Select } from "antd";
export const DropDown = styled(Select)<{
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}>`
  width: 240px;
  height: 60px;
`;
