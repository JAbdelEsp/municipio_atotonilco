import QuoteBlockRight from "../../common/QuoteBlockRight";
import QuoteBackground from "../../common/QuoteBackground";
import { QuoteWrapper, Section } from "./styles";
import QuoteBlock from "../../common/QuoteBlock";

const Quote = () => {
  return (
    <Section>
      <QuoteWrapper>
        {/* <QuoteBlock
          title="Lorem ipsum dolor amet, consectetur."
          authorName="Rocio. L L"
          button="Leer Más"
        /> */}
        <QuoteBlockRight
          title="Lorem ipsum dolor amet, consectetur."
          authorName="Rocio. L L"
          button="Leer Más"
        />
        <QuoteBackground
          src="462620438_939996391507390_3919165551938091982_n.jpg"
          src_loc="services"
        />
      </QuoteWrapper>
    </Section>
  );
};
export default Quote;
