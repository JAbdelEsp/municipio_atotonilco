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
import DeletePopup from "../components/task/DeletePopup";
import DeleteContainer from "../components/task/DeleteContainer";
import AddSevacPopup from "../components/Sevac/AddSevacPopup";
import AddSevacFilesPopup from "../components/Sevac/AddSevacFilesPopup";
// Import other modal components

const ModalContainer = () => {
  const openModal = useAppSelector((state) => state.modal.openModal);
  const modalProps = useAppSelector((state) => state.modal.modalProps);
  const renderModal = () => {
    switch (openModal) {
      case "addTask":
        return <AddTaskPopup />;
      case "addTaskPics":
        return (
          <AddTaskPicsPopup
            taskId={modalProps?.taskId}
            title={modalProps?.title}
          />
        );
      case "addFiles":
        return (
          <AddTransFilesPopup
            column={modalProps?.trimester}
            transId={modalProps?.transId}
            year={modalProps?.year}
            article={modalProps?.article}
          />
        );
      case "Delete":
        return (
          <DeleteContainer id={modalProps?.id} title={modalProps?.title} />
        );
      case "addTrans":
        return <AddTransPopup />;
      case "deleteTrans":
        return <DeleteTransPopup params={modalProps?.params} />;
      case "addTrans":
        return <AddTransPopup />;
      case "editTrans":
        return <EditTransPopup params={modalProps?.params} />;
      case "addSevac":
        return <AddSevacPopup />;
      case "addMultipleFiles":
        return (
          <AddSevacFilesPopup
            file_name={modalProps?.file_name}
            column={modalProps?.trimester}
            sevacId={modalProps?.transId}
            year={modalProps?.year}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default ModalContainer;
