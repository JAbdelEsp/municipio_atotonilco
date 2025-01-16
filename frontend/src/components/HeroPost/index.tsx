import Button from "../../common/Button";
import Image from "../../common/Image";
import {
  Container,
  Heading,
  HeroPostW,
  HeroPostAuthor,
  HeroPostAuthorImage,
  HeroPostLayout,
  Paragraph,
} from "./styles";

const HeroPost = ({ scrollDown }: { scrollDown: () => void }) => {
  return (
    <HeroPostW>
      <Container>
        <HeroPostLayout>
          <HeroPostAuthor>
            <HeroPostAuthorImage>
              <Image src="brand_author.avif" alt="" cls="" location="authors" />
            </HeroPostAuthorImage>
            <Paragraph className="is-large">Emily R. Fooster</Paragraph>
          </HeroPostAuthor>
          <Heading className="is-hero-tittle">Title</Heading>
          <Button type="button" onClick={scrollDown}>
            Read
          </Button>
        </HeroPostLayout>
      </Container>
    </HeroPostW>
  );
};

export default HeroPost;
