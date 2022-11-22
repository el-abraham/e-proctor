import QuestionForm from "../../../components/forms/QuestionForm";
import Breadcrumbs from "../../../components/others/Breadcrumbs";

// https://npm.io/package/react-quilljs

export default function BankSoalBuatPertanyaan() {
  return (
    <div className="px-[70px] py-[30px] bg-[#EFF0F3] text-black">
      <Breadcrumbs />
      <QuestionForm />
    </div>
  );
}
