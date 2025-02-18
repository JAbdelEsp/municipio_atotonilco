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
import AddPlanningFilesPopup from "../components/Planning/AddPlanningFilesPopup";
import AddPlanningPopup from "../components/Planning/AddPlanningPopup";
import DeletePlanningPopup from "../components/Planning/DeletePlanningPopup";
import DeleteSevacPopup from "../components/Sevac/DeleteSevacPopup";
import AddPublicInfo from "../components/Planning/AddPublicInfo";
import DeletePublicPopup from "../components/Planning/DeletePublicInfoPopup";
import AddResourcesPopup from "../components/Resources/AddResourcesPopup";
import AddResourcesContainer from "../components/Resources/AddResourcesContainer";
import DeleteResourcesPopup from "../components/Resources/DeleteResourcesPopup";
import EditResourcesContainer from "../components/Resources/EditResourcesContainer";
import AddComptrollerPopup from "../components/Comptroller/AddComptrollerPopup";
import AddComptrollerFilesPopup from "../components/Comptroller/AddComptrollerFilesPopup";
import DeleteComptrollerPopup from "../components/Comptroller/DeleteComptrollerPopup";
import AddPublicInfoComp from "../components/Comptroller/AddPublicInfoComp";
import DeletePublicPopupComp from "../components/Comptroller/DeletePublicInfoPopupComp";
import AddTextBannerPopup from "../components/TextBanners/AddTextBannerPopup";
import EditTextBannerPopup from "../components/TextBanners/EditTextBannerPopup";
import DeleteTextBannerPopup from "../components/TextBanners/DeleteTextBannerPopup";
import AddBannerPopup from "../components/TextBanners/AddBannerPopup";
import DeleteBannerPopup from "../components/TextBanners/DeleteBannerPopup";
import AddVideoPopup from "../components/TextBanners/AddVideoPopup";
import DeleteVideoPopup from "../components/TextBanners/DeleteVideoPopup";
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
      case "editTrans":
        return <EditTransPopup params={modalProps?.params} />;
      case "addSevac":
        return <AddSevacPopup />;
      case "addMultipleFiles":
        return (
          <AddSevacFilesPopup
            section={modalProps?.section}
            column={modalProps?.trimester}
            sevacId={modalProps?.transId}
            year={modalProps?.year}
          />
        );
      case "deleteSevac":
        return <DeleteSevacPopup params={modalProps?.params} />;
      case "addPlanning":
        return <AddPlanningPopup />;
      case "addPublicInfo":
        return (
          <AddPublicInfo
            title={""}
            planningId={""}
            file_name={""}
            year={""}
            column={""}
            onSubmit={undefined}
          />
        );
      case "addPlanningMultipleFiles":
        return (
          <AddPlanningFilesPopup
            file_name={modalProps?.file_name}
            column={modalProps?.trimester}
            planningId={modalProps?.planningId}
            year={modalProps?.year}
          />
        );
      case "deletePlanning":
        return <DeletePlanningPopup params={modalProps?.params} />;
      case "deletePublicInfo":
        return <DeletePublicPopup params={modalProps?.params} />;
      case "addRequeriment":
        return <AddPlanningPopup />;
      case "addResources":
        return (
          <AddResourcesContainer
            params={modalProps?.params}
            req={modalProps?.req}
          />
        );
      case "editResources":
        return (
          <EditResourcesContainer
            id={modalProps?.id}
            req={modalProps?.req}
            params={[]}
          />
        );
      case "deleteResources":
        return (
          <DeleteResourcesPopup
            id={modalProps?.id}
            description={modalProps?.description}
          />
        );

      case "addComptroller":
        return <AddComptrollerPopup />;
      case "addPublicInfoComp":
        return (
          <AddPublicInfoComp
            title={""}
            planningId={""}
            file_name={""}
            year={""}
            column={""}
            onSubmit={undefined}
          />
        );
      case "addComptrollerMultipleFiles":
        return (
          <AddComptrollerFilesPopup
            file_name={modalProps?.file_name}
            column={modalProps?.trimester}
            comptrollerId={modalProps?.comptrollerId}
            year={modalProps?.year}
          />
        );
      case "deleteComptroller":
        return <DeleteComptrollerPopup params={modalProps?.params} />;
      case "deletePublicInfoComp":
        return <DeletePublicPopupComp params={modalProps?.params} />;
      case "addTextBanner":
        return <AddTextBannerPopup />;
      case "addBanner":
        return <AddBannerPopup />;
      case "addVideo":
        return <AddVideoPopup />;
      case "editTextBanner":
        return <EditTextBannerPopup params={modalProps?.params} />;
      case "deleteTextBanner":
        return <DeleteTextBannerPopup params={modalProps?.params} />;
      case "deleteBanner":
        return <DeleteBannerPopup params={modalProps?.params} />;
      case "deleteVideo":
        return <DeleteVideoPopup params={modalProps?.params} />;
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default ModalContainer;
