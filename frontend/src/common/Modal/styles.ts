import styled from "styled-components";
export const ThirdTitle = styled("h2")`
  text-align: left;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.1;
`;
export const SubscribeModalWrapper = styled("div")<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  z-index: 9999;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0%;
  .is-absolute {
    z-index: 2;
    position: absolute;
    transform: translate(-30px);
  }
  .subrcribe-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .second {
    max-width: 700px;
    height: 25em;
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 479px) {
    .second {
      height: 15em;
    }
  }
`;
export const SubscribeModal = styled("div")`
  z-index: 10;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: var(--dark);
  border-radius: 10px;
  grid-template-rows: auto;
  grid-template-columns: 420px 1fr;
  grid-auto-columns: 1fr;
  width: 100%;
  max-width: 940px;
  display: grid;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 479px) {
    margin-top: 2em;
    max-width: 85%;
    grid-template-columns: 1fr;
    padding: auto;
  }
`;
export const ModalContent = styled("div")`
  color: var(--main-color-2);
  flex-flow: column;
  justify-content: space-between;
  padding: 30px 40px;
  display: flex;
`;
export const ButtonIconMain = styled("div")`
  cursor: pointer;
  background-color: var(--dark);
  color: var(--main-color-2);
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  display: flex;
  position: absolute;
  inset: 15px 15px auto auto;
  overflow: hidden;
  transform: none;
`;
export const ButtonIconSvg = styled("div")`
  justify-content: center;
  align-items: center;
  width: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
`;
export const ModalOverlay = styled("div")`
  z-index: 7;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
`;
