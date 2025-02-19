import { DropDownProps } from "../types";
import { Select } from "antd";
const DropDownInput = ({ options, onChange, placeholder }: DropDownProps) => {
  return (
    <Select onChange={onChange} placeholder={placeholder} className="select">
      {options.map((option: any) => (
        <Select.Option key={option.id} value={option.name || option?.value}>
          {option.name || option?.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropDownInput;
