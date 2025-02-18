import {
  BgForAnimation,
  ParallaxLayout,
  ParallaxTrigger,
  QuoteBackgroundW,
} from "./styles";
import Image from "../Image";
import { PropsQuoteBackground } from "../types";
const QuoteBackground = ({ src, src_loc }: PropsQuoteBackground) => {
  return (
    <QuoteBackgroundW>
      <ParallaxTrigger>
        <ParallaxLayout>
          <Image src={src} alt={src} location={src_loc} cls="cover-image" />
          <BgForAnimation />
        </ParallaxLayout>
      </ParallaxTrigger>
    </QuoteBackgroundW>
  );
};
export default QuoteBackground;
