import { PropsPostLink } from "../types";
import { Heading, PostLinkW } from "./styles";

const PostLink = ({ children }: PropsPostLink) => {
  return (
    <PostLinkW>
      <Heading>{children}</Heading>
    </PostLinkW>
  );
};

export default PostLink;
