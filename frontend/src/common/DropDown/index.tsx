import { useState } from "react";
import { DropDownProps } from "../types";
import { Select } from "antd";
const DropDownInput = ({ options, onChange, placeholder }: DropDownProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  return (
    <Select onChange={onChange} placeholder={placeholder} className="select">
      {options.map((option: any) => (
        <Select.Option key={option.id} value={option.name}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropDownInput;
