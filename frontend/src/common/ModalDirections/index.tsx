import { SvgIcon } from "../SvgIcon";
import {
  ButtonIconMain,
  ButtonIconSvg,
  ModalContent,
  ModalOverlay,
  SubscribeModal,
  SubscribeModalWrapper,
} from "./styles";
import parse from "html-react-parser";

const ModalDirections = ({ show, set, data }: any) => {
  return (
    <SubscribeModalWrapper show={show}>
      <SubscribeModal>
        <ButtonIconMain
          onClick={() => {
            set(!show);
          }}
        >
          <ButtonIconSvg>
            <SvgIcon src="close-svgrepo-com.svg" width="20px" height="" />
          </ButtonIconSvg>
        </ButtonIconMain>
        <img
          className="subrcribe-image"
          src={
            import.meta.env.VITE_API_URL +
            `/uploads/directions/${data.area}/${data.picture}`
          }
          alt={data.name}
        />
        <ModalContent>
          <div>
            <div className="second">
              <h4>{data.name + " " + data.lastname}</h4>
              {parse(data.description)}
            </div>
          </div>
        </ModalContent>
      </SubscribeModal>
      <ModalOverlay />
    </SubscribeModalWrapper>
  );
};

export default ModalDirections;
