import { PropsFormField } from "../types";
import { FormFieldW } from "./styles";
const FormField = ({
  name,
  required,
  type,
  value,
  placeholder,
  onChange,
}: PropsFormField) => {
  return (
    <FormFieldW
      required={required}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default FormField;
