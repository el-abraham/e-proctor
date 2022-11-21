import QuillJsQuestionLihat from "../../../components/forms/QuillJsQuestionLihat";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import NamaUjian from "../../../components/others/NamaUjian";

export default function UjianAndaQuestionLihat () {

  return (
    <div className="px-[70px] py-[30px] min-h-screen bg-[#EFF0F3] text-black">
      <Breadcrumbs />
      <NamaUjian />
      <QuillJsQuestionLihat/>

    </div>
  );
}
