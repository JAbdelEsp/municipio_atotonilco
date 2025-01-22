import React from "react";
import Button from "@mui/material/Button";
import { ButtonColor } from "../../constants";

type FormButtonProps = {
  // color: typeof Button.arguments.color
  color: ButtonColor;
  text: string;
  onClick?: any;
};

export default function FormButton({ color, text, onClick }: FormButtonProps) {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      size="medium"
      color={color}
      type="submit"
    >
      {text}
    </Button>
  );
}
