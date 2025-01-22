// ModalContainer.tsx
import React from "react";
import { useSelector } from "react-redux";
import AddTaskPopup from "../components/task/AddTaskPopup";
import { useAppSelector } from "../hooks/redux-hooks";
import AddTaskPicsPopup from "../components/task/AddTaskPIcsPopup";
import AddTransFilesPopup from "../components/Transparency/AddTransFilesPopup";
import AddTransPopup from "../components/Transparency/AddTransPopup";
import DeleteTransPopup from "../components/Transparency/DeleteTransPopup";
import EditTransPopup from "../components/Transparency/EditTransPopup";
// Import other modal components

const ModalContainer = () => {
  const openModal = useAppSelector((state) => state.modal.openModal);
  const modalProps = useAppSelector((state) => state.modal.modalProps);

  const renderModal = () => {
    switch (openModal) {
      case "addTask":
        return <AddTaskPopup />;
      case "addTaskPics":
        return <AddTaskPicsPopup taskId={modalProps?.taskId} />;
      case "addFiles":
        return (
          <AddTransFilesPopup
            transId={modalProps?.transId}
            year={modalProps?.year}
            article={modalProps?.article}
          />
        );
      case "addTrans":
        return <AddTransPopup />;
      case "deleteTrans":
        return <DeleteTransPopup transId={modalProps?.transId} />;
      case "addTrans":
        return <AddTransPopup />;
      case "editTrans":
        return <EditTransPopup params={modalProps?.params} />;
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default ModalContainer;
