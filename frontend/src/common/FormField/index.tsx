import { PropsFormField } from "../types";
import { FormFieldW } from "./styles";
const FormField = ({
  name,
  type,
  value,
  placeholder,
  onChange,
}: PropsFormField) => {
  return (
    <FormFieldW
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default FormField;
