import { PropsSocialLink } from "../types";
import { SocialLink } from "./styles";

const SocialLinkB = ({ children, href }: PropsSocialLink) => {
  return (
    <SocialLink href={href} target="_blank">
      {children}
    </SocialLink>
  );
};

export default SocialLinkB;
