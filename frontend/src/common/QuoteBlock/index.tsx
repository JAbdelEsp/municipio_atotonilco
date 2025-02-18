import TextLink from "../TextLink";
import { PropsBlock } from "../types";
import {
  OrnamentVertical,
  OrnamentVerticalLine,
  OrnamentVertticalDot,
  QuoteBlockW,
  QuoteName,
  QuoteTitle,
} from "./styles";
const QuoteBlock = ({ title, author, button }: PropsBlock) => {
  return (
    <QuoteBlockW>
      <QuoteTitle>{title}</QuoteTitle>
      <QuoteName>{author}</QuoteName>
      <OrnamentVertical className="is-align-left">
        <OrnamentVerticalLine className="is-2nd" />
        <OrnamentVertticalDot className="is-2nd" />
        <OrnamentVerticalLine className="is-2nd" />
      </OrnamentVertical>
      <TextLink text={button} />
    </QuoteBlockW>
  );
};
export default QuoteBlock;
