import { HeroImage, RevealImageTrigger, Section } from "./styles";
import Image from "../../common/Image";
const HeroImageC = () => {
  return (
    <Section>
      <HeroImage>
        <RevealImageTrigger>
          <Image
            src="462805340_963175692507025_8891761008437677163_n.jpg"
            alt="Hero Image"
            cls="cover-image fit-top"
            location={"articles"}
          />
        </RevealImageTrigger>
      </HeroImage>
    </Section>
  );
};

export default HeroImageC;
