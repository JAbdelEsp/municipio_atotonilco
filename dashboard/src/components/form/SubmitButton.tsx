import React from "react";
import Button from "@mui/material/Button";
import FormButton from "./FormButton";
import { ButtonColor } from "../../constants";

type SubmitButtonProps = {
  type: any;
  onClick?: () => void;
  text: string;
};

export default function SubmitButton({
  type,
  onClick,
  text,
}: SubmitButtonProps) {
  return (
    <FormButton color={ButtonColor.Primary} onClick={onClick} text={text} />
  );
}
