import { Button, ButtonBackground, ButtonText } from "./styles";
import { PropsButton } from "../types";
import { SvgIcon } from "../SvgIcon";
const ButtonComponent = ({ children, type, onClick }: PropsButton) => {
  return (
    <Button type={type} onClick={onClick}>
      <ButtonBackground>
        <ButtonText>{children}</ButtonText>
        <SvgIcon src="arrow_down.svg" width="20px" height="" />
      </ButtonBackground>
    </Button>
  );
};

export default ButtonComponent;
