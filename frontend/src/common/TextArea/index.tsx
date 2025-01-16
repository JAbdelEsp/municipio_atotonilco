import { PropsTextArea } from "../types";
import { FormFieldW } from "./styles";
const TextArea = ({ name, value, onChange, placeholder }: PropsTextArea) => {
  return (
    <FormFieldW
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default TextArea;
