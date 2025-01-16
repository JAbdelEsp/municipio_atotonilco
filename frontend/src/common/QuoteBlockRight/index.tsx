import TextLink from "../TextLink";
import { PropsBlockRight } from "../types";
import {
  OrnamentVertical,
  OrnamentVerticalLine,
  OrnamentVertticalDot,
  QuoteBlockR,
  QuoteName,
  QuoteTitle,
} from "./styles";
const QuoteBlockRight = ({ title, authorName, button }: PropsBlockRight) => {
  return (
    <QuoteBlockR>
      <QuoteTitle>{title}</QuoteTitle>
      <QuoteName>{authorName}</QuoteName>
      <OrnamentVertical className="is-align-left">
        <OrnamentVerticalLine className="is-2nd" />
        <OrnamentVertticalDot className="is-2nd" />
        <OrnamentVerticalLine className="is-2nd" />
      </OrnamentVertical>
      <TextLink text={button} />
    </QuoteBlockR>
  );
};
export default QuoteBlockRight;
