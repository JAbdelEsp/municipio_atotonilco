import React from "react";
import Button from "@mui/material/Button";
import FormButton from "./FormButton";
import { ButtonColor } from "../../constants";

type SubmitButtonProps = {
  type: any;
  onClick?: () => void;
  text: string;
  disabled?: boolean;
};

export default function SubmitButton({
  type,
  onClick,
  text,
  disabled,
}: SubmitButtonProps) {
  return (
    <FormButton
      color={ButtonColor.Primary}
      onClick={onClick}
      text={text}
      disabled={disabled}
    />
  );
}
