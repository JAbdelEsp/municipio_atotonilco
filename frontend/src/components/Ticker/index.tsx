import { TextPara, TickerContainer, TickerContent } from "./styles";

const Ticker = ({ message }: any) => {
  return (
    <TickerContainer>
      <TickerContent>
        {message &&
          message.map((item: string | any, key: number) => (
            <TextPara key={key}>{item.text} &nbsp; | &nbsp;</TextPara>
          ))}
      </TickerContent>
    </TickerContainer>
  );
};

export default Ticker;
