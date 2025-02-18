import { SvgIcon } from "../../common/SvgIcon";
import Image from "../../common/Image";
import {
  BgForAnimation,
  BlogHeroContent,
  BlogHeroContentInner,
  BlogHeroImage,
  BlogHeroW,
  Heading,
  Paragraph,
  RevealImageTrigger,
} from "./styles";
import { BlogHeroProps } from "./types";

const BlogHero = ({
  content,
  title,
  subtitle,
  iconSrc,
  src,
  srcImgLoc,
}: BlogHeroProps) => {
  return (
    <BlogHeroW>
      <Paragraph className="is-large">{content}</Paragraph>
      <BlogHeroContent>
        <SvgIcon src={iconSrc} width="" height="" />
        <Heading className="is-blog-hero-title">{title}</Heading>
        <BlogHeroContentInner>
          <Heading className="is-blog-hero-title">{subtitle}</Heading>
          {src !== "" && (
            <BlogHeroImage>
              <RevealImageTrigger>
                <Image
                  src={src}
                  alt={src}
                  cls="cover-image fit-top"
                  location={srcImgLoc}
                />
                <BgForAnimation />
              </RevealImageTrigger>
            </BlogHeroImage>
          )}
        </BlogHeroContentInner>
      </BlogHeroContent>
    </BlogHeroW>
  );
};
export default BlogHero;
