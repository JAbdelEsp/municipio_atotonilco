import { useAppSelector } from "../hooks/redux-hooks";
import DynamicModal from "../common/DynamicModal";
// Import other modal components

const ModalContainer = () => {
  const openModal = useAppSelector((state) => state.modal.openModal);
  const renderModal = () => {
    switch (openModal) {
      case "createRegister":
        return <DynamicModal />;
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default ModalContainer;
