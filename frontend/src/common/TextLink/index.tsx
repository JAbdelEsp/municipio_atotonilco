import { LinkProps } from "../types";
import { LinkWithArrows } from "./styles";

const TextLink = ({ text }: LinkProps) => {
  return <LinkWithArrows>{text}</LinkWithArrows>;
};

export default TextLink;
