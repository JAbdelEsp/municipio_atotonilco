import React from "react";
import Button from "@mui/material/Button";
import { ButtonColor } from "../../constants";

type FormButtonProps = {
  // color: typeof Button.arguments.color
  color: ButtonColor;
  text: string;
  onClick?: any;
  disabled?: boolean;
};

export default function FormButton({
  color,
  text,
  onClick,
  disabled,
}: FormButtonProps) {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      size="medium"
      color={color}
      type="submit"
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
