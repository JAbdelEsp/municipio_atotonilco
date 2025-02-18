import React from "react";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

type FormCheckboxFieldProps = {
  label: string;
  name: string;
  value?: string;
  isRequired: boolean | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormCheckboxField({
  label,
  name,
  value,
  isRequired,
  onChange,
}: FormCheckboxFieldProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox name={name} onChange={onChange} />}
        label={label}
      />
    </FormGroup>
  );
}
