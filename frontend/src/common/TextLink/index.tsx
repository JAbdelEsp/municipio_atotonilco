import { LinkProps } from "../types";
import { LinkWithArrows } from "./styles";

const TextLink = ({ text, href }: LinkProps) => {
  return <LinkWithArrows href={href}>{text}</LinkWithArrows>;
};

export default TextLink;
