import {
  OrnamentVerticalDot,
  OrnamentVerticalLine,
  OrnamentVerticalW,
} from "./styles";

const OrnamentVertical = () => {
  return (
    <OrnamentVerticalW className="is-align-left">
      <OrnamentVerticalLine />
      <OrnamentVerticalDot />
      <OrnamentVerticalLine />
    </OrnamentVerticalW>
  );
};
export default OrnamentVertical;
