import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  getTextBanner,
  NewTextBannerFinal,
  updateTextBanner,
} from "../../slices/bannerSlice";
import { closeModal } from "../../slices/modalSlice";
import EditTextBannerInfoPopup from "./EditTextBannerInfoPopup";
interface EditTextBannerPopupProps {
  params: any;
}
const EditTextBannerPopup = ({ params }: EditTextBannerPopupProps) => {
  const dispatch = useAppDispatch();
  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", params.id);
    await dispatch(updateTextBanner(formData as unknown as NewTextBannerFinal));
    await dispatch(getTextBanner());
    dispatch(closeModal());
  };

  return (
    <>
      <EditTextBannerInfoPopup
        title="Editar Banner"
        params={params}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default EditTextBannerPopup;
