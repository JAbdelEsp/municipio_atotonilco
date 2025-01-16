import { useState } from "react";
import { DropDownProps } from "../types";
import { Select } from "antd";
const DropDownInput = ({ options, onChange }: DropDownProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  return (
    <Select
      onChange={onChange}
      placeholder="Selecciona Año de Consulta"
      className="select"
    >
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropDownInput;
